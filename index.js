var screenDisplay = "";
var resultDisplay = "";

var operatorChoice = "";
var firstValue = 0.0;
var secondValue = 0.0;

var cleared = false;

$("button").on("click", function () {
  if ($(this).attr("id") === "clear") {
    // clear button
    clearButton();
  } else if ($(this).attr("id") === "one") {
    checkScreen();
    // one button
    let newScreenDisplay = "1";
    screenDisplay += newScreenDisplay;
    setFirstValue(parseFloat(screenDisplay));
    $("#function-screen").text(screenDisplay);
  } else if ($(this).attr("id") === "two") {
    checkScreen();
    // two button
    let newScreenDisplay = "2";
    screenDisplay += newScreenDisplay;
    setFirstValue(parseFloat(screenDisplay));
    $("#function-screen").text(screenDisplay);
  } else if ($(this).attr("id") === "three") {
    checkScreen();
    // three button
    let newScreenDisplay = "3";
    screenDisplay += newScreenDisplay;
    setFirstValue(parseFloat(screenDisplay));
    $("#function-screen").text(screenDisplay);
  } else if ($(this).attr("id") === "four") {
    checkScreen();
    // four button
    let newScreenDisplay = "4";
    screenDisplay += newScreenDisplay;
    setFirstValue(parseFloat(screenDisplay));
    $("#function-screen").text(screenDisplay);
  } else if ($(this).attr("id") === "five") {
    checkScreen();
    // five button
    let newScreenDisplay = "5";
    screenDisplay += newScreenDisplay;
    setFirstValue(parseFloat(screenDisplay));
    $("#function-screen").text(screenDisplay);
  } else if ($(this).attr("id") === "six") {
    checkScreen();
    // six button
    let newScreenDisplay = "6";
    screenDisplay += newScreenDisplay;
    setFirstValue(parseFloat(screenDisplay));
    $("#function-screen").text(screenDisplay);
  } else if ($(this).attr("id") === "seven") {
    checkScreen();
    // seven button
    let newScreenDisplay = "7";
    screenDisplay += newScreenDisplay;
    setFirstValue(parseFloat(screenDisplay));
    $("#function-screen").text(screenDisplay);
  } else if ($(this).attr("id") === "eight") {
    checkScreen();
    // eight button
    let newScreenDisplay = "8";
    screenDisplay += newScreenDisplay;
    setFirstValue(parseFloat(screenDisplay));
    $("#function-screen").text(screenDisplay);
  } else if ($(this).attr("id") === "nine") {
    checkScreen();
    // nine button
    let newScreenDisplay = "9";
    screenDisplay += newScreenDisplay;
    setFirstValue(parseFloat(screenDisplay));
    $("#function-screen").text(screenDisplay);
  } else if ($(this).attr("id") === "zero") {
    checkScreen();
    // zero button
    let newScreenDisplay = "0";
    screenDisplay += newScreenDisplay;
    setFirstValue(parseFloat(screenDisplay));
    $("#function-screen").text(screenDisplay);
  } else if ($(this).attr("id") === "decimal") {
    // decimal button
    let newScreenDisplay = "";

    if (screenDisplay === "") {
      newScreenDisplay = "0.0";
    } else if (screenDisplay === "0.0") {
      newScreenDisplay = "0." + screenDisplay.slice(0, screenDisplay.length);
    } else {
      newScreenDisplay += ".";
    } // if

    screenDisplay += newScreenDisplay;

    if (moreThanOneDecimal(screenDisplay)) {
      screenDisplay = "0.0";
    } // if
    $("#function-screen").text(screenDisplay);
  } else if ($(this).attr("id") === "percent") {
    // percent button
    $("#function-screen").text(parseFloat(screenDisplay) / 10);
  } else if ($(this).attr("id") === "equals") {
    let newScreenDisplay = screenDisplay;

    if (
      secondValue === undefined ||
      secondValue === null ||
      secondValue === ""
    ) {
      secondValue = 0.0;
    } else {
      //secondValue = parseFloat();
      // newScreenDisplay.charAt(newScreenDisplay.length - 1)
      var concat = "";
      for (
        let i = newScreenDisplay.length - 1;
        i > newScreenDisplay.indexOf(operatorChoice);
        i--
      ) {
        concat += newScreenDisplay.charAt(i);
        concat = concat.split("").reverse().join("");
      } // for
      secondValue = parseFloat(concat);
    } // if

    // Figure out what operation to perform.
    var result = 0.0;

    if (operatorChoice === "+") {
      result = firstValue + secondValue;
    } else if (operatorChoice === "-") {
      result = firstValue - secondValue;
    } else if (operatorChoice === "*") {
      result = firstValue * secondValue;
    } else if (operatorChoice === "/") {
      result = firstValue / secondValue;
    } // if

    cleared = true;
    resultDisplay = result.toString();
    $("#result-screen").text(resultDisplay);
  } else if ($(this).attr("id") === "change-sign") {
    let newScreenDisplay = parseFloat(screenDisplay);
    newScreenDisplay *= -1.0;
    screenDisplay = new String(newScreenDisplay);
    $("#function-screen").text(screenDisplay);
  } else if ($(this).attr("id") === "add") {
    calculate("+");
  } else if ($(this).attr("id") === "subtract") {
    calculate("-");
  } else if ($(this).attr("id") === "multiply") {
    calculate("*");
  } else if ($(this).attr("id") === "divide") {
    calculate("/");
  } // else if
});

// Set first value variable
function setFirstValue(number) {
  firstValue = number;
} // set first value

// Perform the calculation
function calculate(operator) {
  operatorChoice = operator;
  if (firstValue === undefined || firstValue === null || firstValue === "") {
    firstValue = 0.0;
  } else {
    firstValue = parseFloat(screenDisplay);
  } // if

  // Check if the operator has been added to the screen display string.
  if (screenDisplay.charAt(screenDisplay.length - 1) !== operator.toString()) {
    screenDisplay += operatorChoice;
  } // if

  $("#function-screen").text(screenDisplay);
} // calculate

// Check if there is more than one decimal in a number.
function moreThanOneDecimal(number) {
  var count = 0;
  for (i = 0; i < number.length; i++) {
    if (number.charAt(i) === ".") {
      count++;
    } // if
  } // for
  return count > 1;
} // check decimal amount

// Clears the screen.
function clearButton() {
  let newScreenDisplay = "";
  screenDisplay = newScreenDisplay;
  firstValue = "";
  $("#function-screen").text(newScreenDisplay);
} // clear button

// Checks if the display screen is longer than needed and clears if so.
function checkScreen() {
  if (
    secondValue !== undefined &&
    secondValue !== null &&
    secondValue !== "" &&
    cleared
  ) {
    clearButton();
  } // if
  cleared = false;
} // check screen
