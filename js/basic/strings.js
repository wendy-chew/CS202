//strings
console.log("Hello World");
let email = "cheww@wwu.edu";
console.log(email);

//string concatenation
// joining 2 or more variables/ w an html element
let firstName='Wendy';
let lastName='Chew';
let fullName =firstName+" "+lastName;
console.log("<h2>"+ fullName + "</h2>");

//getting individual characters
console.log(fullName[4]);
// index start from 0

//string length//property
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase());
let index =email.indexOf('@');
console.log(index);

// common string
let result = email.slice(2,12);
console.log(result);

