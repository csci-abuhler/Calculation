var screenDisplay = "";
var resultDisplay = "";

$("button").on("click", function () {
  if ($(this).attr("id") === "clear") {
    // clear button
    let newScreenDisplay = "";
    screenDisplay = newScreenDisplay;
    $("#function-screen").text(newScreenDisplay);
  } else if ($(this).attr("id") === "one") {
    // one button
    let newScreenDisplay = "1";
    screenDisplay += newScreenDisplay;
    $("#function-screen").text(screenDisplay);
  } else if ($(this).attr("id") === "two") {
    // two button
    let newScreenDisplay = "2";
    screenDisplay += newScreenDisplay;
    $("#function-screen").text(screenDisplay);
  } else if ($(this).attr("id") === "three") {
    // three button
    let newScreenDisplay = "3";
    screenDisplay += newScreenDisplay;
    $("#function-screen").text(screenDisplay);
  } else if ($(this).attr("id") === "four") {
    // four button
    let newScreenDisplay = "4";
    screenDisplay += newScreenDisplay;
    $("#function-screen").text(screenDisplay);
  } else if ($(this).attr("id") === "five") {
    // five button
    let newScreenDisplay = "5";
    screenDisplay += newScreenDisplay;
    $("#function-screen").text(screenDisplay);
  } else if ($(this).attr("id") === "six") {
    // six button
    let newScreenDisplay = "6";
    screenDisplay += newScreenDisplay;
    $("#function-screen").text(screenDisplay);
  } else if ($(this).attr("id") === "seven") {
    // seven button
    let newScreenDisplay = "7";
    screenDisplay += newScreenDisplay;
    $("#function-screen").text(screenDisplay);
  } else if ($(this).attr("id") === "eight") {
    // eight button
    let newScreenDisplay = "8";
    screenDisplay += newScreenDisplay;
    $("#function-screen").text(screenDisplay);
  } else if ($(this).attr("id") === "nine") {
    // nine button
    let newScreenDisplay = "9";
    screenDisplay += newScreenDisplay;
    $("#function-screen").text(screenDisplay);
  } else if ($(this).attr("id") === "zero") {
    // zero button
    let newScreenDisplay = "0";
    screenDisplay += newScreenDisplay;
    $("#function-screen").text(screenDisplay);
  } else if ($(this).attr("id") === "decimal") {
    // decimal button
    let newScreenDisplay = "";

    if (screenDisplay === "") {
      newScreenDisplay = "0.0";
    } else if (screenDisplay === "0.0") {
      newScreenDisplay =
        "0." + screenDisplay.slice(0, screenDisplay.length - 1);
    } else {
      newScreenDisplay += ".";
    } // if

    screenDisplay += newScreenDisplay;

    if (moreThanOneDecimal(screenDisplay)) {
      screenDisplay = "0.0";
    } // if
    $("#function-screen").text(screenDisplay);
  } else if ($(this).attr("id") === "equals") {
    let newScreenDisplay = screenDisplay;
    resultDisplay = screenDisplay;
    $("#result-screen").text(resultDisplay);
  } else if ($(this).attr("id") === "change-sign") {
    let newScreenDisplay = parseFloat(screenDisplay);
    newScreenDisplay *= -1.0;
    screenDisplay = new String(newScreenDisplay);
    $("#function-screen").text(screenDisplay);
  } // else if
});

function moreThanOneDecimal(number) {
  var count = 0;
  for (i = 0; i < number.length; i++) {
    if (number.charAt(i) === ".") {
      count++;
    } // if
  } // for
  return count > 1;
} // check decimal amount
