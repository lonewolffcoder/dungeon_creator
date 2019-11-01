// procedural dungeon generator

class World {

    constructor(width,height) {
        this.width = width;
        this.height = height;
        this.world = [];
        for (let row=0;row<this.height;row++) {
            this.world.push(new Array(this.width).fill(0));
        }
    }

};

module.exports = World;