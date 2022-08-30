import { Given, When, Then } from "@cucumber/cucumber";
//const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert").strict;

//feature increment
Given("a variable set to {int}", function (number) {
  this.setTo(number);
});
When("I increment the variable by {int}", function (number) {
  this.incrementBy(number);
});
Then("the variable should be {int}", function (number) {
  assert.equal(this.variable, number);
});

//feature sum

Given("first param of sum set to {int}", function (int) {
  this.setTo(int);
});

When("I add {int}", function (int) {
  this.sum(int);
});

Then("the variable result of sum should be {int}", function (int) {
  assert.equal(this.variable, int);
});

//feature multiplication

Given("first param of multiplication set to {int}", function (int) {
  this.setTo(int);
});

When("I multiply {int}", function (int) {
  this.multiplication(int);
});

Then("the variable result of multiplication should be {int}", function (int) {
  assert.equal(this.variable, int);
});
