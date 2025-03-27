import { HashMap } from "./hashmap";

function getRandomString(length) {
    return Math.random().toString(36).substring(2, 2 + length);
}

const test = new HashMap();


// for(let i=0;i<26;i++){
//     map.set(getRandomString(4),getRandomString(6));
// }

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('lion','magenta')
test.set('moon','silver')

test.show();