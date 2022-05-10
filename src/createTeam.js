const createTeam = (team) => {

const html = [];

const printManager = manager => {
    let managerHTML = `
    <div class="card align-items-center bg font-weight-bold" style="width: 100%;">
                <div class="card-header bg-primary">
               ${manager.name} <br/>
               <i class="fas fa-mug-hot"></i>Manager</div>
               <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">/a></span></li>
                <li class="list-group-item">Manager Office Number: ${manager.officeNumber} </li>
                </ul>
            </div>
            `;
            html.push(managerHTML);
}

const printEngineer = engineer => {
    let engineerHTML = `
    <div class="card align-items-center bg font-weight-bold" style="width: 100%;">
                <div class="card-header bg-primary">
               ${engineer.name} <br/>
               <i class="fas fa-mug-hot"></i>Engineer</div>
               <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}</a></span></li>
                li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></li>
                </ul>
            </div>
            `;
            html.push(engineerHTML);
}

const printIntern = intern => {
    let internHTML = `
    <div class="card align-items-center bg font-weight-bold" style="width: 100%;">
                <div class="card-header bg-primary">
               ${intern.name} <br/>
               <i class="fas fa-user-gr"></i>Intern</div>
               <ul class="list-group list-group-flush">
               <li class="list-group-item">ID: ${intern.id}</li>
                <li<li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
                <li class="list-group-item">School: ${intern.school}</li> class="list-group-item">ID: ${intern.id}</li>
                
                </ul>
            </div>
            `;
            html.push(internHTML);
}

// create a loop to determine employee type

for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
        printManager(team[i]);
    }
    if (team[i].getRole() === "Engineer") {
        printEngineer(team[i]);
    }
    if (team[i].getRole() === "Intern") {
        printIntern(team[i]);
    }
}

// combine employee html 
return html.join('');

}  //end of createTeam

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/1e0a13a89f.js" crossorigin="anonymous"></script>
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
        <h1 class="text-center bg-danger text-white">My Team</h1>
        </header>
    
        
    <main> ${createTeam(team)} </main>
     
    </body>
    </html>    
    `;
}
