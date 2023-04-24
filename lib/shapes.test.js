const shapes = require("./shapes");

describe('shapes', () => {
    test('The triangle needs to return the correct color specified by the user.', ()=>{
        const shapeColor = '#00ff00';
        const desiredColor = shapes.triangle.svg(shapeColor);
        const presumedColor = `<polygon points="150,10 290,150 10,150" fill="${shapeColor}"/>`;
        expect(desiredColor).toBe(presumedColor);
    });
    test('The square needs to return the correct color specified by the user.', ()=>{
        const shapeColor = '#0000ff';
        const desiredColor = shapes.square.svg(shapeColor);
        const presumedColor = `<rect x="5" y="5" width="290" height="190" fill="${shapeColor}"/>`;
        expect(desiredColor).toBe(presumedColor);
    });
    test('The circle needs to return the correct color specified by the user.', ()=>{
        const shapeColor = '#ff0000';
        const desiredColor = shapes.circle.svg(shapeColor);
        const presumedColor = `<circle cx="150" cy="100" r="90" fill="${shapeColor}"/>`;
        expect(desiredColor).toBe(presumedColor);
    });
});