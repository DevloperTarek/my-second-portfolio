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
              $('.customer-carousel-active').owlCarousel({
              loop: true, // Loop through slides
              margin: 20, // Space between slides
              nav: false, // Navigation arrows
              autoplay: true, // Auto play slides
              nav:true,
              dots:false,
              navText: ['<i class="ri-arrow-right-s-line"></i>', '<i class="ri-arrow-left-s-line"></i>'],  // Custom navigation text
              autoplayTimeout: 2000, // 1 seconds per slide
              autoplayHoverPause: true, // Pause on hover
              items: 1, // Show one slide at a time
              animateOut: 'fadeOut', // Fade out animation
              animateIn: 'fadeIn', // Fade in animation
              smartSpeed: 2000, // Transition duration in milliseconds
              responsive: {
              0: { items: 1 },
              600: { items: 2 },
              1000: { items: 3 }
              }
              });
              // counter up js
              $('.counter').counterUp({
                     delay: 80, 
                     time: 1000
              });
              // isotope mashonary and filtering
              // Initialize Isotope
              $('.grid-masonry').isotope({
                     itemSelector: '.grid-item',
                     layoutMode: 'masonry',
                     percentPosition: true,
                     masonry: {
                         columnWidth: '.grid-item', // Adjust column width dynamically
                         gutter: 20,
                         horizontalOrder: true
                     }
                 });
              // this part only filtering for use
              //     var $grid = $('.grid').isotope({
              //        itemSelector: '.grid-item',
              //        layoutMode: 'masonry'
              //    });

              // Optional: Filter items on button click
              //    $('.filter-button-group').on('click', 'button', function () {
              //        var filterValue = $(this).attr('data-filter');
              //        $grid.isotope({ filter: filterValue });
              //    });

     });