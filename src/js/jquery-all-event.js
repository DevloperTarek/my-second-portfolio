$(document).ready(function () {
              $('.activeCarousel').owlCarousel({
              loop: true, // Loop through slides
              margin: 106, // Space between slides
              nav: false, // Navigation arrows
              autoplay: true, // Auto play slides
              autoplayTimeout: 1000, // 1 seconds per slide
              autoplayHoverPause: true, // Pause on hover
              items: 1, // Show one slide at a time
              animateOut: 'fadeOut', // Fade out animation
              animateIn: 'fadeIn', // Fade in animation
              smartSpeed: 2000, // Transition duration in milliseconds
              responsive: {
              0: { items: 1 },
              600: { items: 3 },
              1000: { items: 5 }
              }
              });
              // counter up js
              $('.counter').counterUp({
                     delay: 80, 
                     time: 1000
              });



     });