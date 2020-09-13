/* global $ */

const zoom = $('.big-img').find('img').attr('src');
$('.big-img').append(`<img class="zoom" src="${zoom}">`);
$('.big-img').mouseenter(() => {
  $(this).mousemove((event) => {
    const offset = $(this).offset();
    const left = event.pageX - offset.left;
    const top = event.pageY - offset.top;

    $(this).find('.zoom').css({
      width: '200%',
      opacity: 1,
      left: -left,
      top: -top,
    });
  });
});

$('.big-img').mouseleave(() => {
  $(this).find('.zoom').css({
    width: '100%',
    opacity: 0,
    left: 0,
    top: 0,
  });
});
