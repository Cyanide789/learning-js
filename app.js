/*
  This is an exploratory project to learn JavaScript

  @author tom.piccin
*/

"use strict"

// Main logic
console.log("== start of program ==");

// Create a valid company object
var miniCorp = new Company("MiniCorp", "MCP");

// Create a valid person object
var tom = new Person("Tom", 28, miniCorp);
console.log(miniCorp.toString());
console.log(tom.toString());

// Create an invalid person object
try {
    var dries = new Person("Dries", "invalid_lastname");
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
 * @param {Company} company
 */
function Person(name, age, company) {

    isString(name) ? this.name = name : _throw(name + " is not a valid name");
    isNumber(age) ? this.age = age : _throw(age + " is not a valid age");
    company ? this.company = company : null;

    this.toString = function () {
        var msg = "Person: {name: " + name + ", age: " + age
        company ? msg += ", " + company.toString() : null;
        return msg += "}";
    }
}

/**
 * Creates a company object.
 *
 * @param {string} name
 * @param {string} tickerSymbol
 */
function Company(name, tickerSymbol) {

    isString(name) ? this.name = name : _throw(name + " is not a valid name");
    isString(tickerSymbol) ? this.tickerSymbol = tickerSymbol : _throw(name + " is not a valid ticker symbol");

    this.toString = function () {
        return "Company: {name: " + this.name + ", tickersymbol: " + tickerSymbol + "}";
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