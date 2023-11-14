const Circle = require('./circle.js');
const circle  = new Circle ("Circle"); 


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


