$(function(){
  $("#formone").submit(function(event){
    var person1Input = $("input#person1").val();
    var dateInput = $("input#date").val();
    var startInput = $("input#start-time");
    var endInput = $("input#end-time");
    console.log("person1Input" + "dateInput" + "startInput" + "endInput");

    $(".person1").text(person1Input);
    $(".date").text(dateInput);
    $(".start-time").text(startInput);
    $(".end-time").text(endInput);
    $("#confirm").text();

    $(".panel").show();
    event.preventDefault();
  });
});
