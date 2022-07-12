const inquirer = require("inquirer");
const questions = require("./questions");
const startHTML = require("./template");

const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const allEmployees = [];

function createManager() {
  inquirer.prompt(questions.managerQuestions).then((answers) => {
    const manager = new Manager(
      answers.managerName,
      answers.managerId,
      answers.managerEmail,
      answers.officeNumber
    );
    allEmployees.push(manager);
    addNew();
  });
}

function createEngineer() {
  inquirer.prompt(questions.engineerQuestions).then((answers) => {
    const engineer = new Engineer(
      answers.engineerName,
      answers.engineerId,
      answers.engineerEmail,
      answers.github
    );
    allEmployees.push(engineer);
    addNew();
  });
}

function createIntern() {
  inquirer.prompt(questions.internQuestions).then((answers) => {
    const intern = new Intern(
      answers.internName,
      answers.internId,
      answers.internEmail,
      answers.internNumber
    );
    allEmployees.push(intern);
    addNew();
  });
}

function addNew() {
  inquirer.prompt(questions.addMoreEmployees).then((answers) => {
    switch (answers.addMore) {
      case "Manager":
        createManager();
        break;
      case "Engineer":
        createEngineer();
        break;
      case "Intern":
        createIntern();
        break;
      case "Exit":
        startHTML.startHTML(allEmployees);
        break;
      default:
        console.log(`${allEmployees} are present`);
    }
  });
}

module.exports = { 
    createManager,
    createEngineer,
    createIntern,
    addNew,
};