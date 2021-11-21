// Write your solution here!


 
const cats =  ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name)
{
    const destructivelyAppendCat = cats.push("Ralph");
}

function destructivelyPrependCat(name)
{
    const destructivelyPrependCat = cats.unshift("Bob");
}

function destructivelyRemoveLastCat()
{
    const destructivelyRemoveLastCat = cats.pop()
}

function destructivelyRemoveFirstCat()
{
    const destructivelyRemoveFirstCat = cats.shift();
}

function appendCat(name)
 {
    const appendCat = [...cats, "Broom"];
    return appendCat;
   }

function prependCat(name)
 {
    const newCatsTwo = [name,...cats];
    newCatsTwo.unshift();
    return newCatsTwo;
}

function removeLastCat(){

    const removeLastCat = cats.slice(0,cats.length-1);
    return removeLastCat;
}


function removeFirstCat(){

    const removeFirstCat = cats.slice(1,cats.length);
    return removeFirstCat;
}
console.log(cats);
