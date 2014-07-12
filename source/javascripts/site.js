/*
 *= require "vendor/jquery.fitvids"
 *= require "vendor/bigfoot.min.js"
*/
$(".fitvids").fitVids();
$.bigfoot();

$(".portfolio__toggle").click(function(e) {
  e.preventDefault();
  var container = $(this).next(".portfolio__preview");
  var iframe = container.find(".portfolio__preview__iframe");
  container.toggleClass("portfolio__preview--visible");

  if (container.hasClass("portfolio__preview--visible")) {
    iframe.attr("src", iframe.data("src"));
  }
});
