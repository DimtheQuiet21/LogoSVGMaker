const Square = require('./square.js');
const square = new Square ("Square"); 
const Circle = require('./circle.js');
const circle  = new Circle ("Circle"); 
const Trangle = require('./triangle.js');
const triangle = new Trangle ("Triangle"); 

test('the square is a square', () => { 
    return square.get_logo().then(() => {
        console.log("await over");
        let color_passer = true;
        let text_passer = true

        if (square.color === 'red'||'orange'||'yellow'||'green'||'blue'||'purple'||'brown'||'white'||'grey'||'black') {
            color_passer = true;
        } else {
            color_passer = false;
        }

        if (square.text_color === 'red'||'orange'||'yellow'||'green'||'blue'||'purple'||'brown'||'white'||'grey'||'black') {
            text_passer = true;
        } else {
            text_passer = false;
        }

        expect(square.shape).toBe("Square");
        expect(square.logo.length).toBeLessThanOrEqual(3);
        expect(color_passer).toBe(true);
        expect(text_passer).toBe(true);
    });
},10000);

test('the circle is a circle', () => { 
    return circle.get_logo().then(() => {
        console.log("await over");
        let color_passer = true;
        let text_passer = true

        if (circle.color === 'red'||'orange'||'yellow'||'green'||'blue'||'purple'||'brown'||'white'||'grey'||'black') {
            color_passer = true;
        } else {
            color_passer = false;
        }

        if (circle.text_color === 'red'||'orange'||'yellow'||'green'||'blue'||'purple'||'brown'||'white'||'grey'||'black') {
            text_passer = true;
        } else {
            text_passer = false;
        }

        expect(circle.shape).toBe("Circle");
        expect(circle.logo.length).toBeLessThanOrEqual(3);
        expect(color_passer).toBe(true);
        expect(text_passer).toBe(true);
    });
},10000);

test('the triangle is a triangle', () => { 
    return triangle.get_logo().then(() => {
        console.log("await over");
        let color_passer = true;
        let text_passer = true

        if (triangle.color === 'red'||'orange'||'yellow'||'green'||'blue'||'purple'||'brown'||'white'||'grey'||'black') {
            color_passer = true;
        } else {
            color_passer = false;
        }

        if (triangle.text_color === 'red'||'orange'||'yellow'||'green'||'blue'||'purple'||'brown'||'white'||'grey'||'black') {
            text_passer = true;
        } else {
            text_passer = false;
        }

        expect(triangle.shape).toBe("Triangle");
        expect(triangle.logo.length).toBeLessThanOrEqual(3);
        expect(color_passer).toBe(true);
        expect(text_passer).toBe(true);
    });
},10000);
