const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');


class Shape_Prompt {
    constructor () {
    this.shape = [];
    this.logo =[];
    this.color = [];
    }

    check_logo(input) {
        if (input.length > 3) {
            new Error ("Logos must be 3 letters or less")
            this.get_logo();
            ;
        } else {
            this.logo.push(input);
            return new Promise(() => {this.get_shape()})
         };
    };

    get_shape(){
        return inquirer.prompt([
            { 
                type:'list',
                message: 'What is your shape?',
                choices:['Circle','Triangle','Square'],
                name: 'shape',
            },
            {
                type: 'list',
                message: 'Pick your color!',
                choices: ['red','orange','yellow','green','blue','purple','brown','white','grey','black'],
                name: 'color',
            }
        ]).then((response)=>{
            this.shape.push(response.shape);
            this.color.push(response.color);
        })
    }

    get_logo(){      
        return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your Logo? (three letters max!)',
            name: 'logo',
        }
        ]).then((response) => this.check_logo(response))
    }
}



class Triangle extends Shape_Prompt {
    constructor () {
    }
    render() {

    }
}

module.exports = Shape_Prompt, Triangle;