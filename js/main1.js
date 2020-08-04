jQuery('document').ready(function(){
    // run your code here
    // alert('Hello, World')
    /* 
    const p = document.querySelector('p');
    p.style.display ='none';

    const paras =document.querySelectorAll('p');
    paras.forEach(para=>{
        para.style.display='none'
    });
    */

    // hide all p elements using 1 line
    // $('p').hide();

    // selectors - element, id, class, multiple elements, css3
    //id
    // $('#para1').hide();
    //class
    // $('.para').hide();

    //css3
    // $('#list li:last-child').hide();

    // Method - hide(), show(), fadeIn(), fadeOut(),fadeToggle(), slideIn(), slideToggle(), stop(), animate(),

    // Events- click, dblclick, hover(mouseenter,mouseleave),load, mouseout, keydown, keyup, 

    // $('.btn1').click(()=>{
    //     $('ul').show(2000);
    // });

    // $('.btn2').click(()=>{
    //     $('ul').hide(1000);
    // });

    // $('.btn3').click(function(){
    //     $('ul').toggle('slow');
    // });

    // parameters- slow, fast, milliseconds(1000ms = 1s)

    // DOM- .html(), .css(), .text()

    // .html()- .before(), .after(), replace(), replaceWith(), prepend(), append(),

    //.css()- addClass(), remove();

    $('.btn4').click(function(){
        // $('li').html('<h3>New Text</h3>');
        // $('li').append('New Append');
        // $('li').prepend('New Append');

        // css
        // $('.para2').addClass('add');

        // css style
        // $('.para2').css('color','blue');
        $('.para2').css({'color':'white', 'background-color':'black'});
    });

    // animations
    // $('.box1').animate({'top':'300px'}, 1000);
    // $('.box1').animate({'top':'0px'}, 1000);

    $('.box1').hover(function(){
        // $('.box1').animate({'top':'300px'}, 1000);
        // $('.box1').animate({'top':'0px'}, 1000);

        // keyword: this 
        $(this).animate({'top':'300px'}, 1000);
        $(this).animate({'top':'0px'}, 1000);
    });

    // other methods- setInterval, clearInterval, setTimeout, clearTimeout,
    // scrollTo, scrollTop, scrollX, scrollY

    // setTimeout(function(){
    //     alert('Hello');
    // },4000);

    setInterval(()=>{
        console.log('You won!!!!');
    },3000);
});
