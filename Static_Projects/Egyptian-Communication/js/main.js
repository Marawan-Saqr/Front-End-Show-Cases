// import elements
var input = document.getElementById("input");
var ul = document.getElementById("ul");
var li1 = document.getElementById("li1");
var li2 = document.getElementById("li2");
var li3 = document.getElementById("li3");
var li4 = document.getElementById("li4");
var li5 = document.getElementById("li5");
var li6 = document.getElementById("li6");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var img5 = document.getElementById("img5");
var img6 = document.getElementById("img6");
var h2 = document.getElementById("h2");
var inputData = document.getElementById("nam");
var inputData2 = document.getElementById("pass");
var inputData3 = document.getElementById("num");
var btnAccess = document.getElementById("btnAccess");
var Last = document.getElementById("Last");




// Event show
let show = () => {
    if(ul.classList.contains("display")){
        ul.classList.remove("display");
    } else {
        ul.classList.add("display");
    }
}


// Event present
let present = () => {
    if(img1.classList.contains("display")){
        img1.classList.toggle("display");
        img2.classList.add("display");
        img3.classList.add("display");
        img4.classList.add("display");
        img5.classList.add("display");
        img6.classList.add("display");
        h2.classList.remove("display");
    } else {
        img1.classList.toggle("display");
        h2.classList.add("display");
    }
}

// Event present2
let present2 = () => {
    if(img2.classList.contains("display")){
        img2.classList.toggle("display");
        img1.classList.add("display");
        img3.classList.add("display");
        img4.classList.add("display");
        img5.classList.add("display");
        img6.classList.add("display");
        h2.classList.remove("display");
    } else {
        img2.classList.toggle("display");
        h2.classList.add("display");
    }
}

// Event present3
let present3 = () => {
    if(img3.classList.contains("display")){
        img3.classList.toggle("display");
        img1.classList.add("display");
        img2.classList.add("display");
        img4.classList.add("display");
        img5.classList.add("display");
        img6.classList.add("display");
        h2.classList.remove("display");
    } else {
        img3.classList.toggle("display");
        h2.classList.add("display");
    }
}

// Event present4
let present4 = () => {
    if(img4.classList.contains("display")){
        img4.classList.toggle("display");
        img1.classList.add("display");
        img2.classList.add("display");
        img3.classList.add("display");
        img5.classList.add("display");
        img6.classList.add("display");
        h2.classList.remove("display");
    } else {
        img4.classList.toggle("display");
        h2.classList.add("display");
    }
}

// Event present5
let present5 = () => {
    if(img5.classList.contains("display")){
        img5.classList.toggle("display");
        img1.classList.add("display");
        img2.classList.add("display");
        img3.classList.add("display");
        img4.classList.add("display");
        img6.classList.add("display");
        h2.classList.remove("display");
    } else {
        img5.classList.toggle("display");
        h2.classList.add("display");
    }
}

// Event present6
let present6 = () => {
    if(img6.classList.contains("display")){
        img6.classList.toggle("display");
        img1.classList.add("display");
        img2.classList.add("display");
        img3.classList.add("display");
        img4.classList.add("display");
        img5.classList.add("display");
        h2.classList.remove("display");
    } else {
        img6.classList.toggle("display");
        h2.classList.add("display");
    }
}

let finish = () => {
    let data = inputData.value;
    let data2 = inputData2.value;
    let data3 = inputData3.value;
    if(data.trim() == 0 || inputData.value.length < 3 || inputData.value.length > 20) {
        alert("Please enter valid data");
    } else if (data2.trim() == 0 || inputData2.value.length < 3 || inputData2.value.length > 20) {
        alert("Please enter valid data");
    } else if (data3.trim() == 0 || inputData3.value.length < 3 || inputData3.value.length > 20) {
        alert("Please enter valid data");
    } else {
        last.classList.remove("display");
    }
}
















// Add events
input.addEventListener("click", show);
li1.addEventListener("click", present);
li2.addEventListener("click", present2);
li3.addEventListener("click", present3);
li4.addEventListener("click", present4);
li5.addEventListener("click", present5);
li6.addEventListener("click", present6);
btnAccess.addEventListener("click", finish);






























































