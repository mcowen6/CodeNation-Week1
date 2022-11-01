let string1 = "Halloween";

let reverseString1 = string1.split('').reverse().join('');

// console.log(string1);
// console.log(reverseString1);

// could've also used a function

const reverseStr = (str) => {
    const strArray = str.split("");
    const reverseStr = strArray.reverse();
    const strJoin = reverseStr.join("");

    return strJoin;
}
console.log(reverseStr(string1));

// have to turn the string into an array using split in order to reverse it. because there is no method to just reverse a string.