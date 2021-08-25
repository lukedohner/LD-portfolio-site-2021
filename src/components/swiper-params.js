 const params = {
    speed: 600,
      parallax: true,
      parallaxEl: {
        el: '.parallax-bg',
        value: '-23%'
      },

    autoplay: {
      delay:1,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      dynamicBullets: true
    },
    loop: true,
   lazy: true,
  }