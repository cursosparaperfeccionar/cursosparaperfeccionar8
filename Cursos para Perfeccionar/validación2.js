var usuario = document.forms['form']['usuario'];
var password = document.forms['form']['password'];

var usuario_error = document.getElementById('usuario_error');
var password_error = document.getElementById('password_error');

usuario.addEventListener('textInput', usuario_Verify)
password.addEventListener('textInput', password_Verify)

function validated(){
    if (usuario.value.length < 8)  {
        usuario.style.border = "1px solid red";
        usuario_error.style.display = "block"
        usuario.focus();
        return false;
    }

    if (password.value.length < 8)  {
        password.style.border = "1px solid red";
        password_error.style.display = "block"
        password.focus();
        return false;
    }
}

function usuario_Verify(){
    if (usuario.value.length >= 8)  {
        usuario.style.border = "1px solid silver";
        usuario_error.style.display = "none"
        return true;
    }
}

function password_Verify(){
    if (password.value.length >= 8)  {
        password.style.border = "1px solid silver";
        pass_error.style.display = "none"
        return true;
    }
}