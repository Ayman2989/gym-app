type muscleGroups =
  | "Biceps"
  | "Triceps"
  | "Shoulders"
  | "Back"
  | "Chest"
  | "Abs"
  | "Quads"
  | "Calves"
  | "Traps"
  | "Neck"
  | "Forearms";

interface Workout {
  name: string;
  description: string;
  muscleGroup: muscleGroups;
  gifUrl: string;
}

interface Workouts {
  gymWorkouts: Workout[];
  homeWorkouts: Workout[];
}

export const data: Workouts = {
  gymWorkouts: [
    {
      name: "Barbell Curl",
      description: "Standard biceps exercise with a barbell.",
      muscleGroup: "Biceps",
      gifUrl:
        "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Curl.gif",
    },
    {
      name: "Hammer Curl",
      description: "Targets the biceps and forearms with a neutral grip.",
      muscleGroup: "Biceps",
      gifUrl:
        "https://fitnessprogramer.com/wp-content/uploads/2021/02/Hammer-Curl.gif",
    },
    {
      name: "Triceps Pushdown",
      description: "Triceps isolation using a cable machine.",
      muscleGroup: "Triceps",
      gifUrl:
        "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pushdown.gif",
    },
    {
      name: "Skull Crushers",
      description: "Lying triceps extension using an EZ-bar.",
      muscleGroup: "Triceps",
      gifUrl:
        "https://fitnessprogramer.com/wp-content/uploads/2022/02/Band-Skull-Crusher.gif",
    },
    {
      name: "Shoulder Press",
      description: "Overhead press for shoulder strength.",
      muscleGroup: "Shoulders",
      gifUrl:
        "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shoulder-Press.gif",
    },
    {
      name: "Lateral Raise",
      description: "Raises dumbbells out to the sides for shoulder isolation.",
      muscleGroup: "Shoulders",
      gifUrl:
        "https://fitnessprogramer.com/wp-content/uploads/2021/04/Seated-Dumbbell-Lateral-Raise.gif",
    },
    {
      name: "Lat Pulldown",
      description: "Targets the upper back using a pulldown machine.",
      muscleGroup: "Back",
      gifUrl:
        "https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif",
    },
    {
      name: "Deadlift",
      description:
        "A compound lift that targets the entire back and lower body.",
      muscleGroup: "Back",
      gifUrl:
        "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Deadlift.gif",
    },
    {
      name: "Bench Press",
      description: "Chest press exercise using a barbell.",
      muscleGroup: "Chest",
      gifUrl:
        "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bench-Press.gif",
    },
    {
      name: "Chest Fly",
      description: "Isolates the chest muscles using dumbbells or cables.",
      muscleGroup: "Chest",
      gifUrl:
        "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pec-Deck-Fly.gif",
    },
    {
      name: "Shrugs",
      description: "Isolation exercise for traps using dumbbells or a barbell.",
      muscleGroup: "Traps",
      gifUrl:
        "https://fitnessprogramer.com/wp-content/uploads/2022/01/Dumbbell-Seated-Gittleson-Shrug.gif",
    },
    {
      name: "Neck Flexion",
      description:
        "Neck strengthening exercise using weights or resistance bands.",
      muscleGroup: "Neck",
      gifUrl:
        "https://fitnessprogramer.com/wp-content/uploads/2022/02/Lying-Weighted-Lateral-Neck-Flexion.gif",
    },
    {
      name: "Plank",
      description: "Core stability exercise for the abs.",
      muscleGroup: "Abs",
      gifUrl:
        "https://fitnessprogramer.com/wp-content/uploads/2021/04/Weighted-Front-Plank.gif",
    },
    {
      name: "Forearm Curl",
      description: "Wrist curl targeting the forearm muscles.",
      muscleGroup: "Forearms",
      gifUrl:
        "https://fitnessprogramer.com/wp-content/uploads/2022/06/Barbell-Reverse-Wrist-Curl-Over-a-Bench.gif",
    },
    {
      name: "Leg Press",
      description: "Machine exercise that targets the quadriceps.",
      muscleGroup: "Quads",
      gifUrl:
        "https://fitnessprogramer.com/wp-content/uploads/2022/02/Seated-Calf-Press-on-Leg-Press-Machine.gif",
    },
    {
      name: "Squats",
      description: "Compound lift for quads, hamstrings, and glutes.",
      muscleGroup: "Quads",
      gifUrl:
        "https://fitnessprogramer.com/wp-content/uploads/2023/09/Dumbbell-Squat.gif",
    },
    {
      name: "Calf Raise",
      description: "Exercise for isolating the calf muscles.",
      muscleGroup: "Calves",
      gifUrl:
        "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Calf-Raise.gif",
    },
  ],
  homeWorkouts: [
    {
      name: "Push-up",
      description:
        "Bodyweight exercise that targets the chest, triceps, and shoulders.",
      muscleGroup: "Chest",
      gifUrl:
        "https://fitnessprogramer.com/wp-content/uploads/2021/06/Push-Up-Plus.gif",
    },
    {
      name: "Bodyweight Squat",
      description:
        "Bodyweight exercise that targets the quadriceps and glutes.",
      muscleGroup: "Quads",
      gifUrl:
        "https://www.inspireusafoundation.org/wp-content/uploads/2021/06/bodyweight-squat-2.gif",
    },
    {
      name: "Plank",
      description: "Core exercise that targets the abs and lower back.",
      muscleGroup: "Abs",
      gifUrl:
        "https://fitnessprogramer.com/wp-content/uploads/2021/04/Weighted-Front-Plank.gif",
    },
    {
      name: "Bicycle Crunch",
      description: "Core exercise for the obliques and abs.",
      muscleGroup: "Abs",
      gifUrl:
        "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bicycle-Crunch.gif",
    },
    {
      name: "Chair Dips",
      description: "Triceps exercise using a chair for support.",
      muscleGroup: "Triceps",
      gifUrl:
        "https://fitnessprogramer.com/wp-content/uploads/2021/04/CHAIR-DIPS.gif",
    },
    {
      name: "Pike Push-up",
      description:
        "Bodyweight shoulder exercise that mimics a handstand push-up.",
      muscleGroup: "Shoulders",
      gifUrl:
        "https://i.pinimg.com/originals/11/ec/4c/11ec4c8f57e566f85f1c97218f48f1cc.gif",
    },
    {
      name: "Lunges",
      description: "Bodyweight exercise for quads, glutes, and hamstrings.",
      muscleGroup: "Quads",
      gifUrl:
        "https://fitnessprogramer.com/wp-content/uploads/2023/09/power-lunge.gif",
    },
    {
      name: "Standing Calf Raises",
      description: "Calf exercise that can be done with bodyweight or weights.",
      muscleGroup: "Calves",
      gifUrl:
        "https://www.inspireusafoundation.org/wp-content/uploads/2021/06/single-leg-standing-calf-raise.gif",
    },
    {
      name: "Superman",
      description:
        "Back exercise performed while lying face down and lifting arms and legs.",
      muscleGroup: "Back",
      gifUrl:
        "https://fitnessprogramer.com/wp-content/uploads/2021/02/Superman-exercise.gif",
    },
    {
      name: "Glute Bridge",
      description:
        "Targets the glutes and hamstrings while lying on the floor.",
      muscleGroup: "Quads",
      gifUrl: "https://gymvisual.com/img/p/1/4/1/5/7/14157.gif",
    },
  ],
};
