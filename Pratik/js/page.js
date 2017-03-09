var a =document.getElementsByClassName('link');
for (var i = 0 in a){
  if(a[i] >= a.length){
    break;
  }
  else{
    var url = (a[i].innerHTML.toLowerCase());
    if(location.href.search(url)>0){
      a[i].classList.add("active");
    }
  }
}

function neww () {
  var mywindow = window.open("abc.html","google","height=300,width=600,scrollbars=yes");
}
