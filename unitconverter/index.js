
function convert(){
let meter = document.getElementById("meter-el") 
let feet = document.getElementById("feet-el")
let inputNum = document.getElementById("input-num");
let liter = document.getElementById("liter-el")
let galon = document.getElementById("galon-el")
let kilo = document.getElementById("kilo-el")
let pound = document.getElementById("pound-el")
let userInput = parseInt(document.getElementById("user-input").value);

inputNum.innerText = userInput;



let meter2feet = userInput * 3.28084;
meter2feet = meter2feet.toFixed(3);
feet.innerText = userInput + " meters = " + meter2feet + " feet";

let feet2meter = userInput * 0.3048;
feet2meter = feet2meter.toFixed(3);
meter.innerText = userInput + " feet = " + feet2meter + " meters";

let liter2galon = userInput * 0.264172;
liter2galon = liter2galon.toFixed(3);
galon.innerText = userInput + " liters = " + liter2galon + " gallons";

let galon2liter = userInput * 3.78541;
galon2liter = galon2liter.toFixed(3);
liter.innerText = userInput + " gallons = " + galon2liter + " liters";

let kilo2pound = userInput * 2.20462
kilo2pound = kilo2pound.toFixed(3);
kilo.innerText = userInput + " kilo = " + kilo2pound + " pound";


let pound2kilo = userInput * 0.453592;
pound2kilo = pound2kilo.toFixed(3);
pound.innerText = userInput + " pound = " + pound2kilo + " kilo";

}

// meter2feet = inputNum * 3.28084;
// meter2feet = meter2feet.toFixed(3);
// feet.innerText = inputNum + " meters = " + meter2feet + " feet";

// feet2meter = inputNum * 0.3048;
// feet2meter = feet2meter.toFixed(3);
// meter.innerText = inputNum + " feet = " + feet2meter + " meters";

// liter2galon = inputNum * 0.264172;
// liter2galon = liter2galon.toFixed(3);
// galon.innerText = inputNum + " liters = " + liter2galon + " gallons";

// galon2liter = inputNum * 3.78541;
// galon2liter = galon2liter.toFixed(3);
// liter.innerText = inputNum + " gallons = " + galon2liter + " liters";

// kilo2pound = inputNum * 2.20462
// kilo2pound = kilo2pound.toFixed(3);
// kilo.innerText = inputNum + " kilo = " + kilo2pound + " pound";


// pound2kilo = inputNum * 0.453592;
// pound2kilo = pound2kilo.toFixed(3);
// pound.innerText = inputNum + " pound = " + pound2kilo + " kilo";
