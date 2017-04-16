/**
 * This class tries out an interesting constructor pattern that allows it to
 * have private and immutable variables (constants).
 *
 * Constructing an instance is done without the "new" keyword.
 * Properties are accessed through method syntax (e.g. "obj.propname()").
 */

"use strict"

module.exports = {
    Fisherman
};

function Fisherman(name, age) {

    // Public constant
    var MAX_AGE = 30;

    // Keep internal references to the supplied parameters. This results in a
    // closure in which _name and _age are immutable
    var _name = name,
        _age = enforceMaxAge(age);

    // The inner object that will be exposed
    var innerObject = {
        // Getter & setters
        name: function (value) {
            if (!arguments.length) {
                return _name;
            } else {
                _name = value;
            }
            return innerObject;
        },
        age: function (value) {
            if (!arguments.length) {
                return _age;
            } else {
                _age = enforceMaxAge(value);
            }
            return innerObject;
        }
    }

    // Instance function
    innerObject.toString = function () {
        return "Fisherman: {name:} " + _name + ", age: " + _age + "}";
    }

    // Expose public constant through instance
    innerObject.MAX_AGE = function () {
        return MAX_AGE;
    }

    // Private method
    function enforceMaxAge(age) {
        return (age > MAX_AGE) ? MAX_AGE : age;
    }

    return innerObject;
}