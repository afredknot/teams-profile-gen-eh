class Employee {
  constructor(name, id, email) {
    
    this.name = name;
    this.id = id;
    this.email = email;
  }
  

  printInfo() {
    console.log(`This Employee's name is ${this.name} `);
    console.log(`This Employee's id is ${this.id}`);
  }
}
module.exports = Employee;