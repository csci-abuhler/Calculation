window.onload = function () {
  var screen = "";
  $("button").on("click", function () {
    if ($(this).attr("id") === "clear") {
      updateScreen(screen, "");
    } else if ($(this).attr("id") === "one") {
      updateScreen(screen, 1);
    } // else if
  });

  function updateScreen(screen, value) {
    screen += value;
    $("#function-screen").text(screen);
  } // updateScreen
};
