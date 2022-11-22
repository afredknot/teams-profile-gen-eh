const inquirer = require('inquirer');
const generateHTML = require('./src/htmlgeneration');
const employee = require('./lib/employees')
const manager = require('./lib/manager')
const engineer = require('./lib/engineer')
const intern = require('./lib/intern');
const { resolveTestEnvironment } = require('jest-resolve');
// Node v10+ includes a promises module as an alternative to using callbacks with file system methods.
const { writeFile } = require('fs').promises;

// Use writeFileSync method to use promises instead of a callback function
const employeeArray = [];

const createEmployee = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the employee?',
      validate: name => {
        if (name) {
          return true;
        } else {
          console.log ('enter the name of the employee.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'employee id',
      message: 'what is the employees id?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('hey, you need to input the id of the employee');
        }
      }
    },
    {
      type: 'input',
      name: 'employeeEmail',
      message: 'What is the employees email address?',
      validate: nameInput => {
        if (nameInput){
          return true;
          } else {
            console.log('enter a valid email for the employee');
            return false;
        }
      }
    },
      {
        type: 'list',
        name: 'role',
        message: 'What is the roll of this employee?',
        choices: ['manager', 'engineer', 'intern', 'no more needed']
  
      },
    
])
     .then (function (input){
      switch (role.inputs){
      case 'manager': createManager()
      break;
      case 'engineer': createEngineer()
        break;
      case 'intern': createIntern()
      break;
      default : generateHTML()
      }
     })
         .then(employeeInput => {
      const { name, id, email } = employeeInput;
      const employee = new createEmployee (name, id, email)

      employeeArray.push(employee)
      console.log(employee)
    });
  }
function createEngineer(){ 
  inquirer.prompt ([
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
}
    // .then(engineerInput => {
    //   const {}
    // })


// const generateHTML = ({ name, location, github, linkedin }) =>
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${name}</h1>
//     <p class="lead">I am from ${location}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${github}</li>
//       <li class="list-group-item">LinkedIn: ${linkedin}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;
  

// Bonus using writeFileSync as a promise
const init = () => {
  createEmployee()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((answers) => writeFile('./dist/index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();
