$(function() {
  var i;
  // var table =$('#table');
  // var tr = $("<tr></tr>");

  $( ".dropdown-label").on("click",function() {
    $(this).siblings(".list-items").slideToggle( "slow");
  });
  //on click of button toggle event fires

  $('.dropdown').on('mouseleave',function() {
     $(this).children('.list-items').slideUp(100);
  });
  //When mouse leaves the area toggle event fires
  function updatetable(label,list){
    var tr = list;
    tr.children($('td')).remove();
    tr.append($('<td>'+label.text()+'</td>'));
  }
  //function to update the table

  $('#list-1').on('change', 'input', function(e){
    var listvals = [];
    $('#list-1 :input').each(function () {
      if($(this).is(':checked')){
        listvals.lenght=0;
        listvals.push($(this).val());
        $('#dropdown1-label').text(listvals.toString());
      }
      if(listvals.length===0){
        $('#dropdown1-label').text('Select Values');
      }
    });
    updatetable($('#dropdown1-label'),$('#details-list1'));
  });

  $('#list-2').on('change', 'input', function(e){
    var listvals = [];
    $('#list-2 :input').each(function () {
      if($(this).is(':checked')) {
        listvals.push($(this).val());
        $('#dropdown2-label').text(listvals.toString());
      }
      if(listvals.length === 0) {
        $('#dropdown2-label').text('Select Values');
      }

   });
  updatetable($('#dropdown2-label'),$('#details-list2'));
  });
  });
// });
  //function to check and change the value of label
