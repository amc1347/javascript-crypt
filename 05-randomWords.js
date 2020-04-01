// Create an array of strings and use random() to select random entries
// and add them to a sentence, printing the result to the console.

var arrayname = ["Perky", "Nipper", "Bubbles", "Happy", "Squeezy", "Sunny", "Merry", "Tootsie", "Kringle" , "Puddin", "Cookie", "Tinker", "Twinkle", "Buddy", "Elfie", "Jingle", "Snowflake", "Jolly", "Elvis", "Sugarplum", "Peaches" , "Gingerbread", "Frisbee", "Evergreen", "Pinky", "Tinsel" ];
var arraylast = ["Angel-Pants", "Floppy-Feet", "Plum-Pants", "McJingles", "Peppermint", "Toe-Bells", "Superploom", "Sugar-Socks", "Pickle-Pants", "Sparkley-Toes", "Monkey-Buns", "Pointy-Toes"];

var randomIndex1 = Math.floor( Math.random() * arrayname.length);
var randomIndex2 = Math.floor( Math.random() * arraylast.length);

console.log(arrayname[randomIndex1] + " " + arraylast[randomIndex2]);
