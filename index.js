const inquirer = require('inquirer');
const generateHTML = require('./src/htmlgeneration');
// const Employee = require('./lib/employees');
// const Manager = require('./lib/manager');
// const Engineer = require('./lib/engineer');
// const Intern = require('./lib/intern');
// Node v10+ includes a promises module as an alternative to using callbacks with file system methods.
const {writeFile} = require('fs');
// const fs = require ('fs')
const teamArray = [];


const createEmployee = () => {
  return inquirer
    .prompt([
      {
        type: 'list',
        message: 'What is the role of this employee?',
        name: 'role',
        choices: ['manager', 'engineer', 'intern', 'no more needed'],
      },
      // {
      //   type: 'input',
      //   name: 'name',

      // },
      // {
      //   type: 'input',
      //   name: 'employee id'

      // },
      // {
      //   type: 'input',
      //   name: 'employee email',

      // },
    ])
  
    .then((getRole) => {
      switch (getRole.role) {
        // case Employee: createEmployee()
        // break;
        case 'manager':
          createManager();
          break;
        case 'engineer':
          createEngineer();
          break;
        case 'intern':
          createIntern();
          break;
        default:
          generateHTML();
      }
    })
  }
const createManager = () => {
  inquirer.prompt([
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
    {
      type: 'input',
      name: 'office number',
    },
  ])
}
const createEngineer = () => {
  inquirer.prompt([
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
    {
      type: 'input',
      name: 'github',
    },
  ])
}
const createIntern = () => {
   inquirer.prompt([
    {
      type: 'input',
      name: "name",
    },
    {
      type: 'input',
      name: 'id',
    },
    {
      type: 'input',
      name: 'email',
    },
    {
      type: 'input',
      name: 'school',
    },
  ])

 .then(employeesData => {
  // data for employee types

  let { name, id, email, role, github, school, officeNumber, addEmployee } = employeesData;
  let employee;

  if (role === "engineer") {
      employee = new Engineer (name, id, email, github);

      console.log(employee);

  } else if (role === "intern") {
      employee = new Intern (name, id, email, school);

      console.log(employee);
  } else if (role === "manager"){
  employee = new Manager (officeNumber, name, id, email );
  }
  teamArray.push(employee);

  if (addEmployee) {
      return addEmployee(teamArray);
  } else {
      return teamArray;
  }
})
     
};
   


const init = () => {
  createEmployee()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((employeesData) =>
      writeFile('./dist/index.html', generateHTML(employeesData))
    )
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init()
// .then ((employeeData) => {
// const filename = `${employeeData.name.toLowerCase().split(' ').join(' ')}.json`;
// fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!'))
// })

//  .then(employeeData => {
//   // data for employee types

//   let { name, id, email, role, github, school, officeNumber, addEmployee } = employeeData;
//   let employee;

//   if (role === "Engineer") {
//       employee = new Engineer (name, id, email, github);

//       console.log(employee);

//   } else if (role === "Intern") {
//       employee = new Intern (name, id, email, school);

//       console.log(employee);
//   } else if (role === "Manager"){
//   employee = new Manager (officeNumber, name, id, email );
//   }
//   teamArray.push(employee);

//   if (addEmployee) {
//       return addEmployee(teamArray);
//   } else {
//       return teamArray;
//   }

