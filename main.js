const hamburger = document.querySelector('.hamburger');
const myLinks = document.querySelector('#myLinks');

function hamburgerClick() {
    var x = document.getElementById('myLinks');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}


const mealForm = document.querySelector('#add-meal-form');

function Dinner(name) {
    this.name = name;
    this.id = generateMealID();
}

function generateMealID() {
    const timestamp = Date.now();
    let counter = parseInt(localStorage.getItem('mealCounter')) || 0;
    counter++;
    localStorage.setItem('mealCounter', counter);
    return `${timestamp}-${counter}`;
}

//store
class Store {
    static getDinner() {
        let dinners;
        if (localStorage.getItem('dinners') === null) {
            dinners = [];
        } else {
            dinners = JSON.parse(localStorage.getItem('dinners'));
        }
        return dinners;
    }

    static addDinner(dinner) {
        const allDinners = Store.getDinner();
        allDinners.push(dinner);
        localStorage.setItem('dinners', JSON.stringify(allDinners));
    }
}


const mealNameInput = document.querySelector('#meal-name-input');
if (mealForm) {
    mealForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const mealName = mealNameInput.value.trim();
        if (mealName) {
            Store.addDinner(new Dinner(mealName));
            console.log(Store.getDinner());
            mealNameInput.value = '';
        } else {
            console.warn('Please enter a meal name before adding.');
        }
        // Reload kept for now to keep behavior unchanged; consider removing
        // and updating UI in-place instead for better UX.
        location.reload(true);
    });
}

//clear meals
const clearMeals = document.querySelector('#clear-meals');

function clearDinners() {
    localStorage.removeItem('dinners');
}

function clear() {
    clearDinners();
    location.reload(true);
}

if (clearMeals) {
    clearMeals.addEventListener('click', clear);
}


