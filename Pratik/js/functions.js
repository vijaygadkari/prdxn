var screen = document.getElementById('dis');
function display(val){
  screen.value+= val;
}
function clr(){
screen.value=null;
}

// (function (){
//   if(screen.value == "undefined")
//   { clr(); }
// })();

function cal(){
  if(screen.value == ""){
    }
  else if(screen.value == "undefined"){ clr(); }
  else
  {
    var result;
    try{
    result = eval(screen.value);
    screen.value = result;
    }
    catch(e){
    alert("something went wrong");
    var abc = confirm("Do you want to clear the screen ?");
    if(abc == true){
       screen.value = "";
      }
    }
  }
 }


// ***********_____________SCript 2____________***************

var value = document.getElementById("result");

function person(firstName,lastName,age,place){
  this.firstName=firstName;
  this.lastName=lastName;
  this.age=age;
  this.place=place;
  this.oldPlace = this.place;
  this.changePlace= function(place){
    this.place = place;
    return place;
  };
}

var me = new person('Pratik','Jain',22,'Thane');
var friend = new person('Sandip','ghatge',28,'Thane');
value.innerHTML = me.firstName + " is " + me.age+" years old and lives in "+me.place+".<br><br>" ;
value.innerHTML+=friend.firstName + " is going to shift "+friend.changePlace('Kalwa')+" from "+friend.oldPlace+" .";


// += emp.firstName;
// 
//
var fruit = "apple";
var vegie = "tomato";

const veg = {
fruit,
vegie
};

alert(veg.fruit);
console.log(veg.vegie);