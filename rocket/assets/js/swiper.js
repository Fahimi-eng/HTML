// var swiper = new Swiper('.swiper-container', {
      //   slidesPerView: 1,
      //   spaceBetween: 10,
      //   pagination: {
      //     el: '.swiper-pagination',
      //     clickable: true,
      //   },
      // });
      const swiper = new Swiper(".swiper", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,

        //break points
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // when window width is >= 640px
          992: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        },

        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
            clickable: true,
        },

        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        // And if we need scrollbar
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      });