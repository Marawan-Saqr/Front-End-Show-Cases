let user = document.getElementById("user");
let pass = document.getElementById("pass");
let btnOk = document.getElementById("btnOk");

console.log(user, pass, btnOk);

let finish = () => {
    let data = user.value;
    let data2 = pass.value;
    if(data.trim() == 0 || user.value.length < 3 || user.value.length > 20){
        alert("Please enter your username");
    } else if(data2.trim() == 0 || pass.value.length < 3 || pass.value.length > 20){
        alert("Please enter your password");
    } else{
        alert("Success");
    }
}

btnOk.addEventListener("click", finish);



