const src = require('fs');

const createEmployee = require('./src/createEmployee');

function init() {
    createEmployee.createManager();
}

init();