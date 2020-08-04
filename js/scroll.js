$('document').ready(function(){
    $('.scroll').click(function(e){
        e.preventDefault();

        $('html,body').animate({
            scrollTop:$(this.hash).offset().top
        },1000);
    });

    //scrollReveal
    // ScrollReveal().reveal('.showcase-text');
    // origin- top, bottom, left, right
    // const sr =ScrollReveal();
    // sr.reveal('.showcase-text',{
    //     origin:'bottom',
    //     distance:'50px',
    //     scale: 0.5,
    //     duration:2000,
    //     delay:200,
    //     reset:true
    // });
    // sr.reveal('.main_1',{
    //     origin:'top',
    //     distance:'20px',
    //     scale:0.2,
    //     duration:1000,
    //     delay:1000,
    //     reset:true
    // })
    // sr.reveal('.box',{
    //     origin:'left',
    //     distance:'20px',
    //     duration:1000,
    //     delay:2000,
    //     reset:true
    // })
    // sr.reveal('.main_2',{
    //     origin:'right',
    //     distance:'30px',
    //     duration:2000,
    //     delay:3000,
    //     reset:true

    // });

    const sr =ScrollReveal({
        origin:'right',
        distance:'50px',
        scale:'0.2',
        duration:'2000'

    });
    sr.reveal('.showcase-text');

    sr.reveal('.main_1',{
        delay:1000
    });
    sr.reveal('.box',{
        delay:2000
    });
    sr.reveal('.main_2',{
        delay:3000
    });

});