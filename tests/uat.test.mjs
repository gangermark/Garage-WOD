import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const html=fs.readFileSync('index.html','utf8');
const app=fs.readFileSync('js/app.js','utf8');
const db=fs.readFileSync('js/workouts.js','utf8');
const sw=fs.readFileSync('service-worker.js','utf8');
const context=vm.createContext({});
vm.runInContext(db+';globalThis.DATA=WORKOUTS;',context);
const workouts=Array.from(context.DATA);
test('40 unika pass med fyra format',()=>{
 assert.equal(workouts.length,40);
 assert.equal(new Set(workouts.map(w=>w.id)).size,40);
 for(const format of ['AMRAP','EMOM','FOR TIME','CHIPPER'])
   assert.equal(workouts.filter(w=>w.format===format).length,10);
});
test('pass har giltiga obligatoriska fält',()=>{
 for(const w of workouts){
  assert.ok(w.id&&w.name&&w.format);
  assert.ok(Number.isFinite(w.duration)&&w.duration>0,w.id);
  assert.ok(Array.isArray(w.movements)&&w.movements.length>0,w.id);
  assert.ok(Array.isArray(w.equipment),w.id);
  assert.ok(['countdown','countup'].includes(w.timerMode),w.id);
 }
});
test('filter för tid, intensitet och fokus finns',()=>{
 for(const id of ['durationSelect','difficultySelect','focusSelect','filterStatus']) assert.ok(html.includes('id="'+id+'"'),id);
 for(const n of [10,15,20,30,40]) assert.ok(html.includes('value="'+n+'"'));
 assert.ok(app.includes('w.difficulty === difficulty'));
 assert.ok(app.includes('(w.focus||[]).includes(focus)'));
});
test('utrustningsval och anti-repeat finns',()=>{
 for(const e of ['BODYWEIGHT','KETTLEBELL','DUMBBELL','BARBELL','RINGS','JUMP_ROPE','BATTLE_ROPE','BENCH'])
  assert.ok(html.includes('value="'+e+'"'),e);
 assert.ok(app.includes('(w.equipment||[]).every(e=>available.includes(e))'));
 assert.ok(app.includes('.slice(0,10)'));
});
test('övningsbyte och tidsanpassning är implementerade',()=>{
 assert.ok(app.includes('function replaceMovement(index)'));
 assert.ok(app.includes('workout.timerSeconds = requested*60'));
});
test('ingen löpning som kroppsviktsersättning',()=>{
 assert.ok(!app.includes("available.includes('BODYWEIGHT') && RUNNING.includes(m)"),'Löpning tillåts som kroppsvikt');
});
test('tidsanpassning hanterar countup',()=>{
 const hasCountup=workouts.some(w=>w.timerMode==='countup');
 assert.ok(!hasCountup||app.includes("workout.timerMode = 'countdown'"),'Countup saknar tidsgräns');
});
test('PWA cache innehåller viktiga resurser',()=>{
 for(const p of ['./index.html','./js/app.js','./js/workouts.js','./css/style.css']) assert.ok(sw.includes(p));
});
