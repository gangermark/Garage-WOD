const APP_VERSION = "2.0.0-dev";
const BARBELL = [
  {name:"Marklyft", tag:"Skivstång", desc:"Lyft stången från golvet till stående med rak rygg, driv med höfterna."},
  {name:"Frontböj", tag:"Skivstång", desc:"Knäböj med stången vilande på axlarna framtill, armbågarna högt."},
  {name:"Baksquat", tag:"Skivstång", desc:"Knäböj med stången på övre ryggen, håll bröstet högt genom hela rörelsen."},
  {name:"Push press", tag:"Skivstång", desc:"Liten benböj för fart, driv sedan stången rakt upp över huvudet."},
  {name:"Thruster", tag:"Skivstång", desc:"Frontböj som övergår direkt i en stöt av stången över huvudet."},
  {name:"Hang power clean", tag:"Skivstång", desc:"Explosivt drag från lårhöjd, fånga stången på axlarna i en halvböj."},
  {name:"Sumo deadlift high pull", tag:"Skivstång", desc:"Bred stans marklyft som fortsätter upp till ett drag mot hakan."},
];

const STRENGTH_ONLY = [
  {name:"Marklyft", scheme:"5×5, bygg tungt", desc:"Lyft stången från golvet till stående med rak rygg, driv med höfterna."},
  {name:"Baksquat", scheme:"5×5, bygg tungt", desc:"Knäböj med stången på övre ryggen, håll bröstet högt genom hela rörelsen."},
  {name:"Frontböj", scheme:"5×3, teknikfokus", desc:"Knäböj med stången vilande på axlarna framtill, armbågarna högt."},
  {name:"Push press", scheme:"5×3", desc:"Liten benböj för fart, driv sedan stången rakt upp över huvudet."},
];

function pickDbWeight(heavy){
  const pool = heavy ? [8,10,10] : [6,6,8];
  return pick(pool);
}
function pickKbWeight(intensity){
  if(intensity === 'light') return pick([12,16]);
  if(intensity === 'heavy') return pick([20,24,28]);
  return pick([16,20,24]);
}

const DUMBBELL = [
  {name:"DB thrusters", tagFn: () => `Hantlar 2×${pickDbWeight(true)}kg`, desc:"Frontböj med en hantel i vardera hand, avsluta med en stöt över huvudet."},
  {name:"DB snatch, växelvis", tagFn: () => `Hantel ${pickDbWeight(true)}kg`, desc:"För en hantel från golvet till rakt över huvudet i en explosiv rörelse, byt sida varje rep."},
  {name:"Man makers", tagFn: () => `Hantlar 2×${pickDbWeight(false)}kg`, desc:"Burpee med hantlar följt av rodd, clean och stöt över huvudet."},
  {name:"DB push press", tagFn: () => `Hantlar 2×${pickDbWeight(true)}kg`, desc:"Liten benböj för fart, driv hantlarna rakt upp över huvudet."},
  {name:"Renegade rows", tagFn: () => `Hantlar 2×${pickDbWeight(false)}kg`, desc:"Stå i plankan på hantlarna och dra växelvis upp en hantel mot höften."},
];

const KETTLEBELL = [
  {name:"KB swings", tagFn: () => `Kettlebell ${pickKbWeight('heavy')}kg`, desc:"Svinga kettlebellen från mellan benen upp till axelhöjd med kraft från höften."},
  {name:"Goblet squats", tagFn: () => `Kettlebell ${pickKbWeight('moderate')}kg`, desc:"Knäböj med kettlebellen hållen mot bröstet med båda händerna."},
  {name:"KB clean & press", tagFn: () => `Kettlebell ${pickKbWeight('moderate')}kg`, desc:"Lyft kettlebellen till axeln i ett drag, pressa sedan upp över huvudet."},
  {name:"Turkish get-up", tagFn: () => `Kettlebell ${pickKbWeight('light')}kg`, desc:"Ta dig från liggande till stående med kettlebellen sträckt över huvudet hela vägen."},
  {name:"KB snatch", tagFn: () => `Kettlebell ${pickKbWeight('moderate')}kg`, desc:"För kettlebellen från mellan benen till rakt över huvudet i en enda rörelse."},
];

