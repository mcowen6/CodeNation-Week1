//console.log("this is the array and loop lecture");

let coffeeOrder = [
    "Alex - Cortado",  //0
    "Ben - Cortado",  //1
    "Charlie - Whatever's new",  //2
];

//coffeeOrder.push("Donna - espresso");
//console.log(coffeeOrder);

//console.log(coffeeOrder[2]); 

// Arrays can be updated just like variables :

// coffeeOrder[1] = "Ann - Vanilla latte";
// console.log(coffeeOrder);

//console.log(coffeeOrder.length); // properties work just like variables - this will output the length of the array -> how many items

// .push method -> allows you to add add items / push items to the end of a list / array -> has to be added underneath the array as shown above not below -> or atleast above any other functions that are to be carried out afterwards

//coffeeOrder.push("Donna - espresso");

// .pop method -> removes the last item from the list of your array

// coffeeOrder.pop();
// console.log(coffeeOrder);


// Loops 

// let favouriteDrink = [
//     "Water",
//     "Orange Juice",
//     "Apple Juice",
//     "pineapple Juice"
// ];
// imagine having to log each individually:

// console.log(favouriteDrink[0]);
// console.log(favouriteDrink[1]);
// console.log(favouriteDrink[2]);

// this is where loops come in:

// for(let i = 0; i < favouriteDrink.length; i++){
//     console.log(favouriteDrink[i]);
// }

// For Loops with an if statement and maths:

// let multiplesTwo = [];

// for (let i = 0; i < 25; i++){
//     if (i % 2 == 0){
//         multiplesTwo.push(i);       // if i is a multiple of two, then telling to push to bottom of array/ list
//     }
// }
// console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`);        // calling all values in array using template literal


// While loop:
// let age = 15;

// while (age < 18 ){
//     console.log("You're a child -" + age);
//     age++;
// }
// console.log("You're an adult -" + age)

