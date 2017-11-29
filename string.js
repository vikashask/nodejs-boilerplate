// get length 
// var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var sln = txt.length;
// console.log(sln);


//Finding a String in a String
// var str = "Please locate where 'locate' occurs!";
// var pos = str.indexOf("locate");
// console.log(pos);

//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
// var str = "Please locate where 'locate' occurs!";
// var pos = str.lastIndexOf("locate");
// console.log(pos);

// second parameter as the starting position for the search:
// var str = "Please locate where 'locate' occurs!";
// var pos = str.indexOf("locate",15);
// console.log(pos);

//search() method searches a string for a specified value and returns the position of the match:
// var str = "Please locate where 'locate' occurs!";
// var pos = str.search("locate");
// console.log(pos);


// There are 3 methods for extracting a part of a string:
// slice(start, end)
// substring(start, end)
// substr(start, length)

// var str = "Apple, Banana, Kiwi";
// var res = str.slice(7, 13);
// console.log(res);


// var str = "Apple, Banana, Kiwi";
// var res = str.slice(-12, -6);
// console.log(res);

// var str = "aaa Apple, Banana, Kiwi";
// var res = str.substring(7, 13);
// console.log(res);


// var str = "Apple, Banana, Kiwi";
// var res = str.substr(7, 6);
// console.log(res);

// Replacing String Content
// str = "Please visit Microsoft!";
// var n = str.replace("Microsoft", "gaya");
// console.log(n);

// the replace() function replaces only the first match:
// str = "Please visit Microsoft! vvv Microsoft!";
// var n = str.replace("Microsoft", "gaya");
// console.log(n);

// To replace all matches, use a regular expression with a /g flag (global match):
// str = "Please visit Microsoft and Microsoft!";
// var n = str.replace(/Microsoft/g, "vikask");
// console.log(n);

// By default, the replace() function is case sensitive. Writing MICROSOFT (with upper-case) will not work:
// str = "Please visit Microsoft and Microsoft!";
// var n = str.replace(/MICrosoft/g, "vikask");
// console.log(n);

// To replace case insensitive, use a regular expression with an /i flag (insensitive):
// str = "Please visit Microsoft!";
// var n = str.replace(/MICROSOFT/i, "vikask");
// console.log(n);

// var text1 = "Hello World!";       // String
// var text2 = text1.toUpperCase();  // text2 is text1 converted to upper
// console.log(text2);
// var text2 = text1.toLowerCase(); 
// console.log(text2);

// concat() joins two or more strings:
// var text1 = "Hello";
// var text2 = "World";
// var text3 = text1.concat(" ", text2);

// Extracting String Characters
// There are 2 safe methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// var str = "HELLO WORLD";
// var text2 = str.charAt(0); 
// console.log(text2);

// The charCodeAt() method returns the unicode of the character at a specified index in a string:
// var str = "HELLO WORLD";
// var test = str.charCodeAt(0); 
// console.log(test);

// Accessing a String as an Array is Unsafe
// var str = "HELLO WORLD";
// str[0];      // returns H
// console.log(str[0]);

// Converting a String to an Array
// var txt = "a,b,c,d,e";   // String
// var text = txt.split(",");          // Split on commas
// var text = txt.split(" ");          // Split on spaces
// var text = txt.split("|");          // Split on pipe
// console.log(text);

var txt = "Hello";       // String
var text = txt.split(""); // [ 'H', 'e', 'l', 'l', 'o' ]
console.log(text);
