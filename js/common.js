$(document).ready(function() {
// SANDWICH MENU
  $('.menu-icon').click(function() {
        $('.menu-icon').toggleClass('active');
  });
// NAVIGATION CONFIG
    $('.menu-icon').click(function() {
    if ($('.nav-list').is(':visible')) {
      $('.nav-list').fadeOut(600);
      $('.menu-icon').css('position', 'absolute');
      $('.nav-list li').removeClass('fadeInUp animated');
    } else {
      $('.nav-list').fadeIn(600);
      $('.menu-icon').css('position', 'fixed');
      $('.nav-list li').addClass('fadeInUp animated');
      
      // $('.main-navigation li').addClass('fadeInLeft animated');
    };
  });


  $('.nav-list li label').click(function() {
    if (window.matchMedia("(max-width: 768px)").matches) {
    $('.nav-list').fadeOut(600);
    $('.menu-icon').toggleClass('active');
    }
  });


//jQuery -countTo
  $('#tab-l1, #tab-l2, #tab-l3, #tab-l4, #tab-l5, #tab-l6, #tab-navl3').click(function() {
    $('.percent-block').countTo({speed:500,refreshInterval:30});
  });

// SplitText with TEamMAx!!!!
  $('#tab-navl2').click(function(){
    var text = $('.split');

    var split = new SplitText(text, {type:'words,chars'}),
        chars = split.chars;

    function random(min, max){
      return (Math.random() * (max - min)) + min;
    }

    $(split.chars).each(function(i){
      TweenMax.from($(this), 2.5, {
        opacity: 0,
        x: random(-500, 500),
        y: random(-500, 500),
        z: random(-500, 500),
        scale: .1,
        delay: i * .01,
        yoyo: true,

      });
    });
  });


});

