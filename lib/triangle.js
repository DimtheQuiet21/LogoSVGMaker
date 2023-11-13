const inquirer = require('inquirer');
const Shape = require('./shape.js');
const {createDoc} = require('./createDoc.js');

class Triangle extends Shape {

    constructor (text_color, logo, color) {
        super(text_color,logo,color)
        this.INNERHTML = ``;
    }
    render() {
        this.INNERHTML = 
        `
        <svg xmlns="http://www.w3.org/2000/svg" height="200" width = "300">
            <polygon points="150,10 46,190 254,190" style = "fill: ${this.color}; stroke-width:3"/>
            <text x = "150" y = "185" text-anchor = "middle" fill = "${this.text_color}" font-size = "70">${this.logo[0]}</text>
        </svg>`
        return new Promise (() => createDoc(this.INNERHTML));
    }
}

module.exports = Triangle;