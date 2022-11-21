it ('test if employee is an object', () => {
  const testName = new Employee (paul, 1220, "test@gmail.com")

  expect (typeof(testEmployee)).toEqual('object')
})