const register = document.getElementById("register");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
let arr = [];
let obj ={};

register.addEventListener('click',(e)=>{
    obj.name = fullname.value;
    obj.email = email.value;
    obj.password = pass.value;
    const db = JSON.parse(localStorage.getItem('db'));
    if(db){
        db.forEach(element => {
            if(element.email === obj.email){
                email.value = "";
                 pass.value = "";
                 alert("Email already exists !!!")  
            }
        });
    }
    arr.push(obj);
    localStorage.setItem('db',JSON.stringify(arr) );
    window.location.pathname = "/login/index.html"

})