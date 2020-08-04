/* DOM */
// query selector
/* 
const para=document.querySelector('p');
console.log(para);

const para1 =document.querySelector('#page-title');
console.log(para1);

const content =document.querySelector('.content');
console.log(content);

const para2=document.querySelector('div .error');
console.log(para2);
 */
const paras =document.querySelectorAll('p');
console.log(paras);
paras.forEach(person=>{
    console.log(person);
});


/* Ways to Query the DOM ====================== */

// ID
const title =document.getElementById('page-title');
console.log(title);
// class name
const content=document.getElementsByClassName('content');
console.log(content);

// TagName
const para =document.getElementsByTagName('p')
console.log(para);