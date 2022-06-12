var usuario = document.forms['form']['usuario'];
var password = document.forms['form']['password'];
var nombre = document.forms['form']['nombre'];

var usuario_error = document.getElementById('usuario_error');
var password_error = document.getElementById('password_error');
var nombre_error = document.getElementById('nombre_error');

usuario.addEventListener('textInput', usuario_Verify)
password.addEventListener('textInput', password_Verify)
nombre.addEventListener('textInput', nombre_Verify)

function validated(){
    if (nombre.value.length < 10)  {
        nombre.style.border = "1px solid red";
        nombre_error.style.display = "block"
        nombre.focus();
        return false;
    }

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

function nombre_Verify(){
    if (nombre.value.length >= 10)  {
        nombre.style.border = "1px solid silver";
        nombre_error.style.display = "none"
        return true;
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