const fs = require('fs');
const fsPromises = require('node:fs/promises')

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

    
    fsPromises.writeFile('./examples/logo.svg',section, (err) => {
        if (err) throw new Error ("SVG did not save Properly");
        console.log('Generated logo.svg')
    });
    fsPromises.writeFile('./examples/logo.html', shapehtml,(err) => {
        if (err) throw new Error ("HTML did not save Properly");
        console.log('Generated logo.html')
    });
    
}

module.exports = { createDoc };
