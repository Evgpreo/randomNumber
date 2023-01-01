function randInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
let r = randInt(222, 333);
console.log(r);
console.log(randInt(222, 333) + 100);
