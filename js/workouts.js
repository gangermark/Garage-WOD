const WORKOUTS = [
  {
    id: "amrap-bodyweight-001",
    format: "AMRAP",
    name: "Bodyweight Burner",
    difficulty: "MEDIUM",
    duration: 20,
    focus: ["CONDITIONING", "FULL_BODY"],
    equipment: ["BODYWEIGHT"],
    workoutType: "DATABASE",
    equipmentMode: ["ALL", "BODYWEIGHT", "TRAVEL"],
    detail: "20 min — så många ronder/reps som möjligt",
    timerMode: "countdown",
    timerSeconds: 1200,
    warmup: "5 min lätt jogging och dynamisk rörlighet.",
    movements: [
      {
        name: "Air squats",
        tag: "Kroppsvikt",
        reps: "15 reps",
        desc: "Knäböj till kroppsvikt."
      },
      {
        name: "Push-ups",
        tag: "Kroppsvikt",
        reps: "10 reps",
        desc: "Armhävningar med kroppen rak."
      },
      {
        name: "Burpees",
        tag: "Kroppsvikt",
        reps: "5 reps",
        desc: "Från stående ner till marken och upp igen."
      }
    ],
    note: "Håll ett jämnt tempo genom hela passet."
  }
  ,
  {
    id: "emom-bodyweight-001",
    format: "EMOM",
    name: "Station Rotation EMOM",
    difficulty: "MEDIUM",
    duration: 12,
    focus: ["CONDITIONING", "FULL_BODY"],
    equipment: ["BODYWEIGHT"],
    workoutType: "DATABASE",
    equipmentMode: ["ALL", "BODYWEIGHT", "TRAVEL"],
    detail: "12 min totalt, rotera 4 stationer minutvis",
    timerMode: "countdown",
    timerSeconds: 12 * 60,
    warmup: "3 varv: 10 air squats, 10 armhävningar, 20 sek plankan.",
    movements: [
      { name: "Air squats", tag: "Kroppsvikt", reps: "12 reps", desc: "Knäböj till kroppsvikt." },
      { name: "Push-ups", tag: "Kroppsvikt", reps: "10 reps", desc: "Armhävningar med kroppen rak." },
      { name: "Mountain climbers", tag: "Kroppsvikt", reps: "30 sek", desc: "Stå i plankan och växla knädrag snabb tempo." },
      { name: "Sit-ups", tag: "Kroppsvikt", reps: "12 reps", desc: "Situps från liggande till sittande." }
    ],
    note: "Rotera stationer minutvis, anpassa reps efter nivå."
  },
  {
    id: "fortime-bodyweight-001",
    format: "FOR TIME",
    name: "Quick Grinder",
    difficulty: "HARD",
    duration: 15,
    focus: ["CONDITIONING", "FULL_BODY"],
    equipment: ["BODYWEIGHT"],
    workoutType: "DATABASE",
    equipmentMode: ["ALL", "BODYWEIGHT", "TRAVEL"],
    detail: "3 ronder, notera din tid",
    timerMode: "countup",
    timerSeconds: 0,
    warmup: "5 min lätt jogging och rörlighet för höft och axlar.",
    movements: [
      { name: "Burpees", tag: "Kroppsvikt", reps: "15 reps", desc: "Från stående ner till marken och upp igen." },
      { name: "Jumping lunges", tag: "Kroppsvikt", reps: "12 reps/sida", desc: "Utfallshopp där du byter ben i luften." },
      { name: "Sit-ups", tag: "Kroppsvikt", reps: "20 reps", desc: "Situps från liggande till sittande." }
    ],
    note: "Skala reps eller vila kort mellan rundor vid behov."
  },
  {
    id: "chipper-bodyweight-001",
    format: "CHIPPER",
    name: "Endurance Chipper",
    difficulty: "HARD",
    duration: 30,
    focus: ["CONDITIONING", "ENDURANCE"],
    equipment: ["BODYWEIGHT"],
    workoutType: "DATABASE",
    equipmentMode: ["ALL", "BODYWEIGHT", "TRAVEL"],
    detail: "1 runda genom listan, sikta ca 25–35 min, notera din tid",
    timerMode: "countup",
    timerSeconds: 0,
    warmup: "Lätt jogg 5 min + höft- och axelrörlighet.",
    movements: [
      { name: "Burpees", tag: "Kroppsvikt", reps: "30 reps", desc: "Från stående ner till marken och upp igen." },
      { name: "Air squats", tag: "Kroppsvikt", reps: "40 reps", desc: "Knäböj till kroppsvikt." },
      { name: "Push-ups", tag: "Kroppsvikt", reps: "30 reps", desc: "Armhävningar med kroppen rak." },
      { name: "Mountain climbers", tag: "Kroppsvikt", reps: "60 sek", desc: "Stå i plankan och växla knädrag snabb tempo." },
      { name: "Jumping lunges", tag: "Kroppsvikt", reps: "30 reps/sida", desc: "Utfallshopp där du byter ben i luften." },
      { name: "Sit-ups", tag: "Kroppsvikt", reps: "40 reps", desc: "Situps från liggande till sittande." }
    ],
    note: "Jobba jämnt och håll teknik genom hela chippern."
  }
];