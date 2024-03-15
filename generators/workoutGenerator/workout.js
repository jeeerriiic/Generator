let displayUpper = document.getElementById('fillInUpper');
let displayCore = document.getElementById('fillInCore');
let displayLower = document.getElementById('fillInLower');
let displayFull = document.getElementById('fillInFull');
let displayResistance = document.getElementById('fillInResistance');

let button = document.getElementById('workoutBtn');

const upperExercises = ['Standard Push-Ups 4 x 25', 'Hand Tap Push-Ups 4 x 10', 'Shoulder Tap Push-Ups 4 x 10', 'Single-Arm Raised Push-Ups 4 x 10', 'Knuckle Push-Ups 4 x 20', 'Slow Negative Push-Ups 4 x 10', 'Diamond Push-Ups 4 x 12', 'Wide Push-Ups 4 x 20', 'Feet Elevated Push-Ups 4 x 12', 'Isometric Push-Ups 4 x 30 Seconds'];

const coreExercises = ['Standing Side Bend 4 x 25', 'Standing Russian Twist 4 x 25', 'Butterflies 4 x 10', 'Russian Twist 4 x 10', 'Crunches 4 x 12', 'Planks 4 x 30 Seconds'];

const lowerExercises = ['Squats 4 x 25', 'Lunges 4 x 12', 'Side Step to Squat 4 x 12', 'Eccentric Squats 4 x 16', 'Glute Bridges 4 x 12', 'Good Mornings 4 x 12', 'Squat Holds 4 x 20 Seconds', 'High Knees 4 x 25', 'Calf Raises 8 x 25', 'Single-Leg Calf Raises 4 x 12', 'Toe Raises 8 x 25',];

const fullExercises = ['Burpees 4 x 10', 'Mountain Climbers 4 x 30 Seconds', 'Sprawls 4 x 16'];

const resistanceExercises = ['Dumbbell Bicep Curls 4 x 12', 'Dumbbell Hammer Curls 4 x 12', 'Dumbbell Side Hammer Curls 4 x 12', 'Tricep Extensions 4 x 20', '']