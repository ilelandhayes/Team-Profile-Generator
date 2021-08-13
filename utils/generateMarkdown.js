const managerCard = (managerArray) => {
    let card = `
    <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">
            <div class="card-body">
                <h5 class="card-title">${manager.name}</h5>
                    <p class="subtitle has-text-weight-bold is-6 has-text-dark">
                        Manager
                    </p>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: ${manager.email}</li>
                    <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>
    `;
    return card;
}

const internCard = (internArray) => {
    let card = `
    <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">
            <div class="card-body">
                <h5 class="card-title">${intern.name}</h5>
                    <p class="subtitle has-text-weight-bold is-6 has-text-dark">
                        Manager
                    </p>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">Email: ${intern.email}</li>
                    <li class="list-group-item">Office Number: ${intern.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>
    `;
    return card;
}

const engineerCard = (engineerArray) => {
    let card = `
    <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">
            <div class="card-body">
                <h5 class="card-title">${engineer.name}</h5>
                    <p class="subtitle has-text-weight-bold is-6 has-text-dark">
                        Manager
                    </p>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">Email: ${engineer.email}</li>
                    <li class="list-group-item">Office Number: ${engineer.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>
    `;
    return card;
}




const generateHTML = (managerArray, internArray, engineerArray) => {

    return `
        <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
      <title>Team Profile</title>
    </head>

    <header>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">My Team</span>
            </div>
        </nav>
    </header>

    <body>
        <div class="hero-body">
            <div class="columns">
                <div class="column">
                    ${managerCard(managerArray)}
                <div class="column">
                    ${engineerCard(engineerArray)}
                <div class="column">
                    ${internCard(internArray)}
            </div>
        </div>


    
    </body>
    </html>
    `;

}

module.exports = generateHTML;