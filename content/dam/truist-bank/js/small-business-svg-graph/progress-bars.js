(function () {
  $(".progress-bar").each(function () {
    $(this).css({
      width: $(this).attr("data-progress") + "%",
    }, 1000);
  });
})();