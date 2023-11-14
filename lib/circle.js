const Shape = require('./shape.js');
const {createDoc} = require('./createDoc.js');

class Circle extends Shape {

    constructor (shape, text_color, logo, color) {
        super(shape, text_color,logo,color)
        this.INNERHTML = ``;
    }
    render() {
        this.INNERHTML = 
        `
        <svg xmlns="http://www.w3.org/2000/svg" height="200" width = "300">
            <circle cx = "150" cy = "100" r = "100" style = "fill: ${this.color}; stroke-width:3"/>
            <text x = "150" y = "125" text-anchor = "middle" fill = "${this.text_color}" font-size = "80">${this.logo}</text>
        </svg>`
        return createDoc(this.INNERHTML);
    }
}

module.exports = Circle;