const ROPE = [
  {name:"Battlerope waves", tag:"Battlerope 9kg", desc:"Väx armarna omväxlande upp och ner så repet bildar vågor."},
  {name:"Battlerope slams", tag:"Battlerope 9kg", desc:"Lyft repet med båda armarna och slå ner det i golvet med kraft."},
];

const RINGS = [
  {name:"Ring rows", tag:"Ringar", desc:"Häng i ringarna med kroppen sluttande, dra bröstet mot ringarna."},
  {name:"Ring dips", tag:"Ringar", desc:"Håll dig uppe på raka armar mellan ringarna, sänk och pressa upp igen."},
  {name:"Ring push-ups", tag:"Ringar", desc:"Armhävningar med händerna på ringarna för extra stabiliseringskrav."},
  {name:"L-sit hold", tag:"Ringar", desc:"Häng i ringarna och håll benen raka och lyfta framför kroppen."},
];

const RUNNING = [
  {name:"Löpning", tag:"Konditionsslinga", desc:"Lätt löpning utomhus eller på stället, jämnt tempo."},
];

const BODYWEIGHT = [
  {name:"Burpees", tag:"Kroppsvikt", desc:"Fall ner till marken, armhävning, hoppa upp fötterna och avsluta med hopp."},
  {name:"Air squats", tag:"Kroppsvikt", desc:"Knäböj till kroppsvikt, håll ner till minst höftens nivå."},
  {name:"Mountain climbers", tag:"Kroppsvikt", desc:"Stå i plankan och dra växelvis knäna mot bröstet i högt tempo."},
  {name:"Jumping lunges", tag:"Kroppsvikt", desc:"Utfallshopp där du byter ben i luften mellan varje rep."},
  {name:"Sit-ups", tag:"Kroppsvikt", desc:"Situps från liggande till sittande med fötterna förankrade eller fria."},
  {name:"Push-ups", tag:"Kroppsvikt", desc:"Armhävningar med kroppen rak från huvud till häl."},
];

const ALL_POOLS = [BARBELL, DUMBBELL, KETTLEBELL, ROPE, RINGS, BODYWEIGHT, RUNNING];
function getAllowedPools(equipmentMode) {
  const mode = String(equipmentMode || '').toUpperCase();
  if (mode === 'BODYWEIGHT') return [BODYWEIGHT];
  if (mode === 'TRAVEL') return [BODYWEIGHT, RUNNING];
  return ALL_POOLS;
}

const WARMUPS = [
  "5 min lätt hopprep eller jogging på stället, sedan armcirklar + höftrotationer.",
  "3 varv: 10 air squats, 10 armhävningar (skala vid behov), 20 sek plankan.",
  "Rodd/löpning lätt 4 min, sedan dynamisk rörlighet för höft och axlar.",
  "2 min battlerope lätta waves + 10 world's greatest stretch per sida.",
  "5 min stegrande puls, sedan 2×8 goblet squats med lätt vikt som teknikpass.",
];

const NOTES = [
  "Skala reps eller vikt om tekniken bryter ihop — kvalitet före tempo.",
  "Nybörjartips: hellre en snygg reprange lägre än planerat än trasig teknik på sista rundan.",
  "Vila 1–2 min mellan ronder om pulsen skenar, det är okej.",
  "Ring-rörelser: justera vinkel/fothöjd för att göra dem lättare eller svårare.",
];

function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
function pickN(arr, n){
  const copy=[...arr];
  const out=[];
  while(out.length<n && copy.length){
    out.push(copy.splice(Math.floor(Math.random()*copy.length),1)[0]);
  }
  return out;
}
function randEven(min,max){
  const lo = Math.ceil(min/2)*2;
  const hi = Math.floor(max/2)*2;
  const steps = (hi-lo)/2;
  return lo + 2*Math.floor(Math.random()*(steps+1));
}

function resolveTag(m){
  return m.tagFn ? m.tagFn() : m.tag;
}

