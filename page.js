let changecolor = document.getElementById("ben")
function chcolor(newcolor){
    changecolor.classList.add("ben")
    changecolor.style.backgroundColor = newcolor;
}
let displaylet = document.getElementById("ben")
function showdiv(){

     displaylet.classList.add("ben")
   }
   let hidedisplay = document.getElementById("ben")
   function hidediv(){
       displaylet.classList.remove("ben")
   }
let varjeux = document.getElementById("triange")
function showforme(){
    varjeux.classList.remove("triange") 
    varjeux.classList.add("triange") 
}
let varjeux2 = document.getElementById("carre")
function showforme2(){
    varjeux2.classList.remove("carre") 
    varjeux2.classList.add("carre") 
}

$(document).ready( function(){
 $ ('.navbar li  a').click( function(){
    $ ('a').removeClass("active");
     $(this).addClass("active");
 }) ;
});

