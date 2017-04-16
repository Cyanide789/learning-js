var test = require("tape");
var f = require("../src/umbrella/fisherman/fisherman")

test("Can construct fisherman object", function (assert) {
    var fisherman = f.Fisherman("Tom", 28);
    assert.equals(fisherman.name(), "Tom", "Fisherman name equals Tom");
    assert.end();
})

test("Can modify a property of fisherman", function (assert) {
    var fisherman = f.Fisherman("Tom", 28);
    assert.equals(fisherman.name(), "Tom", "Fisherman name equals Tom");
    fisherman.name("modified");
    assert.equals(fisherman.name(), "modified", "Modify Fisherman name");
    assert.end();
})

test("Can add a property to fisherman", function (assert) {
    var fisherman = f.Fisherman("Tom", 28);
    fisherman.newprop = "newprop"
    assert.equals(fisherman.newprop, "newprop", "Add property to Fisherman object");
    assert.end();
})

test("Fisherman has the MAX_AGE property", function (assert) {
    var fisherman = f.Fisherman("Tom", 28);
    assert.equals(fisherman.MAX_AGE(), 30, "Fisherman has MAX_AGE set to 30 accessible through instance");
    assert.throws(() => f.Fisherman.MAX_AGE(), /TypeError/, "Fisherman MAX_AGE property is not accessible through class");
    assert.end();
})

test("Fisherman enforces MAX_AGE = 30 on create", function (assert) {
    var fisherman = f.Fisherman("Tom", 31);
    assert.equals(fisherman.age(), 30, "Fisherman age equals 30");
    assert.end();
})

test("Fisherman enforces MAX_AGE = 30 on update", function (assert) {
    var fisherman = f.Fisherman("Tom", 29);
    assert.equals(fisherman.age(), 29, "Fisherman age equals 29");
    fisherman.age(31);
    assert.equals(fisherman.age(), 30, "Fisherman age equals 30");
    assert.end();
})

test("Fisherman.enforceMaxAge is private", function (assert) {
    var fisherman = f.Fisherman("Tom", 29);
    assert.throws(() => fisherman.enforceMaxAge(25), /TypeError/, "Fisherman.enforceMaxAge cannot be reached through instance");
    assert.end();
})

test("MAX_AGE is immutable", function (assert) {
    var fisherman = f.Fisherman("Tom", 28);
    assert.throws(() => fisherman.MAX_AGE() = 25, /Error/, "Cannot reassign MAX_AGE to integer");
    assert.equals(fisherman.MAX_AGE(25), 30, "Cannot reassign MAX_AGE through function invocation");

    // Mutiliate my poor object
    fisherman.MAX_AGE = function () {
        return 25;
    };
    assert.equals(fisherman.MAX_AGE(), 25, "The function MAX_AGE() was modified to return 25");

    fisherman.age(45);
    assert.equals(fisherman.age(), 30, "Yet, the existing logic is intact: cannot set an age above 30 (not 25)");

    var newfisher = f.Fisherman("new", 31);
    assert.equals(newfisher.age(), 30, "New objects are not affected: age capping logic is intact");
    assert.equals(newfisher.MAX_AGE(), 30, "New objects are not affected: MAX_AGE = 30");
    assert.end();
})