function pickMovements(count, excludePools = null, equipmentMode = 'ALL') {
  // 1) get allowed pools for the mode
  const allowedPools = getAllowedPools(equipmentMode) || ALL_POOLS;

  // 2) apply excludePools if provided (excludePools expected to be array of pool references)
  const sourcePools = Array.isArray(excludePools) && excludePools.length
    ? allowedPools.filter(pool => !excludePools.includes(pool))
    : allowedPools;

  // 3) flatten pools into a single array of movement objects
  const movementList = sourcePools.reduce((acc, pool) => {
    if (Array.isArray(pool)) return acc.concat(pool);
    return acc;
  }, []);

  // 4) randomly select `count` unique movements from the flattened array
  const selected = pickN(movementList, Math.min(count, movementList.length));

  // 5) return movement objects with resolved tags
  return selected.map(m => ({ name: m.name, tag: resolveTag(m), desc: m.desc }));
}

function repsFor(name, format){
  const heavy = ["Marklyft","Baksquat","Frontböj","Push press","Thruster","Hang power clean","Sumo deadlift high pull"];
  const medium = ["DB thrusters","DB snatch, växelvis","Man makers","DB push press","Renegade rows","KB swings","Goblet squats","KB clean & press","Turkish get-up","KB snatch"];

  if(name === "L-sit hold") return format==="EMOM" ? "10–20 sek" : "3×15–20 sek";
  if(name === "Turkish get-up") return format==="EMOM" ? "1/sida" : "2–4/sida";
  if(name === "Battlerope waves") return "30 sek";
  if(name === "Battlerope slams") return randEven(12,16)+" st";
  if(name === "Löpning") return pick([200,400,600,800])+" m";

  if(heavy.includes(name)){
    if(format==="AMRAP") return randEven(4,8)+" reps";
    if(format==="EMOM") return randEven(8,16)+" reps";
    if(format==="FOR TIME") return randEven(6,10)+" reps";
    if(format==="CHIPPER") return randEven(14,22)+" reps";
  }
  if(medium.includes(name) && format==="CHIPPER") return randEven(18,28)+" reps";
  if(format==="AMRAP") return randEven(8,14)+" reps";
  if(format==="EMOM") return randEven(6,12)+" reps";
  if(format==="FOR TIME") return randEven(10,14)+" reps";
  if(format==="CHIPPER") return randEven(30,50)+" reps";
  return randEven(8,12)+" reps";
}

function buildWorkout(forcedFormat, equipmentMode = "ALL") {
  // Select a workout from the WORKOUTS database matching format and equipmentMode
  const formats = ["AMRAP","EMOM","FOR TIME","CHIPPER"];
  const format = (forcedFormat && forcedFormat !== "RANDOM") ? forcedFormat : null;

  // Filter by format (if provided) and by equipmentMode inclusion
  const candidates = (Array.isArray(WORKOUTS) ? WORKOUTS : []).filter(w => {
    const formatMatch = format ? w.format === format : true;
    const equipmentMatch = Array.isArray(w.equipmentMode) ? w.equipmentMode.includes(equipmentMode) : false;
    return formatMatch && equipmentMatch;
  });

  if(!candidates.length) return null;

  const chosen = pick(candidates);
  // return a deep copy so callers can modify without touching the DB
  return JSON.parse(JSON.stringify(chosen));
}

const card = document.getElementById('card');
const formatLabel = document.getElementById('formatLabel');
const formatName = document.getElementById('formatName');
const formatDetail = document.getElementById('formatDetail');
const warmupEl = document.getElementById('warmup');
const strengthBlock = document.getElementById('strengthBlock');
const strengthEl = document.getElementById('strength');
const movementList = document.getElementById('movementList');
const noteEl = document.getElementById('note');
const wodLabel = document.getElementById('wodLabel');
const formatSelect = document.getElementById('formatSelect');
const equipmentSelect = document.getElementById('equipmentSelect');
const actionRow = document.getElementById('actionRow');
const copyBtn = document.getElementById('copyBtn');
const fullscreenBtn = document.getElementById('fullscreenBtn');

const timerPanel = document.getElementById('timerPanel');
const timerLabel = document.getElementById('timerLabel');
const timerDigits = document.getElementById('timerDigits');
const timerBar = document.getElementById('timerBar');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

let currentWorkout = null;

function renderMovements(movements, rolling){
  movementList.innerHTML = "";
  movements.forEach(m => {
    const li = document.createElement('li');
    if(rolling) li.classList.add('rolling');
    li.innerHTML = `
      <span>
        <span class="mv-name">${m.name}</span>
        <span class="mv-tag">${m.tag}</span>
        ${m.desc && !rolling ? `<span class="mv-desc">${m.desc}</span>` : ""}
      </span>
      <span class="mv-reps">${m.reps}</span>
    `;
    movementList.appendChild(li);
  });
}

