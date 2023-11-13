
const inquirer = require('inquirer');
const Triangle = require('./lib/triangle.js');
const Square = require('./lib/square.js');
const Circle = require('./lib/circle.js');

const getshape = () => {
    inquirer.prompt([
        { 
            type:'list',
            message: 'What is your shape?',
            choices:['Circle','Triangle','Square'],
            name: 'shape',
        },
    ]).then((response) => { 
        if (response.shape === "Triangle") {
            console.log("getting triangle")
            const shape = new Triangle ();
            shape.get_logo();
        } 
        else if (response.shape === "Square") {
            console.log("getting square")
            const shape = new Square ();
            shape.get_logo();
        } 
        else if (response.shape === "Circle") {
            console.log("getting circle")
            const shape = new Circle ();
            shape.get_logo();
        } 
        else {
            throw new Error ("shape not acquired")    
        }
    })
};

const instruction = getshape();
//console.log(instruction);
//const shape_prompt = new Shape ();
//shape.get_logo();