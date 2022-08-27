//import { Given, When, Then } from "@cucumber/cucumber";
const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert").strict;

Given("a variable set to {int}", function (number) {});
When("I increment the variable by {int}", function (number) {});
Then("the variable should be {int}", function (number) {});
