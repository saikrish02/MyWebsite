var ele = document.getElementById("pass");
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


document.getElementById("pass").addEventListener("input", function () {
    error.style.visibility = 'hidden';
    if (document.getElementById("pass").value.length == 0) {
        ele.blur();
        error.style.visibility = 'visible';
        error.innerHTML = "Password Required!.";
        ele.style.border = "2px solid red";
        error.style.backgroundColor = '#f2f2f2';
        error.style.border = "1px solid #808080";
        error.style.color = 'red';
        error.style.boxShadow = "1px 1px 1px 1px #808080";
    }
});

ele1.addEventListener("click", function () {
    if (document.getElementById("pass").value.length == 0) {
        error.style.visibility = 'visible';
        error.innerHTML = "Password Required!.";
        error.style.backgroundColor = '#f2f2f2';
        ele.style.border = "2px solid red";
        error.style.border = "1px solid #808080";
        error.style.color = 'red';
        error.style.boxShadow = "1px 1px 1px 1px #808080";
    }
});




var regis = document.getElementById("reg");
var anc = document.getElementById("anchor");

regis.addEventListener("mouseover", () => {
    console.log("hello");
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

var show = document.getElementById("show");

show.addEventListener("click", () => {
    if (pass.type == "password")
        pass.type = "text";
    else {
        pass.type = "password";
    }
});

