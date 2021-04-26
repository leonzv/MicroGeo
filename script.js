const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 5000,
      },
      paginationType: "custom",
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  });

function goAnywhere(){
    (location.href = "#");
}