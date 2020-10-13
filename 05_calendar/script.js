$(document).ready(function () {
  var date = moment().format("dddd, MMM Do YYYY");
  $("#currentDay").text(date);
  //the hour is converted to a number by multiplying by 1.
  var time = 1 * moment().format("HH");
  //this function fills colors based on the hour of the time variable.
  for (var i = 8; i <= 17; i++) {
    var $cell = $(".hr-" + i);
    var text = localStorage.getItem("hour" + i);
    // the following function removes the null value for empty storage spaces
    if (text === null) {
      text = "";
    }
    $cell.html(
      '<form><textarea class="form-control-plaintext" name="' +
        i +
        'th-hour" type="text" rows=3>' +
        text +
        "</textarea></form>"
    );
    //the following function fills colors based on the hour of the time variable.
    if (i > time) {
      $cell.attr("class", "col-8 hour future");
    } else if (i === time) {
      $cell.attr("class", "col-8 hour present");
    } else {
      $cell.attr("class", "col-8 hour past");
    }
  }
  // click even tied to the body was the easiest way I could find to loop over the buttons.
  $("body").on("click", function (event) {
    var $textArray = $("form").serializeArray();
    for (var i = 8; i <= 17; i++) {
      if (event.target.matches("#hour" + i)) {
        var $saveText = $textArray[i - 8].value;
        localStorage.setItem("hour" + i, $saveText);
      }
    }
  });
});
