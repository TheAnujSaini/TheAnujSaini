const exercises = [
    {
      name: "Push-Ups",
      muscleGroup: "chest",
      description: "Strengthens your chest, shoulders, and triceps.",
      image: "https://th.bing.com/th/id/OIP.eszpkc4dKjTELhSWcgLb_QEsDI?rs=1&pid=ImgDetMain"
    },
    {
      name: "Bench Press",
      muscleGroup: "chest",
      description: "Builds chest and upper body strength.",
      image: "https://th.bing.com/th/id/OIP.9qcVqc_apexd-1uekO0FjwAAAA?rs=1&pid=ImgDetMain"
    },
    {
      name: "Pull-Ups",
      muscleGroup: "back",
      description: "Strengthens your lats and biceps.",
      image: "https://manmatters.com/blog/content/images/2021/11/Untitled-design---2021-11-01T125710.356.jpg"
    },
    {
      name: "Deadlifts",
      muscleGroup: "back",
      description: "A compound exercise that targets the entire back.",
      image: "https://barbend.com/wp-content/uploads/2016/12/BarBend-Feature-Image-1200-x-675-2021-04-07T141449.522.jpg"
    },
    {
      name: "Crunches",
      muscleGroup: "abs",
      description: "Targets your abdominal muscles.",
      image: "https://www.healthkart.com/connect/wp-content/uploads/2023/06/Crunches-for-abs_900.jpg"
    },
    {
      name: "Plank",
      muscleGroup: "abs",
      description: "Enhances core stability and posture.",
      image: "https://th.bing.com/th/id/OIP.7_hqOGG7Dw-EYLIRzkCKHgHaEn?rs=1&pid=ImgDetMain"
    },
    {
      name: "Bicep Curls",
      muscleGroup: "arms",
      description: "Focuses on your biceps.",
      image: "https://th.bing.com/th/id/OIP.mN-bffc2PBXleY_Lnkv2fQHaE5?rs=1&pid=ImgDetMain"
    },
    {
      name: "Tricep Dips",
      muscleGroup: "arms",
      description: "Targets your triceps and shoulders.",
      image: "https://th.bing.com/th/id/OIP.uw8041nYiyD91Qblv1TreAHaE8?rs=1&pid=ImgDetMain"
    },
    {
      name: "Squats",
      muscleGroup: "legs",
      description: "Strengthens your thighs and glutes.",
      image: "https://th.bing.com/th/id/OIP.pVpv1DgtN0OQsH0z6uWsuwHaE8?rs=1&pid=ImgDetMain"
    },
    {
      name: "Lunges",
      muscleGroup: "legs",
      description: "Improves balance and strengthens legs.",
      image: "https://media.wiselifehub.com/wp-content/uploads/2023/03/side-lunges-1.jpg"
    },
    {
        name: "Jumping Jacks",
        muscleGroup: "cardio",
        description: "Full-body cardio exercise that boosts heart rate.",
        image: "https://th.bing.com/th/id/OIP.b8_GBl7DYHfxg0QlA8DikAHaE7?rs=1&pid=ImgDetMain"
      },
      {
        name: "Burpees",
        muscleGroup: "cardio",
        description: "A high-intensity full-body cardio workout.",
        image: "https://assets.sweat.com/html_body_blocks/images/010/027/837/original/kayla_glute_activation_en0d35d04cebdd4245e13d7ca5af5d489e.jpg?1649118146"
      }
  ];
  
  // DOM Elements
  const exerciseList = document.getElementById("exercise-list");
  const muscleGroupFilter = document.getElementById("muscle-group");
  
  // Function to display exercises
  function displayExercises(filter = "all") {
    exerciseList.innerHTML = ""; // Clear current list
    const filteredExercises = filter === "all" ? exercises : exercises.filter(ex => ex.muscleGroup === filter);
  
    filteredExercises.forEach(exercise => {
      const card = document.createElement("div");
      card.classList.add("exercise-card");
  
      card.innerHTML = `
  <img src="${exercise.image || 'images/default.jpg'}" alt="${exercise.name}">
  <h3>${exercise.name}</h3>
  <p>${exercise.description}</p>
`;

  
      exerciseList.appendChild(card);
    });
  }
  
  // Filter Change Event
  muscleGroupFilter.addEventListener("change", (e) => {
    displayExercises(e.target.value);
  });
  
  // Initial Display
  displayExercises();
  function searchExercises() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const exerciseCards = document.getElementsByClassName("exercise-card");
  
    Array.from(exerciseCards).forEach((card) => {
      const exerciseName = card.querySelector("h3").textContent.toLowerCase();
      if (exerciseName.includes(query)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
  function toggleFavorite(exerciseName) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.includes(exerciseName)) {
      favorites = favorites.filter(fav => fav !== exerciseName);
      alert(`${exerciseName} removed from favorites`);
    } else {
      favorites.push(exerciseName);
      alert(`${exerciseName} added to favorites`);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
    
  