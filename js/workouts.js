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
  },
  {
    id: "amrap-bodyweight-002",
    format: "AMRAP",
    name: "Core & Cardio Flow",
    difficulty: "MEDIUM",
    duration: 15,
    focus: ["CONDITIONING", "CORE"],
    equipment: ["BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "15 min — så många ronder/reps som möjligt",
    timerMode: "countdown",
    timerSeconds: 900,
    warmup: "4 min lätt jogging och mobilitet för höfter och axlar.",
    movements: [
      {
        name: "Air squats",
        tag: "Kroppsvikt",
        reps: "12 reps",
        desc: "Knäböj till kroppsvikt."
      },
      {
        name: "Mountain climbers",
        tag: "Kroppsvikt",
        reps: "20 sek",
        desc: "Stå i plankan och växla knädrag i högt tempo."
      },
      {
        name: "Sit-ups",
        tag: "Kroppsvikt",
        reps: "10 reps",
        desc: "Situps från liggande till sittande."
      }
    ],
    note: "Håll ett jämnt tempo och behåll tekniken."
  },
  {
    id: "amrap-bodyweight-003",
    format: "AMRAP",
    name: "Upper Body Grinder",
    difficulty: "HARD",
    duration: 18,
    focus: ["CONDITIONING", "UPPER_BODY"],
    equipment: ["BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "18 min — så många ronder/reps som möjligt",
    timerMode: "countdown",
    timerSeconds: 1080,
    warmup: "5 min lätt jogging och rörlighet för axlar, bröst och rygg.",
    movements: [
      {
        name: "Push-ups",
        tag: "Kroppsvikt",
        reps: "10 reps",
        desc: "Armhävningar med kroppen rak."
      },
      {
        name: "Jumping lunges",
        tag: "Kroppsvikt",
        reps: "10 reps/sida",
        desc: "Utfallshopp där du byter ben i luften."
      },
      {
        name: "Burpees",
        tag: "Kroppsvikt",
        reps: "6 reps",
        desc: "Från stående ner till marken och upp igen."
      },
      {
        name: "Sit-ups",
        tag: "Kroppsvikt",
        reps: "12 reps",
        desc: "Situps från liggande till sittande."
      }
    ],
    note: "Jobba jämnt och ta korta pauser om det behövs."
  },
  {
    id: "amrap-bodyweight-004",
    format: "AMRAP",
    name: "Tempo Ladder",
    difficulty: "MEDIUM",
    duration: 16,
    focus: ["CONDITIONING", "ENDURANCE"],
    equipment: ["BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "16 min — så många ronder/reps som möjligt",
    timerMode: "countdown",
    timerSeconds: 960,
    warmup: "4 min lätt jogg samt dynamisk rörlighet för höfter och anklar.",
    movements: [
      {
        name: "Löpning",
        tag: "Konditionsslinga",
        reps: "200 m",
        desc: "Lätt löpning på plats eller utomhus."
      },
      {
        name: "Air squats",
        tag: "Kroppsvikt",
        reps: "15 reps",
        desc: "Knäböj till kroppsvikt."
      },
      {
        name: "Mountain climbers",
        tag: "Kroppsvikt",
        reps: "25 sek",
        desc: "Stå i plankan och växla knädrag i högt tempo."
      },
      {
        name: "Push-ups",
        tag: "Kroppsvikt",
        reps: "8 reps",
        desc: "Armhävningar med kroppen rak."
      }
    ],
    note: "Spara lite kraft till slutet och håll ett stabilt tempo."
  },
  {
    id: "amrap-bodyweight-005",
    format: "AMRAP",
    name: "Power & Core Circuit",
    difficulty: "HARD",
    duration: 22,
    focus: ["CONDITIONING", "POWER"],
    equipment: ["BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "22 min — så många ronder/reps som möjligt",
    timerMode: "countdown",
    timerSeconds: 1320,
    warmup: "5 min lätt jogging och uppvärmning med hopprep och plankan.",
    movements: [
      {
        name: "Jumping lunges",
        tag: "Kroppsvikt",
        reps: "12 reps/sida",
        desc: "Utfallshopp där du byter ben i luften."
      },
      {
        name: "Burpees",
        tag: "Kroppsvikt",
        reps: "8 reps",
        desc: "Från stående ner till marken och upp igen."
      },
      {
        name: "Push-ups",
        tag: "Kroppsvikt",
        reps: "12 reps",
        desc: "Armhävningar med kroppen rak."
      },
      {
        name: "Mountain climbers",
        tag: "Kroppsvikt",
        reps: "30 sek",
        desc: "Stå i plankan och växla knädrag i högt tempo."
      },
      {
        name: "Sit-ups",
        tag: "Kroppsvikt",
        reps: "15 reps",
        desc: "Situps från liggande till sittande."
      }
    ],
    note: "Sätt ett jämnt tempo och undvik att rusa in i för högt tempo."
  },
  {
    id: "emom-bodyweight-001",
    format: "EMOM",
    name: "Station Rotation EMOM",
    difficulty: "MEDIUM",
    duration: 12,
    focus: ["CONDITIONING", "FULL_BODY"],
    equipment: ["BODYWEIGHT"],
    workoutType: "DATABASE",
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