function rollAnimation(finalWorkout, equipmentMode, cb){
  let ticks = 0;
  const maxTicks = 9;
  // Only exclude running during EMOM when we're using ALL equipment pools
  const exclude = (finalWorkout.format === "EMOM" && equipmentMode === 'ALL') ? [RUNNING] : null;
  const interval = setInterval(() => {
    const fake = pickMovements(finalWorkout.movements.length, exclude, equipmentMode).map(m => ({...m, reps: repsFor(m.name, finalWorkout.format)}));
    formatName.textContent = finalWorkout.format;
    renderMovements(fake, true);
    ticks++;
    if(ticks >= maxTicks){
      clearInterval(interval);
      cb();
    }
  }, 70);
}

// ---- Timer ----
let timerState = { mode:'countdown', total:0, value:0, running:false, intervalId:null };

function formatTime(totalSeconds){
  const s = Math.max(0, Math.floor(totalSeconds));
  const m = Math.floor(s/60).toString().padStart(2,'0');
  const r = (s%60).toString().padStart(2,'0');
  return `${m}:${r}`;
}

function updateTimerDisplay(){
  timerDigits.textContent = formatTime(timerState.value);
  if(timerState.mode === 'countdown'){
    timerBar.style.display = 'block';
    const pct = timerState.total > 0 ? (timerState.value/timerState.total)*100 : 0;
    timerBar.style.width = pct + '%';
  } else {
    timerBar.style.display = 'none';
  }
}

function tick(){
  if(timerState.mode === 'countdown'){
    timerState.value--;
    if(timerState.value <= 0){
      timerState.value = 0;
      pauseTimer();
    }
  } else {
    timerState.value++;
  }
  updateTimerDisplay();
}

let wakeLock = null;
async function requestWakeLock(){
  try{
    if('wakeLock' in navigator){
      wakeLock = await navigator.wakeLock.request('screen');
    }
  }catch(e){ /* wake lock not available, ignore */ }
}
function releaseWakeLock(){
  wakeLock?.release?.().catch(() => {});
  wakeLock = null;
}
document.addEventListener('visibilitychange', () => {
  if(document.visibilityState === 'visible' && timerState.running){
    requestWakeLock();
  }
});

function startTimer(){
  if(timerState.running) return;
  if(timerState.mode === 'countdown' && timerState.value <= 0) return;
  timerState.running = true;
  timerState.intervalId = setInterval(tick, 1000);
  startBtn.textContent = 'Pausa';
  requestWakeLock();
}

function pauseTimer(){
  clearInterval(timerState.intervalId);
  timerState.running = false;
  startBtn.textContent = 'Starta';
  releaseWakeLock();
}

function toggleTimer(){
  if(timerState.running) pauseTimer(); else startTimer();
}

function resetTimer(){
  clearInterval(timerState.intervalId);
  timerState.running = false;
  timerState.value = timerState.mode === 'countdown' ? timerState.total : 0;
  startBtn.textContent = 'Starta';
  updateTimerDisplay();
}

function setTimerFromWorkout(workout){
  clearInterval(timerState.intervalId);
  timerState.mode = workout.timerMode;
  timerState.total = workout.timerSeconds;
  timerState.value = workout.timerMode === 'countdown' ? workout.timerSeconds : 0;
  timerState.running = false;
  timerLabel.textContent = workout.timerMode === 'countdown' ? 'Tid kvar' : 'Tid';
  startBtn.textContent = 'Starta';
  timerPanel.classList.add('show');
  updateTimerDisplay();
}

startBtn.addEventListener('click', toggleTimer);
resetBtn.addEventListener('click', resetTimer);

document.addEventListener('keydown', (e) => {
  const tag = document.activeElement.tagName;
  if(tag === 'SELECT' || tag === 'INPUT' || tag === 'TEXTAREA') return;
  if(!timerPanel.classList.contains('show')) return;
  if(e.code === 'Space'){
    e.preventDefault();
    toggleTimer();
  } else if(e.key === 'r' || e.key === 'R'){
    resetTimer();
  }
});

