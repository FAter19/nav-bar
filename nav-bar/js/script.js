$(document).ready(function () {
  $("#nav1 li").hover(
    function () {
      $(this).find("ul").slideDown();
    },
    function () {
      $(this).find("ul").slideUp();
    },
  );

  //   $("ul li .listed")
  //     .odd()
  //     .hide()
  //     .end()
  //     .even()
  //     .hover(function () {
  //       $(this).toggleClass(".active").next().stop(true, true).slideToggle();
  //     });
});
