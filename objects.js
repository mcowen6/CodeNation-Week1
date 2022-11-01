// console.log("This is the objects javascript worksheet");

/*
objects are cotainers that can store data and functions. We use Key-Value pairs to store data.
*/

// const cafe /*created cafe variable*/ = {      // cyrly bracket lets us know its an object instead of array or variable 
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,           //  -->> these are all keys e.g. name, drinks, seating cap
//     drinks:                             // keys and values are seperated by a colon --> key: value
//      [
//         "Cappuccino",
//         "Latte",
//         "Filter coffee",                
//         "Tea",
//         "Hot chocolate",
//     ]
// };

// const person = {
//     name: "Max",
//     age: 19,
//     Town: "Liverpool",
//     favouriteSongs:
//      [
//         "Stairway to Heaven",
//         "Start me Up",
//         "Stuck in the middle with you",
//         "Sultans of Swing",
//     ]                                               // values can be aby data type -> they can even be arrays and functions 
// };

// to access data in objects:

// console.log(person.name);

//can also use brackets:

// console.log(person["name"]);
//console.log(person.favouriteSongs);





// let offer = "none";
// let time = 1800;

// const cafe = {       
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,           
//     drinks:                             
//      [
//         "Cappuccino",
//         "Latte",
//         "Filter coffee",                
//         "Tea",
//         "Hot chocolate",
//     ],
//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with surprisingly priced sandwich",
//     dinnerOffer: "Free slice of pizza with coffee's over £3",
//     noOffer: "Sorry no offer",
// };

// if (time < 1100) {
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastOffer);
// } else if (time < 1500) {
//     offer = cafe.lunchOffer;
//     console.log(cafe.lunchOffer);
// } else if (time >= 1700 && time <= 2000) {
//     offer = cafe.dinnerOffer;
//     console.log(cafe.dinnerOffer);
// } else {console.log(cafe.noOffer)}           // fix this --> was getting confused with final else statement 
                                            // didnt need a condition "()" as its just else but did need "{}" for the command of logging to console.


// Alarm activity:       // go over this

// let day = "Monday"
// let alarm
// let daysWeek = "Monday" || "Tuesday" || "Wednesday" || "Thursday" || "Friday"
// let weekend = "Saturday" || "Sunday"

// const alarmClock = {
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "get up at 7am",
// }

// if (day == daysWeek) {
//     alarm = weekdayAlarm;
//     console.log(weekdayAlarm);
// }


// objects can be changed once wwe've made them i.e they are mutable.


//Using functions with objects:


// let offer = "none";
// let time = 1200;

// const cafe = {       
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,           
//     drinks:                             
//      [
//         "Cappuccino",
//         "Latte",
//         "Filter coffee",                
//         "Tea",
//         "Hot chocolate",
//     ],
//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with surprisingly priced sandwich",
//     noOffer: "Sorry no offer",

//     openCafe: ()=>{
//         return "Come on in";                            // need to add if statements here 
//     },
//     closeCafe: ()=>{
//         return "We are closed, come back tomorrow";
//     }
// };

// console.log(cafe.openCafe());
// console.log(cafe.closeCafe());



//Activity 1:

// const person = {
//     name: "Max",
//     age: 19,
//     Town: "Liverpool",
//     favouriteSongs:
//      [
//         "Stairway to Heaven",
//         "Start me Up",
//         "Stuck in the middle with you",
//         "Sultans of Swing",
//     ],   
//     sayHi(){                                             //can word like this because its a function inside of an object
//         console.log(`Hello my name is ${this.name}.`);
//     }                                             
// };

// person.sayHi()                  // because console.log is inside of the function you can output like this     


//Activity 2:
/* create object called pet with key values:
name, typeOfPet, age, colour,
and methods : eat and drink
should return string saying you pet name is eating/drinking
*/

// const pet = {
//     name: "Tia",
//     typeOfPet: "Cat",
//     age: 11,
//     Colour: "black and silver",

//     eat(){
//         console.log(`${this.name} is eating.`);
//     },
//     drink(){
//         console.log(`${this.name} is drinking.`);
//     }
// }

// pet.eat()
// pet.drink()


// Activity 3:
/*
create object called coffeeshop with key values of:
branch, drink - with prices, food - with prices
and methods called drinksOrdered and foodOrdered.
should return string saying your order is - and all items chosen with costs and total costs.
*/

// const coffeeShop = {
//     branch: "Starbucks",
//     const drinks = {

//     }
    