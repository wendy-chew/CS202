// if statements
const age =18;

// if(true){
//     console.log('True');
// }

// if (false){
//     console.log('True');
// }
// if (age>20){
//     console.log('You are over 20 years old');
// } else if (age ==20){
//     console.log('You are equal to the age group');
// } else{
//     console.log('You are less than 20 years old');
// }
const password ='pass12323334@';
if(password.length>=12&& password.includes('@')){
    console.log("Your password is very strong");
}else if(password.length>=8 || password.includes('@')){
    console.log("Your password is fairly strong");
} else{
    console.log("Your password is very weak");
}