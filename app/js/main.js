$(function () {
  new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    perMove: 3,
    drag: true,
    pagination: true,
    arrows: false,
    gap: "14px",
    classes: {
      pagination: 'splide__pagination splide__pagination__custom', // container
      page: 'splide__pagination__page splide__pagination__page__custom', // each button
    }
  }).mount();
})