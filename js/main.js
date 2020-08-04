const form= document.querySelector('.signup-form');
const feedback=document.querySelector('.feedback');
// const name= document.querySelector('#name')
form.addEventListener('submit',e =>{
    e.preventDefault();
    // console.log('form submitted');
    // console.log(name.value);
    // console.log(form.name.value);

    // variables
    const name =form.name.value;
    const pass=form.password.value;
    const email=form.email.value;
    const cpass=form.cpassword.value;
    const phone=form.phone.value;
     // Regular Expression
    const namecheck = /^[A-Za-z]{3,20}$/;
    const passwordcheck= /^[A-Za-z_@#$%]{3,}$/;
    const emailcheck =/^[a-z_]{3,}@[a-z]{3,}[.]{1}[a-z]{2,6}$/
    const phonecheck=/^[0,9]{10}$/;
    if(namecheck.test(name)){
        // alert('Name is valid');
        feedback.innerHTML='';
    }else{
        feedback.innerHTML='** Invalid Name';
        // form.name.style.border='1px solid red'
        return false;
    }
    if (emailcheck.test(email)){
        feedback.innerHTML='';
    }else{
        feedback.innerHTML='** Invalid Email';
        form.name.focus();
        return false;
    }
    // if(isNaN(phone)){
    //     feedback.innerHTML='** Invalid Phone';
    // } else{}
    if(pass!=cpass){
        feedback.innerHTML="Password doesn't match";
        return false;
    } else{
        feedback.innerHTML='';
    }

    form.submit();
});
//username@gmail.com
// const password='skyFall@';
// const pattern = /^[A-Za-z0-9*@]{3,}$/;

// let result=pattern.test(password);
// if(result){
//     //feedback
//     alert('password is correct!');
// }else{
//     alert('password is incorrect');
// }