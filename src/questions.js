const managerQuestions = [
    { 
       type: 'input',
       name: 'managerName',
       message: 'What is the managers name?',
    },
    {
        type: "input",
        name: "managerId",
        message: "What is the team manager's id?"
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager's office number?"
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: `What is the engineer's name?`,
    },
    {
        type: 'input',
        name: 'engineerId',
        message: `What is the engineer's id?`,
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: `What is the engineer's email?`,
    },
    {
        type: 'input',
        name: 'github',
        message: `What is the engineer's Github username?`,
    },
]

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: `What is the intern's name?`,
    },
    {
        type: 'input',
        name: 'internId',
        message: `What is the intern's id?`,
    },
    {
        type: 'input',
        name: 'internEmail',
        message: `What is the intern's email?`,
    },
    {
        type: 'input',
        name: 'school',
        message: `What is the intern's school?`,
    },
]

const addMoreEmployees = {
    type: 'list',
    name: 'addMore',
    message: 'Would you like to add more employees?',
    choices: ['Add another Manager', 'Add another Engineer', 'Add another Intern', 'Exit']
}

module.exports = {
    managerQuestions,
    engineerQuestions,
    internQuestions,
    addMoreEmployees,
}
