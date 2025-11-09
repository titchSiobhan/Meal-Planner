// planner2.js — planner page behaviour (clean replacement)
// DOM-ready: wire up the Plan button and per-day slot clicks
document.addEventListener('DOMContentLoaded', () => {
    // Helper: pick a random dinner or return null
    function getRandomDinner() {
        const dinners = Store.getDinner();
        if (!dinners || dinners.length === 0) return null;
        return dinners[Math.floor(Math.random() * dinners.length)];
    }

    // Set a random meal into a single slot element
    function planSingleSlot(slot) {
        const dinner = getRandomDinner();
        slot.innerHTML = '';
        const mealItem = document.createElement('div');
        mealItem.textContent = dinner ? dinner.name : 'No meals available';
        slot.appendChild(mealItem);
    }

    // Randomize all slots with class="meal"
    function randomizeAllDays() {
        const daySlots = document.querySelectorAll('.meal');
        daySlots.forEach(slot => planSingleSlot(slot));
    }

    // Wire Plan button
    // const planBtn = document.querySelector('#plan');
    // if (planBtn) {
    //     planBtn.addEventListener('click', randomizeAllDays);
    //     console.log('Plan button added as event listener');
    // } else {
    //     console.error('Plan button not found');
    // }
    

    // Allow clicking an individual slot to re-plan that day
    const slots = document.querySelectorAll('.meal');
    slots.forEach(slot => {
        slot.addEventListener('click', () => planSingleSlot(slot));
    });

    // Optional: populate slots once on load so the planner shows current meals
    // without waiting for a click. This chooses a random meal per slot.
    randomizeAllDays();
    const planBtn = document.querySelector('#plan');
planBtn.addEventListener('click', randomizeAllDays);
});


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
    const planMeals = document.querySelector('.meal');
if (planMeals) {
    // Show an initial meal (or "No meals available") on load
    planMeal();
    // Re-plan on click
    planMeals.addEventListener('click', planMeal);
}