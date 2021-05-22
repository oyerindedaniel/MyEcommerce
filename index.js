const input = document.querySelector("#text");
const searchlogo = document.querySelector(".nav2search__logo");

input.oninput=function(){
const inputno = input.value.length
if(inputno > 0){
searchlogo.style.fill= "transparent";
}else{
searchlogo.style.fill= null;
}
}

//const mediaQuery550 = window.matchMedia('(max-width: 550px)');
//const mediaQuery550edit = window.matchMedia('(min-width: 550px)');
//const spanname = document.querySelector(".nav1__spanname");
//
//if(mediaQuery550.matches){
//    console.log("yeah");
//    spanname.style.color= "black";
//}
//else if(mediaQuery550edit.matches){
//console.log("No");
//spanname.style.color= "null";
//}
//
