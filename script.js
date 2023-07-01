'use strict';

console.log("Aakash");

let firstName = "Aakash";

let aakash_kuheli = "AK";
let $function = 27;

let country = "India";
let continent = "Asia";
let population = 1500000000;

console.log("Country = " + country + ", continent = " + continent + ", population = " + population);
console.log(typeof true);

console.log(typeof null); // object --> bug not corrected due to legacy reasons

// function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1999);

// function expression
const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
} 

const age2 = calcAge2(1999);

console.log(age1, age2);

// arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1999);
console.log(age3);

// arrays
const friends = ['Srihari', 'Dhruv', 'Gunjan'];
friends[0] = 'Raghu';
console.log(friends);

// array methods
friends.push('Srihari');
console.log(friends);

friends.unshift('Sharan');
console.log(friends);

const removedFriend = friends.pop()
console.log(removedFriend);
console.log(friends);

const anotherRemovedFriend = friends.shift();
console.log(anotherRemovedFriend);
console.log(friends);

console.log(friends.indexOf('Gunjan'));

console.log(friends.includes('Dhruv'));