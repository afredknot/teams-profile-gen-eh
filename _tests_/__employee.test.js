

const Employee = require("../lib/employees");


    it ("test if employee is an object", () => {
      const TestEmployees = new Employee("paul", 1220, "test@gmail.com")
    
      expect(typeof(TestEmployees)).toEqual('object');
    });

    it ('test employee name', () => {
      const TestEmployees = new Employee('paul',1229,'test@gmail.com')

      expect((TestEmployees.name)).toEqual('paul');
    })
    it ('test employee id', () => {
      const TestEmployees = new Employee('paul',1229,'test@gmail.com')

      expect((TestEmployees.id)).toEqual(1229)
    })
    it ('test employee email', () => {
      const TestEmployees = new Employee('paul',1229,'test@gmail.com')

      expect((TestEmployees.email)).toEqual('test@gmail.com')
    });
    it ('test employee getEmail()', () => {
      const TestEmployees = new Employee('paul',1229,'test@gmail.com')

      expect(TestEmployees.getEmail()).toEqual('test@gmail.com')
    });it ('test employee getId()', () => {
      const TestEmployees = new Employee('paul',1229,'test@gmail.com')

      expect(TestEmployees.getId()).toEqual(1229)
    });it ('test employee getRole()', () => {
      const TestEmployees = new Employee('Paul',1229,'test@gmail.com')

      expect(TestEmployees.getRole()).toEqual('Employee')
    });
    it ('test employee getName()', () => {
      const TestEmployees = new Employee('paul',1229,'test@gmail.com')

      expect(TestEmployees.getName()).toEqual('paul')
    });