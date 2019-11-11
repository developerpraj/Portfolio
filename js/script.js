$(document).ready(function(){
  $('#slides').superslides({
    animation: 'slide',
    play: 5000,
    pagination:false
  });


  var typed = new Typed(".typed",{
    strings:["Software Engineer.","Java Developer.","Student.","Web Developer."],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false,

  });

});
