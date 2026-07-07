const WORKOUTS = [
  {
    id: "amrap-bodyweight-001",
    format: "AMRAP",
    name: "Tempo Endurance Flow",
    difficulty: "MEDIUM",
    duration: 20,
    focus: ["CONDITIONING", "ENDURANCE"],
    equipment: ["BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "20 min — så många ronder/reps som möjligt",
    timerMode: "countdown",
    timerSeconds: 1200,
    warmup: "5 min lätt jogging och dynamisk rörlighet för höfter, axlar och rygg.",
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
        name: "Sit-ups",
        tag: "Kroppsvikt",
        reps: "12 reps",
        desc: "Situps från liggande till sittande."
      }
    ],
    note: "Håll ett jämnt tempo och bygg upp arbetet utan att rusa iväg för tidigt."
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
    name: "Upper Body Tempo",
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
        name: "Burpees",
        tag: "Kroppsvikt",
        reps: "4 reps",
        desc: "Från stående ner till marken och upp igen."
      },
      {
        name: "Air squats",
        tag: "Kroppsvikt",
        reps: "12 reps",
        desc: "Knäböj till kroppsvikt."
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
        reps: "8 reps/sida",
        desc: "Utfallshopp där du byter ben i luften."
      },
      {
        name: "Burpees",
        tag: "Kroppsvikt",
        reps: "6 reps",
        desc: "Från stående ner till marken och upp igen."
      },
      {
        name: "Push-ups",
        tag: "Kroppsvikt",
        reps: "10 reps",
        desc: "Armhävningar med kroppen rak."
      },
      {
        name: "Mountain climbers",
        tag: "Kroppsvikt",
        reps: "25 sek",
        desc: "Stå i plankan och växla knädrag i högt tempo."
      },
      {
        name: "Sit-ups",
        tag: "Kroppsvikt",
        reps: "12 reps",
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
    id: "emom-bodyweight-002",
    format: "EMOM",
    name: "Core Clock EMOM",
    difficulty: "MEDIUM",
    duration: 15,
    focus: ["CONDITIONING", "CORE"],
    equipment: ["BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "15 min totalt, rotera 3 stationer minutvis",
    timerMode: "countdown",
    timerSeconds: 15 * 60,
    warmup: "4 min lätt jogg och mobilitet för höfter och axlar.",
    movements: [
      { name: "Mountain climbers", tag: "Kroppsvikt", reps: "20 sek", desc: "Stå i plankan och växla knädrag i högt tempo." },
      { name: "Sit-ups", tag: "Kroppsvikt", reps: "12 reps", desc: "Situps från liggande till sittande." },
      { name: "Air squats", tag: "Kroppsvikt", reps: "14 reps", desc: "Knäböj till kroppsvikt." }
    ],
    note: "Håll ett jämnt tempo och prioritera kvalitet innan hastighet."
  },
  {
    id: "emom-bodyweight-003",
    format: "EMOM",
    name: "Upper Body EMOM",
    difficulty: "HARD",
    duration: 16,
    focus: ["CONDITIONING", "FULL_BODY"],
    equipment: ["BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "16 min totalt, rotera 4 stationer minutvis",
    timerMode: "countdown",
    timerSeconds: 16 * 60,
    warmup: "5 min lätt jogging och rörlighet för axlar och bröst.",
    movements: [
      { name: "Push-ups", tag: "Kroppsvikt", reps: "6 reps", desc: "Armhävningar med kroppen rak." },
      { name: "Air squats", tag: "Kroppsvikt", reps: "12 reps", desc: "Knäböj till kroppsvikt." },
      { name: "Mountain climbers", tag: "Kroppsvikt", reps: "20 sek", desc: "Stå i plankan och växla knädrag i högt tempo." },
      { name: "Sit-ups", tag: "Kroppsvikt", reps: "10 reps", desc: "Situps från liggande till sittande." }
    ],
    note: "Ta korta pauser vid behov och håll ett jämnt tempo över hela passet."
  },
  {
    id: "emom-bodyweight-004",
    format: "EMOM",
    name: "Tempo EMOM",
    difficulty: "MEDIUM",
    duration: 16,
    focus: ["CONDITIONING", "ENDURANCE"],
    equipment: ["BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "16 min totalt, rotera 4 stationer minutvis",
    timerMode: "countdown",
    timerSeconds: 16 * 60,
    warmup: "4 min lätt jogg och dynamisk rörlighet för höfter och anklar.",
    movements: [
      { name: "Löpning", tag: "Konditionsslinga", reps: "100 m", desc: "Lätt löpning på plats eller utomhus." },
      { name: "Air squats", tag: "Kroppsvikt", reps: "12 reps", desc: "Knäböj till kroppsvikt." },
      { name: "Push-ups", tag: "Kroppsvikt", reps: "10 reps", desc: "Armhävningar med kroppen rak." },
      { name: "Mountain climbers", tag: "Kroppsvikt", reps: "20 sek", desc: "Stå i plankan och växla knädrag i högt tempo." }
    ],
    note: "Håll ett jämnt och kontrollerat tempo genom hela passet."
  },
  {
    id: "emom-bodyweight-005",
    format: "EMOM",
    name: "Power Rotation EMOM",
    difficulty: "HARD",
    duration: 20,
    focus: ["CONDITIONING", "POWER"],
    equipment: ["BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "20 min totalt, rotera 5 stationer minutvis",
    timerMode: "countdown",
    timerSeconds: 20 * 60,
    warmup: "5 min lätt jogging och uppvärmning med hopprep och plankan.",
    movements: [
      { name: "Jumping lunges", tag: "Kroppsvikt", reps: "6 reps/sida", desc: "Utfallshopp där du byter ben i luften." },
      { name: "Air squats", tag: "Kroppsvikt", reps: "12 reps", desc: "Knäböj till kroppsvikt." },
      { name: "Push-ups", tag: "Kroppsvikt", reps: "8 reps", desc: "Armhävningar med kroppen rak." },
      { name: "Mountain climbers", tag: "Kroppsvikt", reps: "20 sek", desc: "Stå i plankan och växla knädrag i högt tempo." },
      { name: "Sit-ups", tag: "Kroppsvikt", reps: "10 reps", desc: "Situps från liggande till sittande." }
    ],
    note: "Välj ett tempo du kan hålla under hela passet utan att tappa tekniken."
  },
  {
    id: "fortime-bodyweight-001",
    format: "FOR TIME",
    name: "Ladder Grinder",
    difficulty: "HARD",
    duration: 15,
    focus: ["CONDITIONING", "ENDURANCE"],
    equipment: ["BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "3 ronder i en uppåtgående laddare: 8-12-16 burpees, 12-18-24 air squats och 10-15-20 sit-ups, fullfölj varje rond innan du går vidare",
    timerMode: "countup",
    timerSeconds: 0,
    warmup: "5 min lätt jogging och rörlighet för höft och axlar.",
    movements: [
      { name: "Burpees", tag: "Kroppsvikt", reps: "8-12-16 reps", desc: "Från stående ner till marken och upp igen." },
      { name: "Air squats", tag: "Kroppsvikt", reps: "12-18-24 reps", desc: "Knäböj till kroppsvikt." },
      { name: "Sit-ups", tag: "Kroppsvikt", reps: "10-15-20 reps", desc: "Situps från liggande till sittande." }
    ],
    note: "Arbeta i ett jämnt tempo och håll tekniken stabil genom hela laddaren."
  },
  {
    id: "fortime-bodyweight-002",
    format: "FOR TIME",
    name: "Squat & Press Ladder",
    difficulty: "MEDIUM",
    duration: 12,
    focus: ["CONDITIONING", "LOWER_BODY"],
    equipment: ["BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "5 ronder med 10-20-30-20-10 reps av air squats och push-ups, fullfölj varje rond innan du går vidare",
    timerMode: "countup",
    timerSeconds: 0,
    warmup: "4 min lätt jogg och rörlighet för höfterna och axlarna.",
    movements: [
      { name: "Air squats", tag: "Kroppsvikt", reps: "10-20-30-20-10 reps", desc: "Knäböj till kroppsvikt." },
      { name: "Push-ups", tag: "Kroppsvikt", reps: "10-20-30-20-10 reps", desc: "Armhävningar med kroppen rak." }
    ],
    note: "Ta kort paus mellan rondarna om tekniken börjar sjunka."
  },
  {
    id: "fortime-bodyweight-003",
    format: "FOR TIME",
    name: "Core Sprint",
    difficulty: "MEDIUM",
    duration: 14,
    focus: ["CONDITIONING", "CORE"],
    equipment: ["BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "4 ronder av 20 mountain climbers, 15 sit-ups och 10 burpees, fullfölj varje rond innan du går vidare",
    timerMode: "countup",
    timerSeconds: 0,
    warmup: "4 min lätt jogging och mobilitet för rygg och höfter.",
    movements: [
      { name: "Mountain climbers", tag: "Kroppsvikt", reps: "20 reps", desc: "Stå i plankan och växla knädrag i högt tempo." },
      { name: "Sit-ups", tag: "Kroppsvikt", reps: "15 reps", desc: "Situps från liggande till sittande." },
      { name: "Burpees", tag: "Kroppsvikt", reps: "10 reps", desc: "Från stående ner till marken och upp igen." }
    ],
    note: "Sätt ett hårt men hållbart tempo."
  },
  {
    id: "fortime-bodyweight-004",
    format: "FOR TIME",
    name: "Cardio Ladder",
    difficulty: "HARD",
    duration: 20,
    focus: ["CONDITIONING", "ENDURANCE"],
    equipment: ["BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "6 ronder med 200 meter löpning, 15 air squats, 10 push-ups och 5 burpees, fullfölj varje rond innan du går vidare",
    timerMode: "countup",
    timerSeconds: 0,
    warmup: "5 min lätt jogg samt uppvärmning för höfter och axlar.",
    movements: [
      { name: "Löpning", tag: "Konditionsslinga", reps: "200 m", desc: "Lätt löpning på plats eller utomhus." },
      { name: "Air squats", tag: "Kroppsvikt", reps: "15 reps", desc: "Knäböj till kroppsvikt." },
      { name: "Push-ups", tag: "Kroppsvikt", reps: "10 reps", desc: "Armhävningar med kroppen rak." },
      { name: "Burpees", tag: "Kroppsvikt", reps: "5 reps", desc: "Från stående ner till marken och upp igen." }
    ],
    note: "Håll ett jämnt tempo och spara kraft till slutet."
  },
  {
    id: "fortime-bodyweight-005",
    format: "FOR TIME",
    name: "Power Finish",
    difficulty: "HARD",
    duration: 18,
    focus: ["CONDITIONING", "POWER"],
    equipment: ["BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "4 ronder med 8 jumping lunges per sida, 12 air squats och 8 sit-ups, fullfölj varje rond innan du går vidare",
    timerMode: "countup",
    timerSeconds: 0,
    warmup: "4 min lätt jogging och dynamisk rörlighet för höfterna.",
    movements: [
      { name: "Jumping lunges", tag: "Kroppsvikt", reps: "8 reps/sida", desc: "Utfallshopp där du byter ben i luften." },
      { name: "Air squats", tag: "Kroppsvikt", reps: "12 reps", desc: "Knäböj till kroppsvikt." },
      { name: "Sit-ups", tag: "Kroppsvikt", reps: "8 reps", desc: "Situps från liggande till sittande." }
    ],
    note: "Välj ett tempo du kan hålla utan att tappa tekniken."
  },
  {
    id: "chipper-bodyweight-001",
    format: "CHIPPER",
    name: "Steady Endurance Chipper",
    difficulty: "HARD",
    duration: 30,
    focus: ["CONDITIONING", "ENDURANCE"],
    equipment: ["BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "1 runda genom listan, sikta ca 25–30 min, notera din tid",
    timerMode: "countup",
    timerSeconds: 0,
    warmup: "Lätt jogg 5 min + höft- och axelrörlighet.",
    movements: [
      { name: "Burpees", tag: "Kroppsvikt", reps: "20 reps", desc: "Från stående ner till marken och upp igen." },
      { name: "Air squats", tag: "Kroppsvikt", reps: "35 reps", desc: "Knäböj till kroppsvikt." },
      { name: "Push-ups", tag: "Kroppsvikt", reps: "20 reps", desc: "Armhävningar med kroppen rak." },
      { name: "Mountain climbers", tag: "Kroppsvikt", reps: "50 sek", desc: "Stå i plankan och växla knädrag snabb tempo." },
      { name: "Jumping lunges", tag: "Kroppsvikt", reps: "16 reps/sida", desc: "Utfallshopp där du byter ben i luften." },
      { name: "Sit-ups", tag: "Kroppsvikt", reps: "25 reps", desc: "Situps från liggande till sittande." }
    ],
    note: "Jobba jämnt och håll teknik genom hela chippern."
  },
  {
    id: "chipper-bodyweight-002",
    format: "CHIPPER",
    name: "Core Crusher",
    difficulty: "MEDIUM",
    duration: 22,
    focus: ["CONDITIONING", "CORE"],
    equipment: ["BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "1 runda genom listan, sikta ca 18–25 min, notera din tid",
    timerMode: "countup",
    timerSeconds: 0,
    warmup: "4 min lätt jogg och mobilitet för höfter och rygg.",
    movements: [
      { name: "Sit-ups", tag: "Kroppsvikt", reps: "40 reps", desc: "Situps från liggande till sittande." },
      { name: "Mountain climbers", tag: "Kroppsvikt", reps: "60 sek", desc: "Stå i plankan och växla knädrag i högt tempo." },
      { name: "Air squats", tag: "Kroppsvikt", reps: "45 reps", desc: "Knäböj till kroppsvikt." },
      { name: "Push-ups", tag: "Kroppsvikt", reps: "25 reps", desc: "Armhävningar med kroppen rak." },
      { name: "Burpees", tag: "Kroppsvikt", reps: "18 reps", desc: "Från stående ner till marken och upp igen." }
    ],
    note: "Behåll ett jämnt tempo för att hålla tekniken stabil."
  },
  {
    id: "chipper-bodyweight-003",
    format: "CHIPPER",
    name: "Upper Body Flow",
    difficulty: "HARD",
    duration: 24,
    focus: ["CONDITIONING", "UPPER_BODY"],
    equipment: ["BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "1 runda genom listan, sikta ca 20–24 min, notera din tid",
    timerMode: "countup",
    timerSeconds: 0,
    warmup: "5 min lätt jogging och rörlighet för axlar och bröst.",
    movements: [
      { name: "Push-ups", tag: "Kroppsvikt", reps: "24 reps", desc: "Armhävningar med kroppen rak." },
      { name: "Mountain climbers", tag: "Kroppsvikt", reps: "45 sek", desc: "Stå i plankan och växla knädrag i högt tempo." },
      { name: "Sit-ups", tag: "Kroppsvikt", reps: "25 reps", desc: "Situps från liggande till sittande." },
      { name: "Air squats", tag: "Kroppsvikt", reps: "24 reps", desc: "Knäböj till kroppsvikt." },
      { name: "Burpees", tag: "Kroppsvikt", reps: "10 reps", desc: "Från stående ner till marken och upp igen." }
    ],
    note: "Ta korta pauser om det behövs, men håll rörelsen flytande."
  },
  {
    id: "chipper-bodyweight-004",
    format: "CHIPPER",
    name: "Tempo Chipper",
    difficulty: "MEDIUM",
    duration: 15,
    focus: ["CONDITIONING", "ENDURANCE"],
    equipment: ["BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "1 runda genom listan, sikta ca 12–18 min, notera din tid",
    timerMode: "countup",
    timerSeconds: 0,
    warmup: "4 min lätt jogg samt dynamisk rörlighet för höfter och anklar.",
    movements: [
      { name: "Löpning", tag: "Konditionsslinga", reps: "400 m", desc: "Lätt löpning på plats eller utomhus." },
      { name: "Air squats", tag: "Kroppsvikt", reps: "40 reps", desc: "Knäböj till kroppsvikt." },
      { name: "Mountain climbers", tag: "Kroppsvikt", reps: "45 sek", desc: "Stå i plankan och växla knädrag i högt tempo." },
      { name: "Push-ups", tag: "Kroppsvikt", reps: "18 reps", desc: "Armhävningar med kroppen rak." },
      { name: "Sit-ups", tag: "Kroppsvikt", reps: "25 reps", desc: "Situps från liggande till sittande." }
    ],
    note: "Sätt ett stabilt tempo och undvik att rusa in i starten."
  },
  {
    id: "chipper-bodyweight-005",
    format: "CHIPPER",
    name: "Power Finish Chipper",
    difficulty: "HARD",
    duration: 33,
    focus: ["CONDITIONING", "POWER"],
    equipment: ["BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "1 runda genom listan, sikta ca 28–33 min, notera din tid",
    timerMode: "countup",
    timerSeconds: 0,
    warmup: "5 min lätt jogging och uppvärmning med hopprep och plankan.",
    movements: [
      { name: "Löpning", tag: "Konditionsslinga", reps: "500 m", desc: "Lätt löpning på plats eller utomhus." },
      { name: "Jumping lunges", tag: "Kroppsvikt", reps: "20 reps/sida", desc: "Utfallshopp där du byter ben i luften." },
      { name: "Burpees", tag: "Kroppsvikt", reps: "14 reps", desc: "Från stående ner till marken och upp igen." },
      { name: "Push-ups", tag: "Kroppsvikt", reps: "20 reps", desc: "Armhävningar med kroppen rak." },
      { name: "Mountain climbers", tag: "Kroppsvikt", reps: "60 sek", desc: "Stå i plankan och växla knädrag i högt tempo." },
      { name: "Sit-ups", tag: "Kroppsvikt", reps: "30 reps", desc: "Situps från liggande till sittande." },
      { name: "Air squats", tag: "Kroppsvikt", reps: "35 reps", desc: "Knäböj till kroppsvikt." }
    ],
    note: "Välj ett tempo du kan hålla under hela chippern utan att tappa tekniken."
  }
];