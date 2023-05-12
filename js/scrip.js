
/*==========SEARCH BOX OTOMATIS START=============*/
let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
/*==========SEARCH BOX OTOMATIS END=============*/

/*==========KERANJANG OTOMATIS START=============*/
let shoppingCart = document.querySelector('.shopping-cart')

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

/*==========KERANJANG OTOMATIS END=============*/

/*=============LOGIN OTOMATIS START=============*/
let loginForm = document.querySelector('.login-form')

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

/*=============LOGIN OTOMATIS END===================*/

/*=============NAVBAR OTOMATIS START===================*/

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
}

/*=============NAVBAR OTOMATIS END===================*/

$(document).ready(function(){
 
  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
  });

  $('.fa-search').click(function(){
    $(this).toggleClass('fa-times');
  });

  $('.fa-shopping-cart').click(function(){
    $(this).toggleClass('fa-times');
  });
  $('.fa-user').click(function(){
    $(this).toggleClass('fa-times');
  });
});





var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});
