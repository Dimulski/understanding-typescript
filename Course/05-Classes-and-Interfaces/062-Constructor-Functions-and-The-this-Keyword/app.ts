class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department, cool: string) {
    console.log("Department: " + this.name + " " + cool);
  }

  doTheThing() {
    console.log("Do the thing: ");
  }
}

const accounting = new Department("Accounting");

accounting.describe("cool");

const accountingCopy = {
  name: "DUMMY",
  describe: accounting.describe,
  doTheThing: () => {},
};

accountingCopy.describe("cool");