// ---- Copy & fullscreen ----
function workoutAsText(workout){
  let lines = [];
  lines.push(`${workout.format} — ${workout.detail}`);
  lines.push('');
  lines.push(`Uppvärmning: ${workout.warmup}`);
  if(workout.strength){
    lines.push('');
    lines.push(`Styrka: ${workout.strength.name} — ${workout.strength.scheme}`);
  }
  lines.push('');
  lines.push('Passet:');
  workout.movements.forEach(m => {
    lines.push(`- ${m.name} (${m.tag}): ${m.reps}`);
  });
  lines.push('');
  lines.push(workout.note);
  return lines.join('\n');
}

copyBtn.addEventListener('click', () => {
  if(!currentWorkout) return;
  const text = workoutAsText(currentWorkout);
  navigator.clipboard.writeText(text).then(() => {
    const original = copyBtn.textContent;
    copyBtn.textContent = 'Kopierat!';
    setTimeout(() => { copyBtn.textContent = original; }, 1500);
  }).catch(() => {
    const original = copyBtn.textContent;
    copyBtn.textContent = 'Kunde inte kopiera';
    setTimeout(() => { copyBtn.textContent = original; }, 1500);
  });
});

fullscreenBtn.addEventListener('click', () => {
  const target = document.querySelector('.output');
  if(!document.fullscreenElement){
    target.requestFullscreen?.().catch(() => {});
  } else {
    document.exitFullscreen?.().catch(() => {});
  }
});

const isStandalone = window.navigator.standalone === true || window.matchMedia('(display-mode: standalone)').matches;
const fullscreenSupported = !!(document.documentElement.requestFullscreen);
if(isStandalone || !fullscreenSupported){
  fullscreenBtn.style.display = 'none';
}

// ---- Generate ----
document.getElementById('pull').addEventListener('click', () => {
const forced = formatSelect.value;
const equipmentMode = equipmentSelect.value;
const workout = buildWorkout(forced, equipmentMode);
console.log("Selected workout from database:", workout);
  if(!workout){
    alert('Inga workouts matchar dina filter. Välj annat format eller utrustning.');
    return;
  }
  currentWorkout = workout;
  saveWorkout(workout);
  card.classList.add('show');
  actionRow.classList.add('show');
  formatLabel.textContent = "Format";
  formatDetail.textContent = workout.detail;
  warmupEl.textContent = workout.warmup;
  noteEl.textContent = workout.note;

  if(workout.strength){
    strengthBlock.style.display = "block";
    strengthEl.innerHTML = `<strong>${workout.strength.name}</strong> — ${workout.strength.scheme}<br><span class="mv-desc" style="margin-top:6px;">${workout.strength.desc}</span>`;
  } else {
    strengthBlock.style.display = "none";
  }

  wodLabel.textContent = workout.format === "EMOM" ? "EMOM — rotera" : "Passet";

  setTimerFromWorkout(workout);

formatName.textContent = workout.format;
renderMovements(workout.movements, false);
});

// ---- PWA install hint & service worker ----
(function registerServiceWorker(){
  if('serviceWorker' in navigator){
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js').catch(() => {});
    });
  }
})();

// ---- Basic local persistence ----
const STORAGE_KEY = 'garage-wod:last-workout:v1';
function saveWorkout(workout){
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(workout)); } catch(e) {}
}
function restoreWorkout(){
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return;
    const workout = JSON.parse(raw);
    if(!workout || !workout.movements) return;
    currentWorkout = workout;
    card.classList.add('show');
    actionRow.classList.add('show');
    formatLabel.textContent = 'Format';
    formatName.textContent = workout.format;
    formatDetail.textContent = workout.detail;
    warmupEl.textContent = workout.warmup;
    noteEl.textContent = workout.note;
    if(workout.strength){
      strengthBlock.style.display = 'block';
      strengthEl.innerHTML = `<strong>${workout.strength.name}</strong> — ${workout.strength.scheme}<br><span class="mv-desc" style="margin-top:6px;">${workout.strength.desc || ''}</span>`;
    } else {
      strengthBlock.style.display = 'none';
    }
    wodLabel.textContent = workout.format === 'EMOM' ? 'EMOM — rotera' : 'Passet';
    setTimerFromWorkout(workout);
    renderMovements(workout.movements, false);
  } catch(e) {}
}

window.addEventListener('load', restoreWorkout);
