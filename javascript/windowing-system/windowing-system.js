// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export function Size(width = 80, height = 60) {
    this.width = width;
    this.height = height
}

// add method via the prototype property of the constructor to take
// advantage of the prototype chain.
Size.prototype.resize = function(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
}; // else every instance of the object would have inherited the method instead
    // instead of just searching for it in its prototype. (and thus requiring more memory)

export function Position(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

Position.prototype.move = function(newX, newY) {
    this.x = newX;
    this.y = newY;
}

export class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size()
        this.position = new Position()
    }
}
