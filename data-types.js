//Truly empty data type
var emptyGlass = null;

//Truly undefined data type
var outspace;

//Truly true aka Boolean data type
var truth = true;
var news = false;

//Falsy stuff
if (!undefined) {
    console.log('Falsy');
}

//Truthy stuff 
if (2) {
    console.log('Truthy');
}

//Numbers
2
10.2298768
0.9876473
-2374859
'2' // not a number, it's a string

console.log('2' + '2'); // result = '22', concatenates the strings

console.log('2' * 2); // result = 4, multiplies the Numbers

//don't try to do math with strings//

console.log(Number('2') + Number('2')); // converts to Numbers
Every input field on a form is actually a string value, so you might need to convert those to numbers using ^^ this.//

Math
var cosmos = Math.random() * 100;
console.log(cosmos);

var round = Math.round(cosmos);
console.log(round);

var ceil = Math.ceil(cosmos);
console.log(ceil);

var floor = Math.floor(cosmos);
console.log(floor);


strings
var doubleQuotedString = "hello";
var singleQuotedString = '\'hello\''; //escaping strings
var multiLineString = `hey
                        everyone`;
doubleQuotedString + singleQuotedString + multiLineString;

var iAmWhispering = 'I AM WHISPERING';
iAmWhispering = iAmWhispering.toLowerCase();

console.log(iAmWhispering);

var iAmShouting = 'i am shouting';
iAmShouting = iAmShouting.toUpperCase();

console.log(iAmShouting);

var thingYouWear = 'Hat';
console.log(thingYouWear.length);
thingYouWear = thingYouWear.slice(1, 2);

console.log(thingYouWear);

console.log(thingYouWear.length);

var place = 'The Iron Yard';

console.log(place.slice(1, 10));

var headline = 'the day was cold';
var firstLetter = headline.slice(0, 1).toUpperCase();
headline = firstLetter + headline.slice(1);

function iCap(headline) {
    var firstLetter = headline.slice(0, 1).toUpperCase();
    headline = firstLetter + headline.slice(1);
    return headline
}

console.log(iCap('spring is coming soon we hope.'));
console.log(iCap('when is groundhog day?'));
console.log(iCap('did he see his shadow?'));
console.log(iCap('tomorrow is supposed to be 60 degrees!'));

var userInput = '        Collin    ';
console.log(userInput);
userInput = userInput.trim();
console.log(userInput);

var sayItAgain = 'Hacked.';
sayItAgain = sayItAgain.repeat(500);

console.log(sayItAgain);

var address = '37373 Main Street';

var hasStreet = address.includes('street');

console.log(hasStreet);

var phoneNumber = '(888) 123 1234'
isCorrectPhoneNumber = phoneNumber.match(/\d/g).length===10;

console.log(isCorrectPhoneNumber);

var greeting = 'hey world';
greeting = greeting.replace('hey', 'hello');
console.log(greeting);
//or this...
console.log ('hey world' .replace('hey', 'hello'));

Dates
Date.now(); //dont use this, use moment.js

Currency
use account.js

//Arrays
var listOfThings = ['Cheese', 'Pepperoni', 'Crust', 'Sauce'];
console.log(listOfThings[0]);
console.log(listOfThings.length);
console.log(listOfThings.reverse());
console.log('A sentence of characters.'.split('').reverse().join(' '));

//Objects
var anObject = {
    name: 'Collin'
};

anObject.name; //preferred way to write objects
anObject['name'];

console.log(anObject.name);