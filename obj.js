// output world as an OBJ file
const World = require('./world.js');
const fs = require('fs');

class OBJFileWriter {

    constructor(world, filename) {
        this.filename = filename;
        this.world = world;
        this.vertices = [];
        this.faces = [];
    }

    getNextVertexNumber() {
        return this.vertices.length+1;
    }

    getNextFaceNumber() {
        return this.faces.length+1;
    }

    addVertex(x,y,z) {
        this.vertices.push([x,y,z]);
    }

    addFace(v1,v2,v3,v4) {
        this.faces.push([v1,v2,v3,v4]);
    }

    render() {
        for (let row=0;row<this.world.height; row++) {
            for (let col=0;col<this.world.width; col++) {
                if (this.world.getCellAt(row,col)===1) {
                    this.addFloorTile(row,col);
                }
            }
        }
    }

    addFloorTile(row,col) {
        let minx = parseFloat(row);
        let miny = parseFloat(col);
        let maxx = parseFloat(row+1);
        let maxy = parseFloat(col+1);
        let v1 = this.getNextVertexNumber();
        let v2 = v1+1;
        let v3 = v1+2;
        let v4 = v1+3;
        this.addVertex(minx,miny,0);
        this.addVertex(maxx,miny,0);
        this.addVertex(maxx,maxy,0);
        this.addVertex(minx,maxy,0);
        let nextFace = this.getNextFaceNumber();
        this.addFace(v1,v2,v3,v4);
    }

    dumpObjFile() {
        let lines = [];
        for (var vertex of this.vertices) {
            lines.push(`v ${vertex[0]} ${vertex[1]} ${vertex[2]}`);
        }
        for (var face of this.faces) {
            lines.push(`f ${face[0]} ${face[1]} ${face[2]} ${face[3]}`);
        }
        const mondo = lines.join("\n");
        fs.writeFile(this.filename, mondo,  function(err) {console.log("Done");})
    }

};

module.exports = OBJFileWriter;