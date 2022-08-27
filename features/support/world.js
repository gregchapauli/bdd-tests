const { setWorldConstructor } = require("@cucumber/cucumber");

class CustomWorld {
  constructor() {
    this.variable = 0;
  }
  setTo(number) {
    this.variable = number;
  }
  IncrementBy(number) {
    this.variable += number;
  }
}

setWorldConstructor(CustomWorld);
