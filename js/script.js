$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.

$("button").click(function(){
var ask = $("input").val()
var fl = ask.substring(0, 1)
var rl = ask.substring(1, ask.length)
var finaloutput = ask.substring(rl)
$(".output").append(ask);
});




});
