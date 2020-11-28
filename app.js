console.log("hello from app.js!!!")

let menuBtn = document.getElementById('hamburger')
let modal = document.getElementById('mobile')
let closeBtn = document.getElementById('closeBtn');
let mobileLink1 = document.getElementById('m1');
let mobileLink2 = document.getElementById('m2');
let mobileLink3 = document.getElementById('m3');

menuBtn.addEventListener("click", function(){
    modal.style.display = "block";
})

closeBtn.addEventListener("click", function(){
    modal.style.display = "none";
})


mobileLink1.addEventListener("click", function(){
    modal.style.display = "none";
})
mobileLink2.addEventListener("click", function(){
    modal.style.display = "none";
})
mobileLink3.addEventListener("click", function(){
    modal.style.display = "none";
})