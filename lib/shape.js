
const inquirer = require('inquirer');



class Shape {
    constructor (shape) {
        this.shape = shape;
        this.text_color=[];
        this.logo =[];
        this.color = [];
    }

    get_logo(){      
        return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your Logo? (three letters max!)',
            name: 'logo',
        }
        ])
        .then((response) => {
            return this.check_logo(response.logo);
                // console.log("RETURN Line 25 Shape.js");
                // return
        })
    }

    check_logo(input) {
        if (input.length > 3) {
            console.log(new Error ("Logos must be 3 letters or less"));
            this.get_logo();
            ;
        } else {
            this.logo.push(input);
            return this.get_color();
                // console.log("RETURN Line 39 Shape.js");
                // return    
        };
    };

    get_color(){
        return inquirer.prompt([
            {
                type: 'list',
                message: 'Pick your text color!',
                choices: ['red','orange','yellow','green','blue','purple','brown','white','grey','black'],
                name: 'text_color',
            },
            {
                type: 'list',
                message: 'Pick your shape color!',
                choices: ['red','orange','yellow','green','blue','purple','brown','white','grey','black'],
                name: 'color',
            }
        ]).then((response)=>{
            this.text_color.push(response.text_color);
            this.color.push(response.color);
            return this.render();
                // console.log("RETURN Line 63 Shape.js");
                // return
        })
    }

    render() {
        throw new Error (" Valid shape must be selected!")
    }
}

module.exports = Shape;