const World = require('./world.js');

let w = new World(100,100);
while (w.rooms<30) {
    w.placeRoom();
}
let q = w.dumpAscII();
for (let line of q) {
    console.log(line);
}