const svgShape = require('../lib/shapes');

test('renders a triangle with a specified color', () => {
    const data = {
        shape: 'triangle',
        shapeColor: 'blue',
        textColor: 'black',
        logoText: 'Test'
    };

    const expected = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="blue"/><text x="150" y="170" font-size="60" text-anchor="middle" fill="black">Test</text></svg>';

const result = svgShape(data).replace(/\s/g, '').trim(); // Removes all whitespace characters

expect(result).toEqual(expected);

});