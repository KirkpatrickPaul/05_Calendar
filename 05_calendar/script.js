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
      '<textarea class="form-control-plaintext hr-' +
        i +
        '" type="text" rows=3>' +
        text +
        "</textarea>"
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
  $(".saveBtn").on("click", function (target) {
    for (var i=8; i<=17; i++) {
      if (target.matches("hour" + i) {
        var 
      }
    }
  });
});
