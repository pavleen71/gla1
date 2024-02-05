var a = document.getElementById("btn");
var p = document.getElementById("password");
var n=document.getElementById("name");
function checkPassword(){
    var existingMessageContainer = document.getElementById("message-container");
    if (existingMessageContainer) {
        existingMessageContainer.remove();
    }
        messageContainer = document.createElement("p");
        messageContainer.id = "message-container";
        document.body.appendChild(messageContainer);
        
    // Check the password length
    if (p.value.length > 6) {
        // If the password is correct, display a message
        messageContainer.innerText = "You are successfully logged in with username " + n.value;
        p.style.border = "";
         p.value= "";
         n.value="";
    } else {
        // If the password is incorrect, display a message
        messageContainer.innerHTML = "Password is wrong as it must be atleast 6 characters";
        p.style.border = "3px solid red";
    }
}



a.onclick=checkPassword;
