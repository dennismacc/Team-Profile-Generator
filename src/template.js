const createEmployee = require('./createEmployee');
const fs = require('fs');
const path = require('path');

function startHTML (allEmployees) {
    const HTML = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-responsive.min.css">
    <link rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-responsive-responsive.min.css">
    <title>Team Profile</title>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="panel">
                    <h1 class="panel-heading" id="team-profile-heading">Team Profile</h1>
                </div>
            </div>
        </div>
        <div class="row">
            ${allEmployees.map(employee => ` 
            <div class="col-md-12">
                <div class="panel body-content">
                    <h5 class="panel-title">${employee.name}</h5>
                    <h6 class="panel-subtitle">${employee.getRole()}</h6>
                    <p class="panel-text">${employee.id}</p>
                    <a href="#" class="panel-text">${employee.email}</a>
                    <p class="panel-text">${employee.officeNumber || employee.github || employee.school}</p>
                </div>
            </div>
            `).join('')}
        </div>
    </div>
</body>
</html>`

fs.writeFileSync(path.join(__dirname, '../dist/index.html'), html, 'utf-8');
}

module.exports.startHTML = startHTML;