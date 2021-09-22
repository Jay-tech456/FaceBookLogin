function signin() {

    var a = document.getElementById("email").value; 
    var b = document.getElementById("password").value; 

    
  let div = document.createElement('div');
    div.innerHTML = "<h4> " + "Hello " + a + " Thank you for loging in to my make up version of facebook" + "</h4>";
    document.body.appendChild(div);
}