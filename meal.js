
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

// Call printMeal on page load to show meals
printMeal();
