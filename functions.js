//console.log("This is the functions worksheet");

 // Notes:
 // 

 //start task
 // ticket machine:

//  let age = 72

//  if (age < 18){
//     console.log("ticket price = £8");
//  }
//  else if ( age > 18 && age < 60){
//     console.log("ticket price = £10.95");
//  }
//  else console.log("ticket price = £7.50");


// functions break our code into smaller, reuasable chunks:

// example:

// () declares the function function --- => lets us know it is an arrow function 
//const pressGrindBeans = () => {
//    console.log("Grinding for 20 seconds");
//}
//pressGrindBeans(); // runs function / calls the function

// const favColour = () => {
//     console.log("My favourite colour is blue");
// }
// favColour();


//functions with IF statements:

// let coffeeIsGrinding = false;

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {         // can but '== true' but because boolean already implies this
//         console.log("Stopping the grind");
//         coffeeIsGrinding = false;      //  changes to false if true
//     } else {
//         console.log("Grinding is about to begin");
//         coffeeIsGrinding = true;       // changes to true if false
//     }
// } 
// pressGrindBeans();
// pressGrindBeans();    // is updated each time you run it 


// Adding parameters:
// parameters give functions felxibility - they provide the ability for functions to act based on data inputs

// let accNumber = 50449921;

// const cashWithdrawal = (amount, accNum) => {        // parts in the () are known as the parameters
//     console.log(`Withdrawing ${amount} from account ${accNum}`);
// }

// cashWithdrawal(300, accNumber);       // these are known as the arguments to the parameters  // starts of as the variable but is changed by the parameter in the function -- accNumber is still accNum
// cashWithdrawal(30, 50449921);
// cashWithdrawal(200, 50447921);


// const favouriteColour = (favColour) => {
//     console.log(`${favColour}`);          // fix later  // 1st mistake confusing the parameter and variable
// };                                          // 2nd mistake not putting blue in "blue" as its a string
// favouriteColour("red");


// const addUp = (num1, num2) => {
//     return num1 + num2;
// }

// addUp(7, 3);   // even though pc did sum - wont output
// console.log(addUp(2, 5));


// functions might call on other functions and use that to achieve its goal:
// example does the customer have enough funds requested?
// check and return the result to withdraw cash

// An Example:

// const multiplyByNineFifths = (num) => {       // go over this in recording 
//     return num * (9/5);
// }
// const getFahrenheit = (celsius) => {
//     return multiplyByNineFifths(celsius) + 32;
// };
// console.log("The temperature is "  + getFahrenheit(15) +  "°F");

// output the temperature is 59°F

// Recap:
// functions are written to perform a task
// functions take data, perform a set of tasks on the data, then return the result.
// we can define parameters to be used when calling the function
// when calling a function, we can pass in arguments, which will set the functions parameters.
// We can use return to return the result of a function and use it elsewhere.

// Activities:

// Activity 1:
// switching into an arrow function:

// const factorial = (n) => {
//     if (n === 0 || n ===1) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }
// console.log(factorial(5));


//Activity 2:
// Editing code to include two paremeters and a running order count

// let orderCount = 0;

// const takeOrder = (topping1, topping2) => {
//     console.log(`Pizza with ${topping1} and ${topping2}`);
//     orderCount++;
// }
// takeOrder("meatballs, chicken");
// takeOrder("ham, pineapple");

// console.log(orderCount);


//Activity 3:
// Cash machine
// dispenses cash if:
// pin is correct
// balance >= withdraw amount              //Took a WHILE this one - go over fundamentals
                                                // suffered with syntax error - putting; and {} in wrong places or where they werent supposed to be 

let balance = 100
let pinNumber = 1111

const withdrawAttempt = (pinAttempt, withdrawAmount) => {
    if (pinAttempt == pinNumber && withdrawAmount <= balance) {
    console.log(`You have withdrawn £${withdrawAmount} from your account`);
}
    else if (pinAttempt !== pinNumber) {
        console.log("Incorrect pin");
    } else if (withdrawAmount > balance){
        console.log("Insufficient funds");
    }
    else console.log("please try again");
} 

withdrawAttempt(1111, 150);


