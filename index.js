const inquirer = require('inquirer');
const generateHTML = require('./src/htmlgeneration');
// const Employee = require('./lib/employees')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern');
// Node v10+ includes a promises module as an alternative to using callbacks with file system methods.
const { writeFile } = require('fs').promises;
// const fs = require ('fs')
const teamArray = [];

const createEmployee = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
     
    },
    {
      type: 'input',
      name: 'employee id'
      
    },
    {
      type: 'input',
      name: 'employee email',
    
    },
      {
        type: 'list',
        name: 'role',
        message: 'What is the role of this employee?',
        choices: ['manager', 'engineer', 'intern', 'no more needed']
  
       }
])};
    const createManager = () =>{
     return inquirer.prompt([
        {
        type: 'input',
        name: 'office number',
  
        },
        {
        type: 'input',
        name: 'name',
   
        
      },
      {
        type: 'input',
        name:  'id',
     
        
      },
      {
        type: 'input',
        name: 'email',
      
      },
      
      ])
    };
   const createEngineer = () => { 
    return inquirer.prompt ([
      {
        type: 'input',
        name: 'github',
    },
    {
    type: 'input',
    name: 'name',
  },
  {
    type: 'input',
    name: 'id',
  },
  {
    type: 'input',
    name: 'email',
  },
    ])
   }
     const createIntern = () => {
       inquirer.prompt ([
      {
        type: 'input',
        name: 'school',
      },
      {
      type: 'input',
      name: 'name',
      },
    {
      type: 'input',
      name: 'id',
    
    },
    {
      type: 'input',
      name: 'email',
  
    }
    ])
 
 .then (getRole => {
  switch (role.inputs){
    case Employee: createEmployee()
    break;
  case Manager: createManager()
  break;
  case Engineer: createEngineer()
    break;
  case Intern: createIntern()
  break;
  default : generateHTML()
  };
 })

 .then(employeeData => {
  // data for employee types 

  let { name, id, email, role, github, school, officeNumber, addEmployee } = employeeData; 
  let employee; 

  if (role === "Engineer") {
      employee = new Engineer (name, id, email, github);

      console.log(employee);

  } else if (role === "Intern") {
      employee = new Intern (name, id, email, school);

      console.log(employee);
  } else if (role === "Manager"){
  employee = new Manager (officeNumber, name, id, email );
  }
  teamArray.push(employee); 

  if (addEmployee) {
      return addEmployee(teamArray); 
  } else {
      return teamArray;
  }
});
     }


 const init = () => {
  createEmployee()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((teamArrray) => writeFile('./dist/index.html', generateHTML(teamArray)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
 }

init();
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
