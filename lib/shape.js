
const inquirer = require('inquirer');
const jest = require('jest');


class Shape {
    constructor () {
        this.text_color=[];
        this.shape = [];
        this.logo =[];
        this.color = [];
    }

    check_logo(input) {
        if (input.length > 3) {
            console.log(new Error ("Logos must be 3 letters or less"));
            this.get_logo();
            ;
        } else {
            this.logo.push(input);
            return new Promise(() => {this.get_color()})
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
            this.shape.push(response.shape);
            this.color.push(response.color);
            return new Promise (() => this.render())
        })
    }

    get_logo(){      
        return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your Logo? (three letters max!)',
            name: 'logo',
        }
        ]).then((response) => this.check_logo(response.logo))
    }

    render() {
        throw new Error (" Valid shape must be selected!")
    }
}




module.exports = Shape;