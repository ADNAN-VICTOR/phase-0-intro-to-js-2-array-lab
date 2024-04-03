// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
 
function destructivelyAppendCat(){
    cats.push("Ralph")
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
}
function  destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(){
    const Newcats = [...cats, "Broom"];
    return Newcats;
}
function  prependCat(){
    const Newcats = ["Arnold",...cats,];
    return Newcats;
}
function removeLastCat() {
    const Newcats = [...cats];
    Newcats.pop();
    return Newcats;
}
function removeFirstCat() {
    const Newcats = [...cats];
    Newcats.shift();
    return Newcats;
}