
burger = document.querySelector(".burger_menu");
link_burger = document.querySelector(".navigation")

burger.addEventListener('click', function(){
    document.querySelector(".burger_menu span").classList.toggle("active");
    document.querySelector(".header-navigation").classList.toggle("menu_animate");
})

link_burger.addEventListener('click', function(){
    document.querySelector(".burger_menu span").classList.toggle("active");
    document.querySelector(".header-navigation").classList.toggle("menu_animate");
})


