var test = require("tape");
var dom = require("umbrella.domain");

test("TestPerson", function (assert) {
    var person = new dom.Person("Tom", 28);
    assert.equals(person.name, "Tom", "Person name equals Tom");
    assert.equals(person.age, 28, "Person age equals 28");
    assert.end();
})

test("Company", function (assert) {
    var company = new dom.Company("MiniCorp", "MCP");
    assert.equals(company.name, "MiniCorp", "Company name equals MiniCorp");
    assert.equals(company.tickerSymbol, "MCP", "Company ticker symbol equals MCP");
    assert.end();
})