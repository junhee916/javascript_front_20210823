const wbtn = document.getElementById("white_btn");
wbtn.addEventListener("click", function(){

    document.getElementById("target").className = "white"

})

const bbtn = document.getElementById("black_btn");
bbtn.addEventListener("click", function(){

    document.getElementById("target").className = "black"

})

const borderbtn = document.getElementById("border_btn")
borderbtn.addEventListener("click", function(){

    document.getElementById("target").classList.add("border");

})