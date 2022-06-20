// search on
$(document).on('click','.search',function(){
    $('.search-bar').addClass('search-bar-active')
});
// close search
$(document).on('click','.search-cancel',function(){
    $('.search-bar').removeClass('search-bar-active')
});

//-----------------------------------------------------------------------------------

// Login and sign up form on
// login on
$(document).on('click','.user,.already-account',function(){
    $('.form').addClass('login-active').removeClass('sign-up-active')
});
        //close login
$(document).on('click','.form-cancel',function(){
    $('.form').removeClass('login-active')
});
// sign up on
$(document).on('click','.sign-up-btn',function(){
    $('.form').removeClass('login-active').addClass('sign-up-active')
    
});
    //close Sign Up
$(document).on('click','.form-cancel',function(){
    $('.form').removeClass('login-active').removeClass('sign-up-active')
});

//-----------------------------------------------------------------------------------

// full slider script-------------------
$(document).ready(function() {
    $('#adaptive').lightSlider({
        adaptiveHeight:true,
        auto:true,
        item:1,
        slideMargin:0,
        loop:true
    });
});

// feature slider script-----------------
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
});

// fix menu when scroll
$(window).scroll(function(){
    if($(document).scrollTop() > 50){
        $('.navigation').addClass('fix-nav');
    }else{
        $('.navigation').removeClass('fix-nav');
    }
});

// for responsive menu
$(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active')
        $('.navigation').toggleClass('active')
    })
})