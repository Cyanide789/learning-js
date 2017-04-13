/* 
  This is an exploratory project to learn JavaScript

  @author tom.piccin
*/

// Main logic

var tom = new Person("Tom", 28);
var msg = tom.toString();

console.log(msg);

// Objects

/**
 * Creates a new Person object.
 * 
 * @param {String} name 
 * @param {Number} age 
 */
function Person(name, age) {
  
  this.name = name;
  this.age = age;

  this.toString = function() {
    return "name: " + name + ", age: " + age;
  }
}