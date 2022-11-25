const  Intern = require("../lib/intern")

it ('test new Intern', () => {
  
  const testschool = new Intern ('paul', 1220, "test@gmail.com", 'school')

  expect (testschool.getSchool()).toEqual('school')
})

it ('test new Intern', () => {
  
  const testRole = new Intern ('paul', 1220, "test@gmail.com")

  expect (testRole.getRole()).toEqual('paul')
})