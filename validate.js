function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) != null;
}

function validateName(name) {
    return String(name)
      .match(
        /^[a-zA-Z\s]*$/
    ) != null;
}

function validateUName(name) {
    return String(name)
      .match(
        /^[a-zA-Z0-9_-]{5,15}$/
    ) != null;
}


function grabAttention(elem) {
    elem.style.borderColor = "red";
    elem.style.boxShadow = "0 0 1rem red"
    
    setTimeout(() => {
        elem.style.borderColor = "black";
        elem.style.boxShadow = "none"
    }, 5000)
}

function validateForm() {

    var name = document.querySelector("#fname").value;
    var mail = document.querySelector("#mail").value;
    var numb = document.querySelector("#number").value;
    var password = document.querySelector("#password").value;
    var confpassword = document.querySelector("#confpassword").value;
    var uname = document.querySelector("#uname").value;
    var roll = document.querySelector("#roll").value;


    
    console.log(name)
    console.log(mail)
    console.log(numb)
    console.log(password)
    console.log(confpassword)
    console.log(uname)
    console.log(roll)


    if (!validateName(name)) {
        alert("Your Name should contain alphabet only")
        grabAttention(document.querySelector("#fname"))
        return false
    }
    if (!validateUName(uname)) {
        alert("User name should consist of alphabet number and under score only");
        grabAttention(document.querySelector("#uname"))
        return false
    }
    if(uname.length<5||uname.length>15)
    {
        alert("Size of Username should be between 5-15 only")
        grabAttention(document.querySelector("#uname"))
        return false
    }
    
    if (!validateEmail(mail)) {
        alert("Enter email in proper email format")
        grabAttention(document.querySelector("#mail"))
        return false
    }
    if (roll.length != 9) {
        alert("Wrong Roll Number");
        grabAttention(document.querySelector("#roll"))
        return false
    }
    if (isNaN(numb)) { 
        
        alert("Enter only numbers")
        grabAttention(document.querySelector("#number"))
        return false
    }
    if(numb.length!=10)
    {
        alert("Number length should be 10");
        grabAttention(document.querySelector("#number"))
        return false;
    }
    if (password != confpassword) {
        alert("The passwords don't match");
        grabAttention(document.querySelector("#confpassword"))
        return false
    }  
    if (password.length<8) {
        alert("Password should be of atleast 8 characters");
        grabAttention(document.querySelector("#password"))
        return false
    }  
    if (document.querySelectorAll("input[type=radio]:checked").length == 0) {
        alert("Enter Gender");
        return false     
    }
    return true;
}
