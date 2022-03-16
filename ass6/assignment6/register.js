window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    var password = document.forms["myForm"]["password"];
    var Errormsg = document.getElementById("errormsg");
    var result = true;

    if(password[0].value != password[1].value){
        Errormsg.textContent = "password ไม่ตรงกัน";
        result = false;
    }
    else{
        alert("success");
    }
    return result;
}