function printMeals() {
    const dinners = Store.getDinner();
    const planMeals = document.querySelector('.meal');
    //document.addEventListener('DOMContentLoaded', printMeal);
planMeals.innerHTML = ''; // Clear previous meals
    dinners.forEach(dinner => {
        const mealItem = document.createElement('div');
        mealItem.textContent = dinner.name;
        planMeals.appendChild(mealItem);
    });
}
//return random meals to planner;
const randomMeal = () => {
     const dinners = Store.getDinner();
    
   if (dinners && dinners.length > 0) {
        const randomiseMeals = Math.floor(Math.random() * dinners.length);
        console.log(dinners[randomiseMeals].name);
   
} else {
    console.log("I'm Empty")
}
}

randomMeal()



//Randomize all day slots: choose a random dinner for each element with class="day"



// Call printMeal on page load to show meals
printMeals();
//print random meal in planner 
function planMeal() {
    const dinners = Store.getDinner();
    const planMeals = document.querySelector('.meal');
    planMeals.innerHTML = ''; // Clear previous meals
    if (dinners && dinners.length > 0) {
        const randomIndex = Math.floor(Math.random() * dinners.length);
        const dinner = dinners[randomIndex];
        const mealItem = document.createElement('div');
        mealItem.textContent = dinner.name;
        planMeals.appendChild(mealItem);

        //check if meal is all ready in planner

       const existingMeal = planMeals.querySelector(`[data-meal-id="${dinner.id}"]`);
        if (!existingMeal) {
            console.log(`Duplicate meal found: ${dinner.name}`);
            mealItem.dataset.mealName = dinner.name;
            
        } else {
            mealItem.dataset.mealId = dinner.id;
            planMeals.appendChild(mealItem);
        }
    } else {
        const mealItem = document.createElement('div');
        mealItem.textContent = "No meals available";
        planMeals.appendChild(mealItem);
    }
    }


function randomizeAllDays() {
    const dinners = Store.getDinner();
    const daySlots = document.querySelectorAll('.meal');
    daySlots.forEach(slot => {
        slot.innerHTML = ''; // clear previous content
        if (dinners && dinners.length > 0) {
            const idx = Math.floor(Math.random() * dinners.length);
            const mealItem = document.createElement('div');
            mealItem.textContent = dinners[idx].name;
            slot.appendChild(mealItem);
        } else {
            const mealItem = document.createElement('div');
            mealItem.textContent = 'No meals available';
            slot.appendChild(mealItem);
        }
    });
}

// Wire a "randomize all" control if it exists in the page
const randomizeAllBtn = document.querySelector('#plan');
if (randomizeAllBtn) {
    randomizeAllBtn.addEventListener('click', randomizeAllDays);
}
// Initialize the planner UI and wire events safely
const planMeals = document.querySelector('.meal');
if (planMeals) {
    // Show an initial meal (or "No meals available") on load
    planMeal();
    // Re-plan on click
    planMeals.addEventListener('click', planMeal);
}