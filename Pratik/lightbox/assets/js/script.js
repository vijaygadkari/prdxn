/* Author: Pratik*/

$(document).ready(function(){
  // var url = $('.box').find('iframe').attr('src');
  // console.log(url);
  $(".box").find('iframe').attr('src', '');
  $('.light-box-triger').on('click',function(e){
    // e.stopPropogation();
    var url = $(this).data('url');
    console.log(url);
    $('.box').find('iframe').attr('src', url);
    console.log($('iframe').src);
    $('.backdrop').fadeIn(300,'linear');
    $('.backdrop').on('click',closeBox);
    $('.lb-close').on('click',closeBox);

  });

});



function closeBox(){
  $('.backdrop').fadeOut(300,'linear',function(){
    $(".box").find('iframe').attr('src', '');
  });
}
