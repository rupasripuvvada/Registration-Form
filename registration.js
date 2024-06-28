   function validate(){
        var Form = document.getElementById('myForm');
        if (Form.username.value==""){
            Form.username.focus();
            return false;
        }
        else if(Form.email.value==""){
            Form.email.focus();
            return false;
        }
        else if(Form.password.value==""){
            Form.password.focus();
            return false;
        }
        else{
            alert("Thank you for registering");
            return true;
        }
    }
