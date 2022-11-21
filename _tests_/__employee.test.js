

const Employee = require("../lib/employees");


    it ("test if employee is an object", () => {
      const TestEmployees = new Employee("paul", 1220, "test@gmail.com")
    
      expect(typeof(TestEmployees)).toEqual('object');
    })



   
    // it("should print the nam of employee", () => {
    //  const name = 'gary'
    //   const employee = new Employee(name);

    //   // TODO: Add a comment describing the purpose of the following statements
    //   expect(employee.name).toEqual(gary);
    //   expect(employee.id).toEqual();
 
