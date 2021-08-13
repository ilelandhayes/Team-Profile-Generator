
function generateHTML(data) {

    let markdown = `
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
        <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header"></div>
        <div class="card-body">
            <h5 class="card-title">Dark card title</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
            </ul>
        </div>
    </div>


    
    </body>
    `;

    return markdown;
}

module.exports = generateHTML;