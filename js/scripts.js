
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    debugger;
    var person1Input = $("input#person1").val();
    var dateInput = $("input#date").val();
    var startInput = $("input#startTime").val();
    var endInput = $("input#endTime").val();

    $(".person1").text(person1Input);
    $(".date").text(dateInput);
    $(".startTime").text(startInput);
    $(".endTime").text(endInput);

    $(".panel").show();
    event.preventDefault();
  });
});
