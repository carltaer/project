//document.getElementById("count-el").innerText = 5;
let count = 0;
let incrementBtn = document.getElementById("count-el")
let saveBtn = document.getElementById("save-el")

function increment() {
    count += 1;
    incrementBtn.innerText = count;
}

function save() {
    let countString = count + " - ";
    saveBtn.textContent += countString;
}

function clearbtn(){
    console.log("click")
    count = 0;
    incrementBtn.textContent = count;
   
}


