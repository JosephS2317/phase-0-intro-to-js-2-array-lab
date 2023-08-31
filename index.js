// Write your solution here!
const cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) { 
    cats.push("Ralph");
}

function destructivelyPrependCat(Bob) { 
        cats.unshift("Bob");
}

function destructivelyRemoveLastCat () {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

//define new array for "Broom"
const broom = ["Broom"]

//create function to append broom to cats, leaving cats unchanged
function appendCat(Broom) {    
   return cats.concat(broom);
}

//define array for "Arnold"
const arnold = ["Arnold"]

//function prepend "Arnold" to cats in new arrary, leaving it unchanged
function prependCat(Arnold) {
    return arnold.concat(cats);
}

//Define a copy of Cats using .slice() to remove last cat
const catsCopy = cats.slice(0, 2);

//function removes last cat in the cats array and returns a new array leaving cats unchaged
function removeLastCat() {
    return catsCopy;
}

//Define a copy of cats using .slice() to remove first cat
const anotherCatCopy = cats.slice(1);

//Define the function removeFirstCat
function removeFirstCat() {
    return anotherCatCopy;
}



        


