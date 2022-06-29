var ele = document.getElementById("name");
var ele1 = document.getElementById("submit"); 
var error = document.getElementById("error_msg");

ele.addEventListener("mouseover", function () {
    ele.focus();
    ele.style.borderColor = "#2b6777";
});

ele.addEventListener("mouseout", function () {
    ele.blur();
});


ele.addEventListener("click", function () {
    ele.focus();
    
});

ele1.addEventListener("mouseover", function () {
    ele1.style.color = "white";
    ele1.style.backgroundColor = "#2b6777";
});

ele1.addEventListener("mouseout", function () {
    ele1.style.color = "#2b6777";
    ele1.style.backgroundColor = "white";
});


document.getElementById("name").addEventListener("input", function(){
    error.innerHTML= "";
    error.style.backgroundColor = "#c8d8e4";
    error.style.border = "0px";
    error.style.color = 'red';
    error.style.boxShadow = "";
    if(document.getElementById("name").value.length == 0)
    {
ele.blur();
   error.innerHTML= "Email Required!.";
   ele.style.border = "2px solid red";
   error.style.backgroundColor = '#f2f2f2';
   error.style.border = "1px solid #808080";
   error.style.color = 'red';
   error.style.boxShadow = "1px 1px 1px 1px #808080";
   }
});

ele1.addEventListener("click", function(){
if(document.getElementById("name").value.length == 0)
{
   error.innerHTML= "Email Required!.";
   error.style.backgroundColor = '#f2f2f2';
   ele.style.border= "2px solid red";
   error.style.border = "1px solid #808080";
   error.style.color = 'red';
   error.style.boxShadow = "1px 1px 1px 1px #808080";
} });

var form = document.getElementById("form");
ele1.addEventListener("click", function(){
   if(document.getElementById("name").value.length > 0){
    /*window.location.href = "../html/loader.html";*/
    
   }
});


var regis = document.getElementById("reg1");
var anc =document.getElementById("anchor");

regis.addEventListener("mouseover", () => {
    regis.style.width = "350px";
    regis.style.backgroundColor = "#2b6777";
    regis.style.color = 'white'; 
    anc.style.color = 'white';
    anc.style.fontWeight = '1000';
});


regis.addEventListener("mouseout", () => {
    regis.style.width = "250px";
    regis.style.backgroundColor = "#f2f2f2";
    regis.style.color = ''; 
    anc.style.color = '#2b6777';
    anc.style.fontWeight = '1000';
});



