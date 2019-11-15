
$(function(){
    //To Change the slider duration
    $('.carousel').carousel({
        interval: 5000
    });

    //On Scroll The Window

    $(window).scroll(function () {
        //Show The Scroll top btn
        if($(this).scrollTop()>=700){
            $('.to-top').fadeIn(400);
        }
        else{
            $('.to-top').fadeOut(400);
        }
    });


    //Scroll to top button 
    $('.to-top').on('click', function () {
        $('html,body').animate({
            scrollTop:0
        },1000);

    });

})
