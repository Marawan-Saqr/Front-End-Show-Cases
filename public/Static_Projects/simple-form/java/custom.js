function loginValidation () {
    var loginForm = document.forms['login'];
    var userName  = document.forms['login']['username'].value;
    var password  = document.forms['login']['password'].value;
    
    if(userName == '' || userName == null){
        alert("please enter your name");
        return false;
    }
    
    if(userName.length < 2){
        alert("pleaser enter morethan2");
        return false;
    }
    
    if(password == '' || password == null){
        alert("please enter your password");
        return false;
    }
    
    if(password.length < 2){
        alert("pleaser enter morethan2");
    }
    
    else{
        loginForm.setAttribute('action','hello.html');
    }
    
}