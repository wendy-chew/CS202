// callbacks & forEach
const myFunc =(callbackfunc)=>{
    let value= 50;
    callbackfunc(value);
}
myFunc((value)=>{
    console.log(value);
});







//callback Function Example

let people =['Thor','Max','Nathan','Ana','Wendy'];

// people.forEach(function(person){
//     // console.log('something');
//     console.log(person);
// });

// callback function
const logPerson =(person,index)=>{
    console.log(`${index}-Hello ${person}`);

    let html= `<li>${index} - Welcome ${person}`;

    document.write(html);
}
people.forEach(logPerson);

