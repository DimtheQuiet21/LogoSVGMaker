const fs = require('fs');

function createDoc(section) {
    const shapehtml =     
`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Logo Maker</title>
        <link rel="stylesheet" href="./lib/style.css" />
    </head>
    <body>
        <div class="card">
        ${section}
        </div>
    </body>
    </html>
    `;

    fs.writeFile('./examples/logo.svg',section, (err) => {
        if (err) throw err;
        console.log('Generated logo.svg')
    });
    fs.writeFile('./examples/logo.html', shapehtml,(err) => {
        if (err) throw err;
        console.log('Generated logo.html');
    });
}

module.exports = { createDoc };
