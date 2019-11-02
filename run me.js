const World = require('./world.js');
const OBJFileWriter = require('./obj.js');

// make dungeon
let w = new World(100,100);
while (w.rooms<50) {
    w.placeRoom();
}
w.placeDoors();

// dump as ASCII text
let q = w.dumpAscII();
for (let line of q) {
    console.log(line);
};

// write to an OBJ file for Blender
// You want to import with X forward, Z up.

let obj = new OBJFileWriter(w, '/tmp/foo.obj');
obj.render();
obj.dumpObjFile();