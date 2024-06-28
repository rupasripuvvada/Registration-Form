   function validate(){
        var Form = document.getElementById('myForm');
        if (Form.username.value==""){
            alert("Please provide your username");
            Form.username.focus();
            return false;
        }
        else if(Form.email.value==""){
            alert("please provide your email");
            Form.email.focus();
            return false;
        }
        else if(Form.password.value==""){
            alert("please provide your password");
            Form.password.focus();
            return false;
        }
        else{
            alert("Submitted your registration");
            return true;
        }
    }
