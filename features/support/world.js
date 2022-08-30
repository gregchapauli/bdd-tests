//const { setWorldConstructor } = require("@cucumber/cucumber");
import { setWorldConstructor } from "@cucumber/cucumber";
import sum from "../sum";
import multiplication from "../multiplication";

class CustomWorld {
  constructor() {
    this.variable = 0;
  }
  setTo(number) {
    this.variable = number;
  }
  incrementBy(number) {
    this.variable += number;
  }
  sum(number) {
    this.variable = sum(this.variable, number);
  }
  multiplication(number) {
    this.variable = multiplication(this.variable, number);
  }
}

setWorldConstructor(CustomWorld);
