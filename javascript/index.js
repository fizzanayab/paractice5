
$(".info-item .btn").click(function(){
  $(".container").toggleClass("log-in");
});

// $(".container-form .btn").click(function(){
//   $(".container").addClass("active");
// })

function login(){
  let username = document.getElementById("username").value
  let password = document.getElementById("password").value
  let secret = document.getElementById("secret").value
  
  let username_db = "Fizza"
  let password_db = "12345"
  let secret_code = "Riocat"

  if(username_db == username && password_db == password || secret_code == secret){
   var element = document.getElementsByClassName("container")[0]; element.classList.add("active");

  }else{
    var element = document.getElementById("myDIV");
    element.classList.toggle("mystyle"); 
  
    var element = document.getElementById("myDIV1");
    element.classList.toggle("mystyle");  }
  }
    
