var date = moment().format("dddd, MMM Do YYYY");
$("#currentDay").text(date);
//the hour is converted to a number by multiplying by 1.
var time = 1 * moment().format("HH");
//this function fills colors based on the hour of the time variable.
for (var i = 8; i <= 17; i++) {
  var $cell = $("#hour-" + i);
  if (i > time) {
    $cell.attr("class", "col-8 list-group-item-dark entry-block future");
  } else if (i === time) {
    $cell.attr("class", "col-8 list-group-item-dark entry-block present");
  } else {
    $cell.attr("class", "col-8 list-group-item-dark entry-block past");
  }
}
