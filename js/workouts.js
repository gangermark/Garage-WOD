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
  },
  {
    id: "amrap-equipment-001",
    format: "AMRAP",
    name: "Kettlebell Flow",
    difficulty: "MEDIUM",
    duration: 15,
    focus: ["CONDITIONING", "FULL_BODY"],
    equipment: ["KETTLEBELL", "BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "15 min — så många ronder/reps som möjligt",
    timerMode: "countdown",
    timerSeconds: 900,
    warmup: "4 min lätt jogging och dynamisk rörlighet för höfter och axlar.",
    movements: [
      { name: "Kettlebell swings", tag: "Kettlebell", reps: "15 reps", desc: "Svinga kettlebellen med rak rygg och aktiv core." },
      { name: "Goblet squats", tag: "Kettlebell", reps: "10 reps", desc: "Knäböj med kettlebell mot bröstet." },
      { name: "Push-ups", tag: "Kroppsvikt", reps: "8 reps", desc: "Armhävningar med kroppen rak." },
      { name: "Mountain climbers", tag: "Kroppsvikt", reps: "20 sek", desc: "Stå i plankan och växla knädrag i högt tempo." }
    ],
    note: "Håll ett jämnt tempo och prioritera tekniken över hastighet."
  },
  {
    id: "amrap-equipment-002",
    format: "AMRAP",
    name: "Dumbbell Jump Rope Circuit",
    difficulty: "HARD",
    duration: 16,
    focus: ["CONDITIONING", "UPPER_BODY"],
    equipment: ["DUMBBELL", "JUMP_ROPE", "BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "16 min — så många ronder/reps som möjligt",
    timerMode: "countdown",
    timerSeconds: 960,
    warmup: "4 min lätt jogging och uppvärmning med axel- och handledsrörlighet.",
    movements: [
      { name: "Dumbbell floor presses", tag: "Dumbbell", reps: "10 reps", desc: "Tryck hantlarna upp från golvet med kontroll." },
      { name: "Dumbbell rows", tag: "Dumbbell", reps: "10 reps", desc: "Dra hantlarna mot sidan av kroppen med rak rygg." },
      { name: "Jump rope", tag: "Jump rope", reps: "100 m", desc: "Hoppa med en jämn takt och aktiv core." },
      { name: "Push-ups", tag: "Kroppsvikt", reps: "8 reps", desc: "Armhävningar med kroppen rak." }
    ],
    note: "Jobba med ett jämnt tempo och behåll kontrollen i varje repetition."
  },
  {
    id: "amrap-equipment-003",
    format: "AMRAP",
    name: "Leg-day Barbell Bench Flow",
    difficulty: "HARD",
    duration: 20,
    focus: ["CONDITIONING", "LOWER_BODY"],
    equipment: ["BARBELL", "BENCH", "BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "20 min — så många ronder/reps som möjligt",
    timerMode: "countdown",
    timerSeconds: 1200,
    warmup: "5 min lätt jogging och uppvärmning för höfter, knän och rygg.",
    movements: [
      { name: "Barbell front squats", tag: "Barbell", reps: "8 reps", desc: "Frontböj med barbell i frontposition och aktiv core." },
      { name: "Barbell Romanian deadlifts", tag: "Barbell", reps: "8 reps", desc: "Lyft barbell från golvet med rak rygg och starka ben." },
      { name: "Bench step-ups", tag: "Bench", reps: "8 reps/sida", desc: "Stega upp på bänken med kontroll och aktiv core." },
      { name: "Air squats", tag: "Kroppsvikt", reps: "12 reps", desc: "Knäböj till kroppsvikt." }
    ],
    note: "Välj ett tempo du kan hålla genom hela passet utan att tappa tekniken."
  },
  {
    id: "amrap-equipment-004",
    format: "AMRAP",
    name: "Ring Row Grinder",
    difficulty: "MEDIUM",
    duration: 16,
    focus: ["CONDITIONING", "UPPER_BODY"],
    equipment: ["RINGS", "BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "16 min — så många ronder/reps som möjligt",
    timerMode: "countdown",
    timerSeconds: 960,
    warmup: "4 min lätt jogging och rörlighet för axlar, bröst och rygg.",
    movements: [
      { name: "Ring rows", tag: "Rings", reps: "10 reps", desc: "Dra upp kroppen mot ringarna med kontroll." },
      { name: "Push-ups", tag: "Kroppsvikt", reps: "8 reps", desc: "Armhävningar med kroppen rak." },
      { name: "Air squats", tag: "Kroppsvikt", reps: "12 reps", desc: "Knäböj till kroppsvikt." },
      { name: "Sit-ups", tag: "Kroppsvikt", reps: "10 reps", desc: "Situps från liggande till sittande." }
    ],
    note: "Håll rörelsen kontrollerad och nyttja ringarna för att styra tempo."
  },
  {
    id: "amrap-equipment-005",
    format: "AMRAP",
    name: "Battle Rope Tempo",
    difficulty: "HARD",
    duration: 14,
    focus: ["CONDITIONING", "ENDURANCE"],
    equipment: ["BATTLE_ROPE", "BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "14 min — så många ronder/reps som möjligt",
    timerMode: "countdown",
    timerSeconds: 840,
    warmup: "4 min lätt jogging och uppvärmning med axel- och höftmobilitet.",
    movements: [
      { name: "Battle rope slams", tag: "Battle rope", reps: "20 sek", desc: "Slå repet mot marken med kontroll och aktiv core." },
      { name: "Burpees", tag: "Kroppsvikt", reps: "6 reps", desc: "Från stående ner till marken och upp igen." },
      { name: "Air squats", tag: "Kroppsvikt", reps: "12 reps", desc: "Knäböj till kroppsvikt." },
      { name: "Mountain climbers", tag: "Kroppsvikt", reps: "20 sek", desc: "Stå i plankan och växla knädrag i högt tempo." }
    ],
    note: "Håll ett jämnt tempo och undvik att rusa iväg i början."
  },
  {
    id: "emom-equipment-001",
    format: "EMOM",
    name: "Kettlebell Strength EMOM",
    difficulty: "MEDIUM",
    duration: 12,
    focus: ["CONDITIONING", "STRENGTH"],
    equipment: ["KETTLEBELL", "BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "12 min totalt, rotera 4 stationer minutvis",
    timerMode: "countdown",
    timerSeconds: 12 * 60,
    warmup: "4 min lätt jogging och mobilitet för höfter och axlar.",
    movements: [
      { name: "Kettlebell swings", tag: "Kettlebell", reps: "12 reps", desc: "Svinga kettlebellen med rak rygg och aktiv core." },
      { name: "Goblet squats", tag: "Kettlebell", reps: "10 reps", desc: "Knäböj med kettlebell mot bröstet." },
      { name: "Push-ups", tag: "Kroppsvikt", reps: "8 reps", desc: "Armhävningar med kroppen rak." },
      { name: "Mountain climbers", tag: "Kroppsvikt", reps: "20 sek", desc: "Stå i plankan och växla knädrag i högt tempo." }
    ],
    note: "Håll ett jämnt tempo och prioritera teknik framför hastighet."
  },
  {
    id: "emom-equipment-002",
    format: "EMOM",
    name: "Dumbbell Core EMOM",
    difficulty: "HARD",
    duration: 16,
    focus: ["CONDITIONING", "CORE"],
    equipment: ["DUMBBELL", "BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "16 min totalt, rotera 4 stationer minutvis",
    timerMode: "countdown",
    timerSeconds: 16 * 60,
    warmup: "4 min lätt jogging och rörlighet för axlar, bröst och rygg.",
    movements: [
      { name: "Dumbbell floor presses", tag: "Dumbbell", reps: "8 reps", desc: "Tryck hantlarna upp från golvet med kontroll." },
      { name: "Dumbbell rows", tag: "Dumbbell", reps: "10 reps", desc: "Dra hantlarna mot sidan av kroppen med rak rygg." },
      { name: "Sit-ups", tag: "Kroppsvikt", reps: "10 reps", desc: "Situps från liggande till sittande." },
      { name: "Mountain climbers", tag: "Kroppsvikt", reps: "20 sek", desc: "Stå i plankan och växla knädrag i högt tempo." }
    ],
    note: "Ta korta pauser vid behov och behåll kontrollen i varje station."
  },
  {
    id: "emom-equipment-003",
    format: "EMOM",
    name: "Barbell Strength Endurance",
    difficulty: "HARD",
    duration: 20,
    focus: ["CONDITIONING", "STRENGTH"],
    equipment: ["BARBELL", "BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "20 min totalt, rotera 5 stationer minutvis",
    timerMode: "countdown",
    timerSeconds: 20 * 60,
    warmup: "5 min lätt jogging och uppvärmning för höfter, knän och rygg.",
    movements: [
      { name: "Barbell front squats", tag: "Barbell", reps: "6 reps", desc: "Frontböj med barbell i frontposition och aktiv core." },
      { name: "Barbell Romanian deadlifts", tag: "Barbell", reps: "8 reps", desc: "Lyft barbell från golvet med rak rygg och starka ben." },
      { name: "Air squats", tag: "Kroppsvikt", reps: "10 reps", desc: "Knäböj till kroppsvikt." },
      { name: "Push-ups", tag: "Kroppsvikt", reps: "8 reps", desc: "Armhävningar med kroppen rak." },
      { name: "Sit-ups", tag: "Kroppsvikt", reps: "10 reps", desc: "Situps från liggande till sittande." }
    ],
    note: "Välj ett tempo du kan hålla genom hela passet utan att tappa tekniken."
  },
  {
    id: "emom-equipment-004",
    format: "EMOM",
    name: "Jump Rope Conditioning EMOM",
    difficulty: "MEDIUM",
    duration: 12,
    focus: ["CONDITIONING", "ENDURANCE"],
    equipment: ["JUMP_ROPE", "BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "12 min totalt, rotera 3 stationer minutvis",
    timerMode: "countdown",
    timerSeconds: 12 * 60,
    warmup: "4 min lätt jogging och dynamisk rörlighet för höfter och anklar.",
    movements: [
      { name: "Jump rope", tag: "Jump rope", reps: "60 sek", desc: "Hoppa med en jämn takt och aktiv core." },
      { name: "Air squats", tag: "Kroppsvikt", reps: "12 reps", desc: "Knäböj till kroppsvikt." },
      { name: "Push-ups", tag: "Kroppsvikt", reps: "8 reps", desc: "Armhävningar med kroppen rak." }
    ],
    note: "Håll ett jämnt och kontrollerat tempo genom hela passet."
  },
  {
    id: "emom-equipment-005",
    format: "EMOM",
    name: "Battle Rope Stability EMOM",
    difficulty: "HARD",
    duration: 15,
    focus: ["CONDITIONING", "STABILITY"],
    equipment: ["BATTLE_ROPE", "BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "15 min totalt, rotera 3 stationer minutvis",
    timerMode: "countdown",
    timerSeconds: 15 * 60,
    warmup: "4 min lätt jogging och uppvärmning med axel- och höftmobilitet.",
    movements: [
      { name: "Battle rope slams", tag: "Battle rope", reps: "20 sek", desc: "Slå repet mot marken med kontroll och aktiv core." },
      { name: "Bench step-ups", tag: "Bench", reps: "8 reps/sida", desc: "Stega upp på bänken med kontroll och aktiv core." },
      { name: "Mountain climbers", tag: "Kroppsvikt", reps: "20 sek", desc: "Stå i plankan och växla knädrag i högt tempo." }
    ],
    note: "Välj ett tempo du kan hålla under hela passet utan att tappa stabiliteten."
  },
  {
    id: "fortime-equipment-001",
    format: "FOR TIME",
    name: "Kettlebell Bench Ladder",
    difficulty: "MEDIUM",
    duration: 16,
    focus: ["CONDITIONING", "STRENGTH"],
    equipment: ["KETTLEBELL", "BENCH", "BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "3 ronder i en uppåtgående laddare: 8-10-12 reps av goblet squats, 6-8-10 reps av bench step-ups per sida och 8-10-12 reps av push-ups, fullfölj varje rond innan du går vidare",
    timerMode: "countup",
    timerSeconds: 0,
    warmup: "4 min lätt jogging och mobilitet för höfter, knän och axlar.",
    movements: [
      { name: "Goblet squats", tag: "Kettlebell", reps: "8-10-12 reps", desc: "Knäböj med kettlebell mot bröstet." },
      { name: "Bench step-ups", tag: "Bench", reps: "6-8-10 reps/sida", desc: "Stega upp på bänken med kontroll och aktiv core." },
      { name: "Push-ups", tag: "Kroppsvikt", reps: "8-10-12 reps", desc: "Armhävningar med kroppen rak." }
    ],
    note: "Arbeta i ett jämnt tempo och spara kraft till slutet."
  },
  {
    id: "fortime-equipment-002",
    format: "FOR TIME",
    name: "Barbell Strength Ladder",
    difficulty: "HARD",
    duration: 18,
    focus: ["CONDITIONING", "STRENGTH"],
    equipment: ["BARBELL", "BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "4 ronder med 8 barbell front squats, 10 barbell rows och 15 air squats, fullfölj varje rond innan du går vidare",
    timerMode: "countup",
    timerSeconds: 0,
    warmup: "5 min lätt jogging och uppvärmning för höfter, rygg och axlar.",
    movements: [
      { name: "Barbell front squats", tag: "Barbell", reps: "8 reps", desc: "Frontböj med barbell i frontposition och aktiv core." },
      { name: "Barbell rows", tag: "Barbell", reps: "10 reps", desc: "Dra barbell mot magen med rak rygg." },
      { name: "Air squats", tag: "Kroppsvikt", reps: "15 reps", desc: "Knäböj till kroppsvikt." }
    ],
    note: "Välj ett tempo du kan hålla utan att tappa tekniken."
  },
  {
    id: "fortime-equipment-003",
    format: "FOR TIME",
    name: "Dumbbell Rope Sprint",
    difficulty: "HARD",
    duration: 14,
    focus: ["CONDITIONING", "ENDURANCE"],
    equipment: ["DUMBBELL", "JUMP_ROPE", "BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "5 ronder av 100 meter jump rope, 8 dumbbell floor presses och 10 air squats, fullfölj varje rond innan du går vidare",
    timerMode: "countup",
    timerSeconds: 0,
    warmup: "4 min lätt jogging och mobilitet för axlar, handleder och höfter.",
    movements: [
      { name: "Jump rope", tag: "Jump rope", reps: "100 m", desc: "Hoppa med en jämn takt och aktiv core." },
      { name: "Dumbbell floor presses", tag: "Dumbbell", reps: "8 reps", desc: "Tryck hantlarna upp från golvet med kontroll." },
      { name: "Air squats", tag: "Kroppsvikt", reps: "10 reps", desc: "Knäböj till kroppsvikt." }
    ],
    note: "Håll ett jämnt tempo och undvik att rusa iväg i början."
  },
  {
    id: "fortime-equipment-004",
    format: "FOR TIME",
    name: "Battle Rope Burn",
    difficulty: "HARD",
    duration: 12,
    focus: ["CONDITIONING", "ENDURANCE"],
    equipment: ["BATTLE_ROPE", "BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "6 ronder av 30 sek battle rope slams, 10 burpees och 20 sek mountain climbers, fullfölj varje rond innan du går vidare",
    timerMode: "countup",
    timerSeconds: 0,
    warmup: "4 min lätt jogging och uppvärmning med axel- och höftmobilitet.",
    movements: [
      { name: "Battle rope slams", tag: "Battle rope", reps: "30 sek", desc: "Slå repet mot marken med kontroll och aktiv core." },
      { name: "Burpees", tag: "Kroppsvikt", reps: "10 reps", desc: "Från stående ner till marken och upp igen." },
      { name: "Mountain climbers", tag: "Kroppsvikt", reps: "20 sek", desc: "Stå i plankan och växla knädrag i högt tempo." }
    ],
    note: "Sätt ett hårt men hållbart tempo."
  },
  {
    id: "fortime-equipment-005",
    format: "FOR TIME",
    name: "Ring Row Ladder",
    difficulty: "MEDIUM",
    duration: 15,
    focus: ["CONDITIONING", "UPPER_BODY"],
    equipment: ["RINGS", "BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "4 ronder i en uppåtgående laddare: 6-8-10-12 ring rows, 8-10-12-14 air squats och 8-10-12-14 sit-ups, fullfölj varje rond innan du går vidare",
    timerMode: "countup",
    timerSeconds: 0,
    warmup: "4 min lätt jogging och rörlighet för axlar, bröst och rygg.",
    movements: [
      { name: "Ring rows", tag: "Rings", reps: "6-8-10-12 reps", desc: "Dra upp kroppen mot ringarna med kontroll." },
      { name: "Air squats", tag: "Kroppsvikt", reps: "8-10-12-14 reps", desc: "Knäböj till kroppsvikt." },
      { name: "Sit-ups", tag: "Kroppsvikt", reps: "8-10-12-14 reps", desc: "Situps från liggande till sittande." }
    ],
    note: "Behåll en jämn rytm och undvik att rusa in i starten."
  },
  {
    id: "chipper-equipment-001",
    format: "CHIPPER",
    name: "Kettlebell Bench Chipper",
    difficulty: "MEDIUM",
    duration: 18,
    focus: ["CONDITIONING", "FULL_BODY"],
    equipment: ["KETTLEBELL", "BENCH", "BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "1 runda genom listan, sikta ca 15–18 min, notera din tid",
    timerMode: "countup",
    timerSeconds: 0,
    warmup: "4 min lätt jogging och mobilitet för höfter, knän och axlar.",
    movements: [
      { name: "Goblet squats", tag: "Kettlebell", reps: "20 reps", desc: "Knäböj med kettlebell mot bröstet." },
      { name: "Bench step-ups", tag: "Bench", reps: "12 reps/sida", desc: "Stega upp på bänken med kontroll och aktiv core." },
      { name: "Kettlebell swings", tag: "Kettlebell", reps: "20 reps", desc: "Svinga kettlebellen med rak rygg och aktiv core." },
      { name: "Push-ups", tag: "Kroppsvikt", reps: "15 reps", desc: "Armhävningar med kroppen rak." },
      { name: "Sit-ups", tag: "Kroppsvikt", reps: "20 reps", desc: "Situps från liggande till sittande." },
      { name: "Mountain climbers", tag: "Kroppsvikt", reps: "40 sek", desc: "Stå i plankan och växla knädrag i högt tempo." }
    ],
    note: "Jobba i en jämn rytm och ta korta pauser om tekniken börjar sjunka."
  },
  {
    id: "chipper-equipment-002",
    format: "CHIPPER",
    name: "Barbell Strength Chipper",
    difficulty: "HARD",
    duration: 22,
    focus: ["CONDITIONING", "STRENGTH"],
    equipment: ["BARBELL", "BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "1 runda genom listan, sikta ca 20–22 min, notera din tid",
    timerMode: "countup",
    timerSeconds: 0,
    warmup: "5 min lätt jogging och uppvärmning för höfter, rygg och axlar.",
    movements: [
      { name: "Barbell front squats", tag: "Barbell", reps: "12 reps", desc: "Frontböj med barbell i frontposition och aktiv core." },
      { name: "Barbell Romanian deadlifts", tag: "Barbell", reps: "12 reps", desc: "Lyft barbell från golvet med rak rygg och starka ben." },
      { name: "Air squats", tag: "Kroppsvikt", reps: "20 reps", desc: "Knäböj till kroppsvikt." },
      { name: "Push-ups", tag: "Kroppsvikt", reps: "12 reps", desc: "Armhävningar med kroppen rak." },
      { name: "Sit-ups", tag: "Kroppsvikt", reps: "18 reps", desc: "Situps från liggande till sittande." },
      { name: "Plank", tag: "Kroppsvikt", reps: "45 sek", desc: "Håll en rak plankposition med aktiv core." }
    ],
    note: "Välj ett tempo du kan hålla genom hela chippern utan att tappa tekniken."
  },
  {
    id: "chipper-equipment-003",
    format: "CHIPPER",
    name: "Dumbbell Rope Sprint Chipper",
    difficulty: "MEDIUM",
    duration: 16,
    focus: ["CONDITIONING", "ENDURANCE"],
    equipment: ["DUMBBELL", "JUMP_ROPE", "BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "1 runda genom listan, sikta ca 14–16 min, notera din tid",
    timerMode: "countup",
    timerSeconds: 0,
    warmup: "4 min lätt jogging och mobilitet för axlar, handleder och höfter.",
    movements: [
      { name: "Jump rope", tag: "Jump rope", reps: "150 m", desc: "Hoppa med en jämn takt och aktiv core." },
      { name: "Dumbbell floor presses", tag: "Dumbbell", reps: "10 reps", desc: "Tryck hantlarna upp från golvet med kontroll." },
      { name: "Dumbbell rows", tag: "Dumbbell", reps: "10 reps", desc: "Dra hantlarna mot sidan av kroppen med rak rygg." },
      { name: "Air squats", tag: "Kroppsvikt", reps: "15 reps", desc: "Knäböj till kroppsvikt." },
      { name: "Mountain climbers", tag: "Kroppsvikt", reps: "30 sek", desc: "Stå i plankan och växla knädrag i högt tempo." }
    ],
    note: "Håll ett jämnt tempo och undvik att rusa iväg i början."
  },
  {
    id: "chipper-equipment-004",
    format: "CHIPPER",
    name: "Battle Rope Power Chipper",
    difficulty: "HARD",
    duration: 20,
    focus: ["CONDITIONING", "POWER"],
    equipment: ["BATTLE_ROPE", "BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "1 runda genom listan, sikta ca 18–20 min, notera din tid",
    timerMode: "countup",
    timerSeconds: 0,
    warmup: "4 min lätt jogging och uppvärmning med axel- och höftmobilitet.",
    movements: [
      { name: "Battle rope slams", tag: "Battle rope", reps: "30 sek", desc: "Slå repet mot marken med kontroll och aktiv core." },
      { name: "Push-ups", tag: "Kroppsvikt", reps: "12 reps", desc: "Armhävningar med kroppen rak." },
      { name: "Burpees", tag: "Kroppsvikt", reps: "8 reps", desc: "Från stående ner till marken och upp igen." },
      { name: "Air squats", tag: "Kroppsvikt", reps: "18 reps", desc: "Knäböj till kroppsvikt." },
      { name: "Mountain climbers", tag: "Kroppsvikt", reps: "35 sek", desc: "Stå i plankan och växla knädrag i högt tempo." },
      { name: "Sit-ups", tag: "Kroppsvikt", reps: "16 reps", desc: "Situps från liggande till sittande." }
    ],
    note: "Sätt ett hårt men hållbart tempo och behåll kontrollen i varje station."
  },
  {
    id: "chipper-equipment-005",
    format: "CHIPPER",
    name: "Ring Row Endurance Chipper",
    difficulty: "HARD",
    duration: 30,
    focus: ["CONDITIONING", "ENDURANCE"],
    equipment: ["RINGS", "BODYWEIGHT"],
    workoutType: "DATABASE",
    detail: "1 runda genom listan, sikta ca 25–30 min, notera din tid",
    timerMode: "countup",
    timerSeconds: 0,
    warmup: "5 min lätt jogging och rörlighet för axlar, bröst och rygg.",
    movements: [
      { name: "Ring rows", tag: "Rings", reps: "12 reps", desc: "Dra upp kroppen mot ringarna med kontroll." },
      { name: "Air squats", tag: "Kroppsvikt", reps: "25 reps", desc: "Knäböj till kroppsvikt." },
      { name: "Push-ups", tag: "Kroppsvikt", reps: "15 reps", desc: "Armhävningar med kroppen rak." },
      { name: "Sit-ups", tag: "Kroppsvikt", reps: "20 reps", desc: "Situps från liggande till sittande." },
      { name: "Mountain climbers", tag: "Kroppsvikt", reps: "45 sek", desc: "Stå i plankan och växla knädrag i högt tempo." },
      { name: "Ring rows", tag: "Rings", reps: "10 reps", desc: "Dra upp kroppen mot ringarna med kontroll." }
    ],
    note: "Behåll ett jämnt tempo och spara kraft till slutet av chippern."
  }
];