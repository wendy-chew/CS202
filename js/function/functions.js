// function declaration
// greet();
// function greet(){
//     console.log('Hello World');
// }
// greet();
// greet();
// greet();
//function expression
// speak();
// const speak =function(){
//     console.log('good day!');
// }
// speak();
// speak();
// speak();
// hoisting -calling a function before declaration

// arguments & parameters
// const speak=function(name='Wendy',time='Evening'){
//     console.log(`good ${time} ${name}`)
// }
// speak('Wendy','Morning');
// speak();

// returning values
const calcArea=function(radius){
    let area= 3.14*radius **2;
    console.log(area);
    return area;
}
let area = calcArea(5);

console.log(area);