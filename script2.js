var br = "<br>";
var hr = "<hr>";

var cars=["Tesla ", "Audi ", "Renault ", "Volvo ", "Mazda ", "Fiat ", "Ferrari "];
document.write(cars.sort());

var fruits=["apple", "banana", "kiwi"];
fruits.push("orange");
document.write(fruits + br);
document.write(fruits.slice(0, 3));
document.write("<hr>");

var animals=["monkey", "horse", "dog"];
document.write(animals.sort());
document.write("<br>");
animals.unshift("cat");
document.write(animals);

var newfruit="mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
var temp= new Array();
temp=newfruit.split("/");


document.write(temp);