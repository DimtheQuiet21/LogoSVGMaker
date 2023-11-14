const Square = require('./square.js');
const square = new Square ("Square"); 


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
