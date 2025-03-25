import { HashMap } from "./hashmap";

function getRandomString(length) {
    return Math.random().toString(36).substring(2, 2 + length);
}

let map = new HashMap();

for(let i=0;i<10;i++){
    map.set(getRandomString(4),getRandomString(6));
}
map.set("aii","programmer");
console.log(map.get("aii"));
console.log(map.has("aii"));


map.show();