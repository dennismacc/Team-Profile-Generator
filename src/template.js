function manager(allEmployees) {
  return allEmployees
    .filter((employee) => {
      return employee.getRole() === "Manager";
    })
    .map((managerCard) => {
      return `<div class="card" style="width: 18rem;">
          <div class="card-body header">
            <h5 class="card-title">${managerCard.name}</h5>
            <p class="card-text">${managerCard.getRole()}</p>
          </div>
          <div class="card-body">
          <ul class="list-group list-group-flush">
          <li class="list-group-item">Id: ${managerCard.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${
            managerCard.email
          }">${managerCard.email}</a></li>
          <li class="list-group-item">Office Number: ${
            managerCard.officeNumber
          }</li>
        </ul>
          </div>
        </div>`;
    })
    .join("");
}

function engineer(allEmployees) {
  return allEmployees
    .filter((employee) => {
      return employee.getRole() === "Engineer";
    })
    .map((engineerCard) => {
      return `<div class="card" style="width: 18rem;">
        <div class="card-body header">
          <h5 class="card-title">${engineerCard.name}</h5>
          <p class="card-text">${engineerCard.getRole()}</p>
        </div>
        <div class="card-body">
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: ${engineerCard.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${
          engineerCard.email
        }">${engineerCard.email}</a></li>
        <li class="list-group-item">Github Username: <a href="https://github.com/${
          engineerCard.github
        }" target="_blank">${engineerCard.github}</a></li>
      </ul>
        </div>
      </div>`;
    })
    .join("");
}

function intern(allEmployees) {
  return allEmployees
    .filter((employee) => {
      return employee.getRole() === "Intern";
    })
    .map((internCard) => {
      return `<div class="card" style="width: 18rem;">
        <div class="card-body header">
          <h5 class="card-title">${internCard.name}</h5>
          <p class="card-text">${internCard.getRole()}</p>
        </div>
        <div class="card-body">
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: ${internCard.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${
          internCard.email
        }">${internCard.email}</a></li>
        <li class="list-group-item">School: ${internCard.school}</li>
      </ul>
        </div>
      </div>`;
    })
    .join("");
}

function generateTeam(allEmployees) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-responsive.min.css">
      <link rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-responsive-responsive.min.css">
      <title>Team Generator</title>
  </head>
  <body>
  <header>
  <h1> My Team </h1>
  </header>
  <main class="cardContainer">
  ${manager(allEmployees)}
  ${engineer(allEmployees)}
  ${intern(allEmployees)}
  </main>  
  </body>
  </html>`;
}

module.exports = generateTeam;
