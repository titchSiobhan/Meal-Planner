// planner.js — planner page behaviour
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
    const planBtn = document.querySelector('#plan');
    if (planBtn) planBtn.addEventListener('click', randomizeAllDays);

    // Allow clicking an individual slot to re-plan that day
    const slots = document.querySelectorAll('.meal');
    slots.forEach(slot => {
        slot.addEventListener('click', () => planSingleSlot(slot));
    });

    // Optional: populate slots once on load so the planner shows current meals
    // without waiting for a click. This chooses a random meal per slot.
    randomizeAllDays();
});
// planner.js — planner page behaviour
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
    const planBtn = document.querySelector('#plan');
    if (planBtn) planBtn.addEventListener('click', randomizeAllDays);

    // Allow clicking an individual slot to re-plan that day
    const slots = document.querySelectorAll('.meal');
    slots.forEach(slot => {
        slot.addEventListener('click', () => planSingleSlot(slot));
    });

    // Optional: populate slots once on load so the planner shows current meals
    // without waiting for a click. This chooses a random meal per slot.
    randomizeAllDays();
});
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
        // Planner script: make the Plan button and day slots robust and DOM-ready.
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
            const planBtn = document.querySelector('#plan');
            if (planBtn) planBtn.addEventListener('click', randomizeAllDays);

            // Allow clicking an individual slot to re-plan that day
            const slots = document.querySelectorAll('.meal');
            slots.forEach(slot => {
                slot.addEventListener('click', () => planSingleSlot(slot));
            });

            // If the page has a meals list container (#show-meals), do nothing here
            // because `meal.js` handles that page. This script focuses on planner UI.
        });