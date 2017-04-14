/*
  This is an exploratory project to learn JavaScript

  @author tom.piccin
*/

"use strict"

// Main logic
console.log("== start of program ==");

// Create a valid person object
var tom = new Person("Tom", 28);
console.log(tom.toString());

// Create an invalid person object
try {
    var dries = new Person("Dries", "Dries");
} catch (error) {
    console.log(error);
}

console.log("=== end of program ===");

// Objects

/**
 * Creates a new Person object.
 *
 * @param {string} name
 * @param {Number} age
 */
function Person(name, age) {

    isString(name) ? this.name = name : _throw(name + " is not a valid name");
    isNumber(age) ? this.age = age : _throw(age + " is not a valid age");

    this.toString = function () {
        return "Person, name: " + name + ", age: " + age;
    }
}

/**
 * Throws an eror with the provided message.
 *
 * @param {*} message
 */
function _throw(message) {
    throw message;
}

/**
 * Checks whether the argument is a string.
 *
 * @param {*} candidateString
 */
function isString(candidateString) {
    return typeof candidateString === 'string';
}

/**
 * Checks whether the argument is a number.
 *
 * @param {*} candidateNumber
 */
function isNumber(candidateNumber) {
    return typeof candidateNumber === 'number';
}