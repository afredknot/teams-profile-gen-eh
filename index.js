const inquirer = require('inquirer');
const generateHTML = require('./src/htmlgeneration');
// const Employee = require('./lib/employees');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const {writeFile} = require('fs');



const createManager = () => {
  return inquirer.prompt([
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
  .then(
    ({ name, id, email, officeNumber}) =>
    new Manager(name, id, email, officeNumber)
    );
  };
  const createEngineer = () => {
    return inquirer.prompt([
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
  .then(
    ({ name, id, email, github}) =>
    new Engineer(name, id, email, github)
    );
}
const createIntern = () => {
  return inquirer.prompt([
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
  .then(
    ({ name, id, email, school}) =>
    new Intern(name, id, email, school)
    );
};

const getRole = () => {
  return inquirer.prompt ([
   {
    type: "list",
   message: "What is this employees role?",
   name: 'role',
   choices: ["Manager", "Engineer", "Intern", "no more needed"]}
  ])};
     
  
  const addEmployee = (teamArray) =>{
       return getRole().then (({role}) => {
        if(role === 'no more needed') {
          return teamArray;
        }
        switch(role) {
          case "Manager":
            return createManager().then((newEmployee) => {
              teamArray.push(newEmployee);
              return addEmployee(teamArray);
            });
          case "Engineer":
            return createEngineer().then((newEmployee) => {
              teamArray.push(newEmployee);
              return addEmployee(teamArray);
            });
          case "Intern":
            return createIntern().then((newEmployee) => {
              teamArray.push(newEmployee);
              return addEmployee(teamArray);
            });
          }
      });
    };
    const createEmployee = () => {
      return addEmployee ([ ])
    };
    
    
    const init = () => {
      createEmployee()
        // Use writeFile method imported from fs.promises to use promises instead of
        // a callback function
        .then((employeesData) => {
          return writeFile(
            "./dist/index.html",
            generateHTML(employeesData),
            (err) => {
              if (err) {
                console.log(err);
              }
            }
          );
        })
        .then(() => console.log("Successfully wrote to index.html"))
        .catch((err) => console.error(err));
    };
    
    init();
