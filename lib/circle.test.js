const Circle = require('./circle.js');
const circle  = new Circle ("Circle"); 


test('the circle is a circle', async () => {  
    await circle.get_logo();
    console.log("await over");
    let passer = true;
    if (circle.logo.length > 3) {
        passer = false;
    }
    expect(passer).toBe(true)
},20000);

// const drip = () => {return circle.get_logo()};
// console.log(drip());

// test('the circle is a circle', () => { 
//     return circle.get_logo().then(() => {
//         console.log("await over");
//         let passer = true;
//         if (circle.shape != "Circle") {
//             console.log(circle.shape);
//             passer = false;
//         }
//         if (circle.logo.length > 3) {
//             console.log(circle.logo);
//             passer = false;
//         }
//         if (circle.color != 'red'||'orange'||'yellow'||'green'||'blue'||'purple'||'brown'||'white'||'grey'||'black') {
//             console.log(circle.color);
//             passer = false;
//         }
//         expect(passer).toBe(true)
//         done();
//     });
// },10000);






        // circle.shape = "Circle";
        // circle.text_color = 'black'
        // circle.logo = "AFL"
        // circle.color = "white"
        // const svg = circle.render();
        // const passer = true;

        // if (circle.shape !== "Circle") {
        //     console.log(circle.shape)
        //     return passer = false;
        // };
        // if (circle.text_color != 'black') {
        //     console.log(circle.text_color)
        //     return passer = false;
        // };
        // if (circle.logo.length > 3){
        //     console.log(circle.logo)
        //     return passer = false;
        // };
        // if (svg !== `
        // <svg xmlns="http://www.w3.org/2000/svg" height="200" width = "300">
        //     <circle cx = "150" cy = "100" r = "100" style = "fill: ${circle.color}; stroke-width:3"/>
        //     <text x = "150" y = "125" text-anchor = "middle" fill = "${circle.text_color}" font-size = "80">${circle.logo}</text>
        // </svg>`) {
        //     console.log(circle.logo)
        //     console.log(svg);
        //     return passer = false;
        // };
        // expect(passer).toEqual(true);

