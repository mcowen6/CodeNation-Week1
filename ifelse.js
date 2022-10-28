//console.log("This is ElseIf notes");


// Conditional Operator Example 
// let age = 19;

// (age < 18) ? console.log("too young") : console.log("old enough");

//time example:
// If hour is between 6am and 12pm: Good morning
// if it is between 12pm and 6pm: Good afternoon
// Otherwise: good evening::

// let hour = 20;

// if (hour >= 6 && hour < 12){
//     console.log("Good Morning!");
// }
// else if ( hour >= 12 && hour < 18){
//     console.log("Good afternoon");
// }
// else console.log("Good Evening");



//Activities:

//Activity 1 & Stretch 1
//start:

// let age = 18;
// let country = "UK"

// if (age >=17 && country == "UK"){
//     console.log("You may be allowed to drink");
// } else if (age < 18){ 
//     console.log("You aren't old enough");
// } else {
//     console.log("Yes I can serve you");
// }

//Activity 2 -- Pizza Topping switch statement
//start:

// let topping = "pineaple";

// switch(topping){
//     case "ham":
//         console.log("It's okay, but a bit boring.");
//         break;
//     case "pineapple":
//         console.log("Never pineapple on its own.");
//         break;
//     case "chicken":
//         console.log("Now this is the important ingredient for a pizza.");
//         break;
//     case "tuna":
//         console.log("Nope, tuna should not be on a pizza.");
//         break;
//     default:
//         console.log("I guess you lack taste buds."); 
// }

// Activity 3 Password 
// create variable password
// check how many letters are in password
// if < 8 -> "too short"
// otherwise -> log to console
//start:

// let password = "niroenvr9383"

// if (password.length < 8){
//     console.log(`${password} is too short for a password`);
// }
//     else console.log(`${password}`);


// Activity 4: Is num divisible by 3 or 5
// create num variable 
// check if divisible by 3 or 5
// if yes -> this number is divisible by 3 or 5
// otherwise -> log something else 
//start:

// let num = 17

// if (num % 3 == 0 && num % 5 == 0){
//     console.log(`${num} is divisible by 3 and 5`);
// } 
// else if (num % 3 == 0 || num % 5 == 0){
//     console.log(`${num} is divisible by 3 or 5`);
// }
// else console.log("The number you entered is neither divisible by 3 or 5");


//Activity 5:
//create num varibale 
// if divisible by 3 log "fizz"
// if divisible by 5 log "buzz"
// if both -> "fizz buzz"
// else -> log num
//start:

// let num = 17

// if (num % 3 == 0 && num % 5 == 0){
//     console.log("fizz buzz");
// }
// else if (num % 3 == 0){
//     console.log("fizz");
// }
// else if (num % 5 == 0){
//     console.log("buzz");
// }
// else console.log(`${num}`);


// Activity 6:
//create num variable
//check if number is palindrome

// let num = "9009"

// numReverse = num.split("").reverse().join("")
// if (numReverse == num){
//     console.log("Number is a palindrome");
// } 
// else console.log("Number is not a palindrome");


//Activity 7:
// create time variable
// create townOfHome variable 
// create placeOfWork variable
// create if -> that logs where people are at each time of day
//start:

// let time = 16
// let placeOfWork = "Work"
// let townOfHome = "Home"

// if (time >= 19 && time <= 20){
//     console.log("I'm having my tea");
// }
// else if (time <= 8 || time >= 18){
//     console.log(`I'm at ${townOfHome}`);
// }
// else if (time > 9 || time < 17){
//     console.log(`I'm at ${placeOfWork}`);
// }


//Activity 8:
// Take “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”
// and find the last vouwel in the string
//start:
