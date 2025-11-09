const hamburger = document.querySelector('.hamburger');
const myLinks = document.querySelector('#myLinks');

function hamburgerClick() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }


const mealForm = document.querySelector('#add-meal-form');
const mealInput = document.querySelector('.add-meal');

function Dinner(name, id) {
    this.name = name;
    this.id = generateMealID();
 }

 function generateMealID() {
    const timestamp = Date.now();
     // Get the counter value from local storage or set it to 0 if not present
    let counter = parseInt(localStorage.getItem('mealCounter')) || 0;

    // Increment the counter
    counter++;

    // Store the updated counter value in local storage
    localStorage.setItem('mealCounter', counter);

    // Combine the timestamp and counter value to generate a unique ID
    return `${timestamp}-${counter}`;
 }

//store
class Store {
    static getDinner() {
        let dinners; // Use dinners here to be consistent with the array name
        if(localStorage.getItem('dinners') === null) { // Check for 'dinners' in localStorage
            dinners = [];
        } else {
            dinners = JSON.parse(localStorage.getItem('dinners'));
        }
        return dinners;
    }
    // You might also want a static method to add a dinner to local storage
    static addDinner(dinner) {
        const allDinners = Store.getDinner();
        allDinners.push(dinner);
        localStorage.setItem('dinners', JSON.stringify(allDinners));
    }
}


const mealNameInput = document.querySelector('#meal-name-input');
// Example of using the Store
mealForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mealName = mealNameInput.value.trim();
    if (mealName) {
        Store.addDinner(new Dinner(mealName));
        console.log(Store.getDinner());
        mealNameInput.value = '';
    } else {
    console.warn("Please enter a meal name before adding.");
}
location.reload(true);
});
 
console.log(Store.getDinner());


//clear meals

const clearMeals = document.querySelector('#clear-meals');

function clearDinners() {
    localStorage.removeItem('dinners'); // Clear the dinner array from local storage
}
function clear() {
    clearDinners(); // Clear the dinner array from local storage
    location.reload(true);
}

clearMeals.addEventListener('click', clear)


// show meals in meal page

// take dinner array and take each entry and add it to its own table
function printMeal() {
    const dinners = Store.getDinner();
    const showMeals = document.querySelector('#show-meals');
    //document.addEventListener('DOMContentLoaded', printMeal);
showMeals.innerHTML = ''; // Clear previous meals
    dinners.forEach(dinner => {
        const mealItem = document.createElement('div');
        mealItem.textContent = dinner.name;
        showMeals.appendChild(mealItem);
    });
}

function printMeal() {
    try {
        const dinners = Store.getDinner();
        const showMeals = document.querySelector('#show-meals');
        showMeals.innerHTML = ''; // Clear previous meals
        dinners.forEach(dinner => {
            const mealItem = document.createElement('div');
            mealItem.textContent = dinner.name;
            showMeals.appendChild(mealItem);
        });
    } catch (error) {
        console.error('Error in printMeal:', error);
        // You can also show a user-friendly error message here
        // For example: document.getElementById('error-message').textContent = 'An error occurred while printing meals.';
    }
}

// Call printMeal on page load to show meals
printMeal();

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
function printMeals() {
    try {
        const dinners = Store.getDinner();
        const planMeals = document.querySelector('.meal');
        planMeals.innerHTML = ''; // Clear previous meals
        dinners.forEach(dinner => {
            const mealItem = document.createElement('div');
            mealItem.textContent = dinner.name;
            planMeals.appendChild(mealItem);
        });
    } catch (error) {
        console.error('Error in printMeals:', error);
        // You can also show a user-friendly error message here
        // For example: document.getElementById('error-message').textContent = 'An error occurred while printing meals.';
    }
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

       const existingMeal = planMeals.querySelector(`[data-meal-id="${dinner.id}"]`);

if (existingMeal) {
    console.log(`Duplicate meal found: ${dinner.name}`);
    // Optionally, you could highlight or update the existing meal here
} else {
    const mealItem = document.createElement('div');
    mealItem.textContent = dinner.name;
    mealItem.dataset.mealId = dinner.id;
    planMeals.appendChild(mealItem);
}
    } else {
        const mealItem = document.createElement('div');
        mealItem.textContent = "No meals available";
        planMeals.appendChild(mealItem);
    }
}
    
          //check if meal is all ready in planner

       
   

function randomizeAllDays() {
    const dinners = [...Store.getDinner()];
    const daySlots = document.querySelectorAll('.meal');

    daySlots.forEach(slot => {
        slot.innerHTML = '';
        if (dinners.length > 0) {
            const idx = Math.floor(Math.random() * dinners.length);
            const dinner = dinners.splice(idx, 1)[0]; // remove used meal
            const mealItem = document.createElement('div');
            mealItem.textContent = dinner.name;
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
