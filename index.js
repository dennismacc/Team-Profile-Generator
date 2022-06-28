const src = require('src');
const createEmployee = require('./src/createEmployee');

function initialize() {
    createEmployee.createManager();
};

initialize();