var ele = document.getElementById("name1");
var ele2 = document.getElementById("submit1");
var email = document.getElementById("email");
var pass = document.getElementById("pass");
var error = document.getElementById("error_msg1");

ele.addEventListener("mouseover", function () {
    if(ele.style.borderColor != 'red'){
    ele.focus();
    ele.style.borderColor = "#2b6777";
    }
});

ele.addEventListener("mouseout", function () {
    ele.blur();
});


ele.addEventListener("click", function () {
    if(ele.style.borderColor != 'red')
    ele.focus();
    
});

email.addEventListener("mouseover", function () {
   if(email.style.borderColor != 'red' && email.style.borderColor != 'green'){
    email.focus();
    email.style.borderColor = "#2b6777";
   }
});

email.addEventListener("mouseout", function () {
    email.blur();
});


email.addEventListener("click", function () {
    if(email.style.borderColor != 'red' && email.style.borderColor != 'green')
    email.focus();
    
});

ele2.addEventListener("mouseover", function () {
    ele2.style.color = "white";
    ele2.style.backgroundColor = "#2b6777";
});

ele2.addEventListener("mouseout", function () {
    ele2.style.color = "#2b6777";
    ele2.style.backgroundColor = "white";
});

pass.addEventListener("mouseover", function () {
    if(pass.style.borderColor != 'red' && pass.style.borderColor != 'green'){
    pass.focus();
    pass.style.borderColor = "#2b6777";
    }
});

pass.addEventListener("mouseout", function () {
    pass.blur();
});


pass.addEventListener("click", function () {
    if(pass.style.borderColor != 'red' && pass.style.borderColor != 'green')
    pass.focus();
    
});




document.getElementById("name1").addEventListener("input", function(){
    error.innerHTML= "";
    error.style.backgroundColor = "#c8d8e4";
    error.style.border = "0px";
    error.style.color = 'red';
    error.style.boxShadow = "";
    ele.style.borderColor = '#2b6777';
    if(document.getElementById("name1").value.length == 0)
    {
    ele.blur();
   error.innerHTML= "All Fields Required!.";
   ele.style.border = "2px solid red";
   error.style.backgroundColor = '#f2f2f2';
   error.style.border = "1px solid #808080";
   error.style.color = 'red';
   error.style.boxShadow = "1px 1px 1px 1px #808080";
   }
});

document.getElementById("email").addEventListener("input", function(){
    error.innerHTML= "";
    error.style.backgroundColor = "#c8d8e4";
    error.style.border = "0px";
    error.style.color = 'red';
    error.style.boxShadow = "";
    email.style.borderColor = '#2b6777';
    if(document.getElementById("email").value.length == 0)
    {
   email.blur();
   error.innerHTML= "All Fields Required!.";
   email.style.border = "2px solid red";
   error.style.backgroundColor = '#f2f2f2';
   error.style.border = "1px solid #808080";
   error.style.color = 'red';
   error.style.boxShadow = "1px 1px 1px 1px #808080";
   }
});

document.getElementById("pass").addEventListener("input", function(){
    error.innerHTML= "";
    error.style.backgroundColor = "#c8d8e4";
    error.style.border = "0px";
    error.style.color = 'red';
    error.style.boxShadow = "";
    pass.style.borderColor = '#2b6777';
    if(document.getElementById("pass").value.length == 0)
    {
pass.blur();
   error.innerHTML= "All Fields Required!.";
   pass.style.border = "2px solid red";
   error.style.backgroundColor = '#f2f2f2';
   error.style.border = "1px solid #808080";
   error.style.color = 'red';
   error.style.boxShadow = "1px 1px 1px 1px #808080";
   } 
   
    var col = pass_validate(); 
    if(col == true){
        
        pass.style.border= '3px solid green';  
    } 
    else{
        
        pass.style.border = '3px solid red'; 
    }
});

function pass_validate()
{
    var small_alph = /[a-z]/g; 
    var upper_alph = /[A-Z]/g; 
    var dig = /[0-9]/g;
    if(pass.value.match(small_alph) && pass.value.match(upper_alph) && pass.value.match(dig) && pass.value.length >= 8)
    {
        return true;
    } 
    else{
        return false;
    }
}

ele2.addEventListener("click", function(){
if(document.getElementById("name1").value.length == 0 || document.getElementById("email").value.length == 0 || document.getElementById("pass").value.length == 0 )
{
   
   error.innerHTML= "All Fields Required!.";
   error.style.backgroundColor = '#f2f2f2';

   if(document.getElementById("name1").value.length == 0)
   ele.style.border= "2px solid red"; 
   if(document.getElementById("email").value.length == 0)
   email.style.border= "2px solid red"; 
   if(document.getElementById("pass").value.length == 0)
   pass.style.border= "2px solid red";

   error.style.border = "1px solid #808080";
   error.style.color = 'red';
   error.style.boxShadow = "1px 1px 1px 1px #808080";
} });


var regis = document.getElementById("reg");
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





