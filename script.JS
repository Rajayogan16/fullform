const form = document.getElementById("form");
const gender = document.getElementById("gender");
const generror = document.getElementById("g-error");
var fField = document.getElementById("fname");
var flable = document.getElementById("flabel");
var ferror = document.getElementById("f-error");
var lFeild = document.getElementById("lname");
var llable = document.getElementById("llabel");
var lerror = document.getElementById("l-error");
var emailFeild = document.getElementById("mail");
var emaillable = document.getElementById("mail-label");
var emailerror = document.getElementById("e-error");
var pFeild = document.getElementById("mob");
var plable = document.getElementById("mob-label");
var perror = document.getElementById("m-error");
var addFeild = document.getElementById("address");
var addlabel = document.getElementById("add-label");
var adderror = document.getElementById("a-error");
var selectFeild = document.getElementById("State");
var selectlabel = document.getElementById("select-label");
var selecterror = document.getElementById("s-error");
var pinFeild = document.getElementById("pin");
var pinlable = document.getElementById("pin-label");
var pinerror = document.getElementById("p-error");
var disFeild = document.getElementById("district");
var dislable = document.getElementById("dis-label");
var diserror = document.getElementById("d-error");

function validatefname()
{
    if(fField.value === ""){
       ferror.innerHTML = "please enter the First name";
       fField.style.border = "2px solid red";
       return false;
    }

    else if(fField.value.length < 4 || fField.value.length > 15){
       ferror.innerHTML = "characters of the First name should be min 4 and max 15";
       fField.style.border = "2px solid red";
       return false;
    }

    else{
       ferror.innerHTML = "";
       fField.style.border = "2px solid green";
       return true;
    }
}


function validatelname(){
    if(lFeild.value === ""){
       lerror.innerHTML = "please enter the Last name";
       lFeild.style.border = "2px solid red";
       return false;
    } 

    else if(lFeild.value.length < 4 || lFeild.value.length > 15){
       lerror.innerHTML = "characters of the Last name should bemin 4 to max 15";
       lFeild.style.border = "2px solid red";
       return false;
    }

    else{
       lerror.innerHTML = "";
       lFeild.style.border = " 2px solid green";
       return true;
    }
}

function validatemail()
{
    if(emailFeild.value === ""){
       emailerror.innerHTML = "please enter the E-mail ID";
       emailFeild.style.border = "2px solid red";
       return false;
    }

    else if(!emailFeild.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
       emailerror.innerHTML = "please enter a  valid E-mail ID";
       emailFeild.style.border = "2px solid red";
       return false;
    }

    else{
       emailerror.innerHTML = "";
       emailFeild.style.border = "2px solid green"; 
       return true;
    }
}

function validatenumber(){
   if(pFeild.value === ""){
       perror.innerHTML = "please enter Your Mobile number";
       pFeild.style.border = " 2px solid red";
       return false;
   }

   else if((isNaN(pFeild.value) || pFeild.value.length < 10 || pFeild.value.length > 10 )){
       perror.innerHTML = "please enter Valid Mobile Number";
       pFeild.style.border = "2px solid red";
       return false;
   }

   else{
       perror.innerHTML = "";
       pFeild.style.border = "2px solid green";
       return true;
   }
}

function validateaddress(){
   if(addFeild.value === ""){
       adderror.innerHTML ="address cannot be blank";
       addFeild.style.borderColor = "red";
       return false;
   }

   else if(!addFeild.value.match(/^[a-z A-Z 0-9.]*$/)){
       adderror.innerHTML ="Please Enter a Valid address";
       addFeild.style.border = "2px solid red";
       return false;
   }
   
   else{
       adderror.innerHTML ="";
       addFeild.style.border = "2px solid green";
       return true;
   }
}

function validatestate()
{
   if(selectFeild.value === "-1"){
       selecterror.innerHTML = "select your state";
       selectFeild.style.border = "2px solid red";
       return false
   }

   else{
       selecterror.innerHTML = " ";
       selectFeild.style.border = "2px solid green";
       return true;
   }
}


function validatepin() {

   if(pinFeild.value === ""){
       pinerror.innerHTML = "pincode cannot be empty"; 
       pinFeild.style.border = "2px solid red";
       return false;
   }

   else if(pinFeild.value.length > 6 || pinFeild.value.length < 6){
       pinerror.innerHTML = "maximum 6 digits Required";
       pinFeild.style.border = "2px solid red";
       return false;
   }

   else{
       pinerror.innerHTML = "";
       pinFeild.style.border = "2px solid green";
       return true;
   }
 
}

function validatedistrict()
{
       if(disFeild.value === ""){
           diserror.innerHTML = "district cannot be blank";
           disFeild.style.border = "2px solid red";
           return false; 
       }

       else if(!disFeild.value.match(/^[a-z A-Z]*$/)){
           diserror.innerHTML = "District Should only contain alphabet"; 
           disFeild.style.border = "2px solid red";
           return false;
       }

       else{
           diserror.innerHTML = ""; 
           disFeild.style.border = "2px solid green";
           return true;
       }
}


form.addEventListener('submit',e=>{
     e.preventDefault();
     checkinput();
});

function checkinput() {
    const firstname = fField.value.trim();
    const Lnamevalue = lFeild.value.trim();
    const emailvalue = emailFeild.value.trim();
    const phonevalue = pFeild.value.trim();
    const gendervalue = document.formmy.gender.value;
    const addressvalue = addFeild.value.trim();
    const selectvalue = selectFeild.value.trim();
    const pincodevalue = pinFeild.value.trim();
    const disvalue = disFeild.value.trim();

    var gender = form.querySelectorAll('input[name="gender"]:checked');
    if (!gender.length) {
        generror.innerHTML = "please click your gender";
        return false;
    }
   

    var checkboxes = document.getElementsByName('checkd');
    var langerr = document.getElementById("lang-error");
    var langu = "";
    var n = 0;
    for (var i = 0; i < checkboxes.length; i++) 
    {
        if (checkboxes[i].checked) {
            langu += checkboxes[i].value + " ";
            n++;
        }
    }
    if (n == 0) {
        langerr.innerHTML ="Select the Language";
        return false;
    }


   
    document.getElementById("demo").innerHTML = "<h1>Form Data</h1>"+"<br>"
    +"First Name:"+"  "+ firstname + "<br>"
    +"Last Name:"+"  "+ Lnamevalue + "<br>"
    +"Gender:"+"  "+ gendervalue + "<br>"
    +"Email id:"+"  "+ emailvalue + "<br>"
    +"Phone Number:"+"  "+ phonevalue + "<br>"
    +"Address:"+"  "+ addressvalue + "<br>"
    +"State:"+"  "+ selectvalue + "<br>"
    +"District:"+"  "+ disvalue + "<br>"
    +"Pincode:"+"  "+ pincodevalue + "<br>"
    +"Language:"+"  "+ langu + "<br>";
}




