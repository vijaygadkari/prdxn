$(document).ready(function(){

if($('link[href="day.css"]')){ ed($('#day'),$('#night')); }

function ed (elem,id) {
  elem.attr('disabled','disabled');
  id.removeAttr("disabled");
}
$('#day').click(function(){
  $('link[href="night.css"]').attr("href","day.css");
  ed($(this),$('#night'));
});

$('#night').click(function(){
  $('link[href="day.css"]').attr("href","night.css");
   ed($(this),$('#day'));
});

});