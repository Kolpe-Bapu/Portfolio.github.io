// start navbar js 
window.addEventListener('scroll', function () {
  if (pageYOffset >= 60) {
    document.getElementById("navbar").style.backgroundColor = "#0A101E";
  }
  else {
    document.getElementById("navbar").style.backgroundColor = "transparent"
  }
});


// start education js
const targets = document.querySelectorAll(".timeline ol li");
const threshold = 0.5;
const ANIMATED_CLASS = "in-view";

function callback(entries, observer) {
  entries.forEach((entry) => {
    const elem = entry.target;
    if (entry.intersectionRatio >= threshold) {
      elem.classList.add(ANIMATED_CLASS);
      observer.unobserve(elem);
    } else {
      elem.classList.remove(ANIMATED_CLASS);
    }
  });
}

const observer = new IntersectionObserver(callback, { threshold });
for (const target of targets) {
  observer.observe(target);
}

// Contact Form js

function socialBtnHover() {
  $(".st-social-btn").mouseover(
    function () {
      $(this).addClass("active").siblings().removeClass('active');
    }
  )
}

function socialBtnHover() {
  $(".st-social-btn").mouseout(
    function () {
      $(this).siblings().removeClass('active');
    }
  )
}

socialBtnHover();

// Project js

function changeAttribute1() {

  document.getElementById("demo").setAttribute('href', './projects/Crossfit/index.html')

}

function changeAttribute2() {

  document.getElementById("demo").setAttribute('href', './projects/Construction/index.html')

}

function changeAttribute3() {

  document.getElementById("demo").setAttribute('href', './projects/Yummy/index.html')

}

function changeAttribute4() {

  document.getElementById("demo").setAttribute('href', './projects/GP/index.html')

}

function changeAttribute5() {

  document.getElementById("demo").setAttribute('href', './projects/Bake/index.html')

}

function changeAttribute6() {

  document.getElementById("demo").setAttribute('href', './projects/Corretto/index.html')

}

function changeAttribute7() {

  document.getElementById("demo").setAttribute('href', 'https://lovely-gingersnap-931c64.netlify.app')

}

function changeAttribute8() {

  document.getElementById("demo").setAttribute('href', 'https://flourishing-hamster-8d644e.netlify.app')

}

// skills js

function radial_animate() { 
  $('svg.radial-progress').each(function( index, value ) { 

      $(this).find($('circle.bar--animated')).removeAttr( 'style' );    
      // Get element in Veiw port
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      
      if(elementBottom > viewportTop && elementTop < viewportBottom) {
          var percent = $(value).data('countervalue');
          var radius = $(this).find($('circle.bar--animated')).attr('r');
          var circumference = 2 * Math.PI * radius;
          var strokeDashOffset = circumference - ((percent * circumference) / 100);
          $(this).find($('circle.bar--animated')).animate({'stroke-dashoffset': strokeDashOffset}, 2800);
      }
  });
}
// To check If it is in Viewport 
var $window = $(window);
function check_if_in_view() {    
  $('.countervalue').each(function(){
      if ($(this).hasClass('start')){
          var elementTop = $(this).offset().top;
          var elementBottom = elementTop + $(this).outerHeight();

          var viewportTop = $(window).scrollTop();
          var viewportBottom = viewportTop + $(window).height();

          if (elementBottom > viewportTop && elementTop < viewportBottom) {
                    $(this).removeClass('start');
                    $('.countervalue').text();
                    var myNumbers = $(this).text();
                    if (myNumbers == Math.floor(myNumbers)) {
                        $(this).animate({
                            Counter: $(this).text()
                        }, {
                            duration: 2800,
                            easing: 'swing',
                            step: function(now) {
                                $(this).text(Math.ceil(now)  + '%');                                
                            }
                        });
                    } else {
                        $(this).animate({
                            Counter: $(this).text()
                        }, {
                            duration: 2800,
                            easing: 'swing',
                            step: function(now) {                                
                                $(this).text(now.toFixed(2)  + '$'); 
                            }
                        });
                    }

                    radial_animate();
                }
      }
  });
}

$window.on('scroll', check_if_in_view);
$window.on('load', check_if_in_view);
