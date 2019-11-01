const World = require('./world.js');

let w = new World(100,100);
for (let i=0;i<200;i++) {
    w.placeRoom();
}
let q = w.dumpAscII();
for (let line of q) {
    console.log(line);
}