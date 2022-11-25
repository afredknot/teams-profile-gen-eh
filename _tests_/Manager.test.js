const  Manager = require("../lib/manager")

it ('test new Manager', () => {
  
  const testOfficeNumber = new Manager ('Manager', 1220, "test@gmail.com", 12)

  expect (testOfficeNumber.getOfficeNumber()).toEqual(12)
})

it ('test new Manager', () => {
  
  const testRole = new Manager ('Manager', 1220, "test@gmail.com")

  expect (testRole.getRole()).toEqual('Manager')
})
