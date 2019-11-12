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
  $('.owl-carousel').owlCarousel({
      loop:true,
      items:4,
      responsive:{
          0:{
              items:1
          },
          480:{
              items:2
          },
          768:{
              items:4
          },
          938:{
              items:4
          }
      }
  })

        var skillsTopOffset = $(".skillsSection").offset().top;
        $(window).scroll(function(){
          if(window.pageYOffset > skillsTopOffset-$(window).height()+200){
            $('.chart').easyPieChart({
                    easing: 'easeInOut',
                    barColor: ' #2269',
                    trackColor: false,
                    scaleColor: false,
                    lineWidth:4,
                    size:152,
                    onStep: function(from, to, percent){
                      $(this.el).find('.percent').text(Math.round(percent));
                    }

                  });
          }

          $(".counter").each(function(){
            var element =$(this);
            var endVal =parseInt(element.text());
            element.countup(endVal);
          })

        })
});
