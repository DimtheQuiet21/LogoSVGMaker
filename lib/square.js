const inquirer = require('inquirer');
const Shape = require('./shape.js');
const {createDoc} = require('./createDoc.js');

class Square extends Shape {

    constructor (text_color, logo, color) {
        super(text_color,logo,color)
        this.INNERHTML = ``;
    }
    render() {
        this.INNERHTML = 
        `
        <svg height="200" width = "300">
            <polygon points="50,0 50,200 250,200 250,0" style = "fill: ${this.color}; stroke-width:3"/>
            <text x = "150" y = "125" text-anchor = "middle" fill = "${this.text_color}" font-size = "80">${this.logo[0]}</text>
        </svg>`
        return new Promise (() => createDoc(this.INNERHTML));
    }
}

module.exports = Square;