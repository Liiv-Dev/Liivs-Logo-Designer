// shapes.js

// Class creates circle svg
class Circle {
    constructor(fillColor) {
        this.fillColor = fillColor;
    }

    generateSVG() {
        return `<circle cx="150" cy="100" r="80" fill="${this.fillColor}" />`;
    }
    }

// Class creates square svg
class Square {
    constructor(fillColor) {
        this.fillColor = fillColor;
    }

    generateSVG() {
        return `<rect x="70" y="30" width="200" height="200" fill="${this.fillColor}" />`;
    }
    }

// Class creates triangle svg
class Triangle {
    constructor(fillColor) {
        this.fillColor = fillColor;
    }

    generateSVG() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.fillColor}" />`;
    }
    }

    module.exports = { Circle, Square, Triangle };
