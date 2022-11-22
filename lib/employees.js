class Employee {
  constructor(name, id, email) {
    
    this.name = name;
    this.id = id;
    this.email = email;
    
  }

  getName(){
    return this.name
  }

  getId(){
    return this.id
  }

  getEmail(){
    return this.email
  }
  getRole(){
    return 'employee'
  }

  printInfo() {
    console.log(`This Employee's name is ${this.name} `);
    console.log(`This Employee's id is ${this.id}`);
  }
}
module.exports = Employee;