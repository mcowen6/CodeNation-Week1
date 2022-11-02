//console.log("this is the array and loop lecture");

// let coffeeOrder = [
//     "Alex - Cortado",  //0
//     "Ben - Cortado",  //1
//     "Charlie - Whatever's new",  //2
// ];

// coffeeOrder.push("Donna - espresso");
// console.log(coffeeOrder);

// console.log(coffeeOrder[2]); 

// Arrays can be updated just like variables :

// coffeeOrder[1] = "Ann - Vanilla latte";
// console.log(coffeeOrder);

// console.log(coffeeOrder.length); // properties work just like variables - this will output the length of the array -> how many items

// .push method -> allows you to add add items / push items to the end of a list / array -> has to be added underneath the array as shown above not below -> or atleast above any other functions that are to be carried out afterwards

// coffeeOrder.push("Donna - espresso");

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

// for (let i = 0; i < 20; i++){
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

// Card example:

// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = "Club";

// while(currentCard != "Spade"){
//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random()*4)];
// }
// console.log(currentCard);


//Activity 1:
// array of favourite films [5]
// add two more using method (.push())
// use loop to cycle through array
//start:

// let favFilms = ["Once upon a time in Hollywood", "No country for old men", "Reservior dogs", "The Shawshank Redemption", "Fight Club"];

// favFilms.push("A Bronx Tale", "Shutter Island");

// for (i = 0; i < favFilms.length; i++){
//     console.log(favFilms[i]);
// }

// console.log(favFilms);


// Activity 2:
// generate 6 random numbers between 1-50

// let numArray1 = new Array();

// for (let i=0; numArray1.length < 6; i++){
//     let rNum1 = Math.floor(Math.random()*50);
//     numArray1.push(rNum1);
//     console.log(numArray1);
// }
// console.log(rNum1);
// can also do:
// while (numArray1.length < 6){
//     let rNum1 = Math.floor(Math.random()*50);
//     numArray1.push(rNum1);
//     console.log(numArray1);
// }


//Activity 3:
// count down from 9 to 0:

// let myNum = 9

// while (myNum >= 0){
//     console.log(myNum);
//     myNum--;
// }


//Activity 4:

// let filmsArray = [
//     "Legend",
//     "Fear & Loathing in Las Vegas",
//     "Scarface",
//     "The Irishman",
// ]
// for (let i = 0; i < filmsArray.length; i++){
//     console.log(filmsArray[i]);
// } if (filmsArray[2] == "Ghostbusters"){
//     console.log("Yay it's Ghostbusters");
// } else if (filmsArray[2] !== "Ghostbusters"){
//     console.log("Boo! we want Ghostbusters!");
// }


//Activity 5:
// random n between 1-30
// for each -> check if % 7
// log message if yes or no
//start:

// let rNumArray = new Array();

// for (let i = 0; rNumArray.length < 6; i++){
//     let rNum = Math.floor(Math.random()*30);
//     rNumArray.push(rNum);
//     if (rNumArray[i] % 7 == 0){
//         console.log(`${rNum} is divisible by 7.`);
//     } else {console.log(`${rNum} is not divisible by 7.`)}
// }


//Activity 6:
//  2 ARRAYS of SM followers: bobsFollowers, amysFollowers
// 4 names in each - make sure 2 names in both arrays
// use nested loop to iterate over both arrays and log the matching follower(s)
// start:   // still need to fix

// let bobsFollowers = [
//     "Sam",
//     "Charlie",
//     "Jessica",
//     "Owen",
// ];
// let amysFollowers = [
//     "Charlie",
//     "Jake",
//     "Kyle",
//     "Jessica",
// ];

// let matchFollowers;

// for (let b = 0; b < bobsFollowers.length; b++) {
//     matchFollowers = false;
        
//     for (let i = 0; i < amysFollowers.length; i++) {
//         if (bobsFollowers[b] == amysFollowers[i]) { 
//             matchFollowers = true;
//             break;
//             }if (matchFollowers) {
//             console.log();
//         }   else {console.log("No match found.")};
//     }
// }


//Activity 7: 

// Do while loop repeats itself until a specified condition evaluates to false.
// do 
//      statement 
// while (condition);


// A while statement executes as long as the condition remains true:
// while (condition)
//        statement

// A for loop repeats until a specified condition evaluates to false
// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//      statement ---- to execute multiple times use a block statement {}