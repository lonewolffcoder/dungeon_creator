const World = require('./world.js');
const OBJFileWriter = require('./obj.js');


let w = new World(100,100);
while (w.rooms<50) {
    w.placeRoom();
}
w.placeDoors();
let q = w.dumpAscII();
for (let line of q) {
    console.log(line);
};

let obj = new OBJFileWriter(w, '/tmp/foo.obj');
obj.render();
obj.dumpObjFile();