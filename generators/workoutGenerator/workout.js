let button = document.getElementById('workoutBtn');

const upperExercises = ['Standard Push-Ups 4 x 25', 'Hand Tap Push-Ups 4 x 10', 'Shoulder Tap Push-Ups 4 x 10', 'Single-Arm Raised Push-Ups 4 x 10', 'Knuckle Push-Ups 4 x 20', 'Slow Negative Push-Ups 4 x 10', 'Diamond Push-Ups 4 x 12', 'Wide Push-Ups 4 x 20', 'Feet Elevated Push-Ups 4 x 12', 'Isometric Push-Ups 4 x 30 Seconds'];

const coreExercises = ['Standing Side Bend 4 x 25', 'Standing Russian Twist 4 x 25', 'Butterflies 4 x 10', 'Russian Twist 4 x 10', 'Crunches 4 x 12', 'Planks 4 x 30 Seconds'];

const lowerExercises = ['Squats 4 x 25', 'Lunges 4 x 12', 'Side Step to Squat 4 x 12', 'Eccentric Squats 4 x 16', 'Glute Bridges 4 x 12', 'Good Mornings 4 x 12', 'Squat Holds 4 x 20 Seconds', 'High Knees 4 x 25', 'Calf Raises 8 x 25', 'Single-Leg Calf Raises 4 x 12', 'Toe Raises 8 x 25',];

const fullExercises = ['Burpees 4 x 10', 'Mountain Climbers 4 x 30 Seconds', 'Sprawls 4 x 16'];

const resistanceExercisesUpper = ['Dumbbell Bicep Curls 4 x 12', 'Dumbbell Hammer Curls 4 x 12', 'Dumbbell Side Hammer Curls 4 x 12', 'Dumbbell Tricep Extensions 4 x 20', 'Dumbbell Front Raises 4 x 12', 'Dumbbell Lateral Raises 4 x 12', 'Dumbbell Shrugs 4 x 16', 'Dumbbell Shoulder Presses 4 x 12', 'Dumbbell Rows 4 x 12', 'Hand Gripper 4 x 16'];

const resistanceExercisesCore = ['Dumbbell Side Bends 4 x 12'];

const resistanceExercisesLower = ['Goblet Squats 4 x 12', 'Dumbbell Lunges 4 x 12', 'Dumbbell Calf Raises 4 x 25'];

const resistanceExercisesFull = ['Standard Push-Ups w/ Baby On Back 4 x 10'];

// Upper Exercises
let randomUpper = () => {
    return Math.floor(Math.random() * upperExercises.length);
};

let getRandomUpper = () => {
    let randomExercise = document.querySelectorAll('.fillInUpper')

    for(let i = 0; i < randomExercise.length; i++) {
        randomExercise[i].innerHTML = upperExercises[randomUpper()];
    }
};

getRandomUpper();
// Upper Exercises

// Core Exercises
let randomCore = () => {
    return Math.floor(Math.random() * coreExercises.length);
};

let getRandomCore = () => {
    let randomExercise = document.querySelectorAll('.fillInCore')

    for(let i = 0; i < randomExercise.length; i++) {
        randomExercise[i].innerHTML = coreExercises[randomCore()];
    }
};

getRandomCore();
// Core Exercises

// Lower Exercises
let randomLower = () => {
    return Math.floor(Math.random() * lowerExercises.length);
};

let getRandomLower = () => {
    let randomExercise = document.querySelectorAll('.fillInLower');

    for(let i = 0; i < randomExercise.length; i++) {
        randomExercise[i].innerHTML = lowerExercises[randomLower()];
    }
};

getRandomLower();
// Lower Exercises

// Full Exercises
let randomFull = () => {
    return Math.floor(Math.random() * fullExercises.length);
};

let getRandomFull = () => {
    let randomExercise = document.querySelectorAll('.fillInFull');

    for(let i = 0; i < randomExercise.length; i++) {
        randomExercise[i].innerHTML = fullExercises[randomFull()];
    }
};

getRandomFull();
// Full Exercises

// Resistance Exercises Upper
let randomResistanceUpper = () => {
    return Math.floor(Math.random() * resistanceExercisesUpper.length);
};

let getRandomResistanceUpper = () => {
    let randomExercise = document.querySelectorAll('.fillInResistanceUpper');

    for(let i = 0; i < randomExercise.length; i++) {
        randomExercise[i].innerHTML = resistanceExercisesUpper[randomResistanceUpper()];
    }
};

getRandomResistanceUpper();
// Resistance Exercises Upper

// Resistance Exercises Core
let randomResistanceCore = () => {
    return Math.floor(Math.random() * resistanceExercisesCore.length);
};

let getRandomResistanceCore = () => {
    let randomExercise = document.querySelectorAll('.fillInResistanceCore');

    for(let i = 0; i < randomExercise.length; i++) {
        randomExercise[i].innerHTML = resistanceExercisesCore[randomResistanceCore()];
    }
};

getRandomResistanceCore();
// Resistance Exercises Core

// Resistance Exercises Lower
let randomResistanceLower = () => {
    return Math.floor(Math.random() * resistanceExercisesLower.length);
};

let getRandomResistanceLower = () => {
    let randomExercise = document.querySelectorAll('.fillInResistanceLower');

    for(let i = 0; i < randomExercise.length; i++) {
        randomExercise[i].innerHTML = resistanceExercisesLower[randomResistanceLower()];
    }
};

getRandomResistanceLower();
// Resistance Exercises Lower

// Resistance Exercises Full
let randomResistanceFull = () => {
    return Math.floor(Math.random() * resistanceExercisesFull.length);
};

let getRandomResistanceFull = () => {
    let randomExercise = document.querySelectorAll('.fillInResistanceFull');

    for(let i = 0; i < randomExercise.length; i++) {
        randomExercise[i].innerHTML = resistanceExercisesFull[randomResistanceFull()];
    }
};

getRandomResistanceFull();
// Resistance Exercises Full

button.addEventListener('click', function() {
    getRandomUpper(), getRandomCore(), getRandomLower(), getRandomFull(), getRandomResistanceUpper(), getRandomResistanceCore(), getRandomResistanceLower(), getRandomResistanceFull();
}, false);