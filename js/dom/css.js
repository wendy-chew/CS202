/* Adding and Changing Page Content ===================  */
// const para =document.querySelector('p');

//innerText
// console.log(para.innerText);
// para.innerText +=' Justice is awesome';

// const paras=document.querySelectorAll('p');
// paras.forEach(para=>{
//     // console.log(para.innerText);
//     // para.innerText='New Text';
//     // para.innerText +=' New Text';

//     // textContent
//     para.textContent='New Text Content'
// });
// const title =document.querySelector('#page-title');
// title.innerHTML=`<p>The New Dom </p>`;

// const content= document.querySelector('.content');
// // content.innerHTML=`<h2>New HTML Added</h2>`;
// const people=['Max','Wendy','Nathan','Justice'];
// people.forEach(person=>{
//     content.innerHTML+=`<p>${person}</p>`;
// });

/* Changing style==================================== */
const title =document.querySelector('#page-title');

// console.log(title.style);

// background-color for css but in javascript backgroundColor
title.style.color='lightPink';
title.style.fontSize='70px'
title.style.border='1px solid #ccc'

/* Add and Remove Classes ===================================  */
const content= document.querySelector('p');

content.classList.add('success');
content.classList.remove('success');

