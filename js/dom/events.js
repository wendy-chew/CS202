
/* Events Basics ================  */

// addEventListener
const button= document.querySelector('.btn');
button.addEventListener('click',()=>{
    console.log('you click me');
});

const items=document.querySelectorAll('li');
items.forEach(item=>{
    item.addEventListener('click',e=>{
        // console.log('item clicked');
        // console.log(e.target);
        // e.target.style.textDecoration='line-through';
        // e.target.remove();
        console.log(e);
    });
})



/* Creating and Removing Elements ================  */
const ul =document.querySelector('ul');
button.addEventListener('click',()=>{
    // ul.innerHTML += `<li>something new</li>`;
    const li=document.createElement('li');
    li.textContent='something new';
    ul.appendChild(li);
});

ul.addEventListener('click',e=>{
    console.log(e);
    if(e.target.tagName ==='LI'){
        e.target.remove();
    }
});
