$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass("static", $(this).scrollTop() <= $nav.height());
  });
});
