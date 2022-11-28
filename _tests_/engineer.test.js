const  Engineer = require("../lib/engineer")

it ('test new Engineer', () => {
  
  const testGithub = new Engineer ('Engineer', 1220, "test@gmail.com", 'TestGithub')

  expect (testGithub.getGithub()).toEqual('TestGithub')
})
it ('test Engineer', () => {
  const testRole = new Engineer ('Engineer', 1220, "test@gmail.com")

  expect (testRole.getRole()).toEqual('Engineer')
})
