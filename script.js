const convertBtn = document.getElementById("convert")
const inputError = document.getElementById("input-error")
const meter = 3.281 //feet
const litre = 0.264 //gallon
const kilogram = 2.204 //pound
let inputUnit = document.getElementById("input-number")
let LMF = document.getElementById("length-meter-feet-output")
let VLG = document.getElementById("volume-litres-gallons-output")
let MKP = document.getElementById("mass-kilograms-pounds-output")

// RESTRICT inputUnit.value to only numbers
inputUnit.addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9]/g, "");
});
  

// Unit conversion for Length(Meter/Feet)
function outputLMF() {
    let unit = Number(inputUnit.value)
    unitConversion1 = unit * meter
    unitConversion2 = unit / meter
    LMF.textContent = `${inputUnit.value} meters = ${unitConversion1.toFixed(3)} feet | ${inputUnit.value} feet = ${unitConversion2.toFixed(3)} meters`
}

// Unit conversion for Volume(Litres/Gallons)
function outputVLG() {
    let unit = Number(inputUnit.value)
    unitConversion1 = unit * litre
    unitConversion2 = unit / litre
    VLG.textContent = `${inputUnit.value} litres = ${unitConversion1.toFixed(3)} feet | ${inputUnit.value} gallons = ${unitConversion2.toFixed(3)} meters`
}

// Unit conversion for Mass(Kilogram/Pounds)
function outputMKP() {
    let unit = Number(inputUnit.value)
    unitConversion1 = unit * kilogram
    unitConversion2 = unit / kilogram
    MKP.textContent = `${inputUnit.value} kilos = ${unitConversion1.toFixed(3)} feet | ${inputUnit.value} pounds = ${unitConversion2.toFixed(3)} meters`
}

// Conversion Button
convertBtn.addEventListener("click", function() {
    if (inputUnit.value !== "") {
        outputLMF()
        outputVLG()
        outputMKP()
    } else {
        inputUnit.style.border = "2px solid #F43F5E"
        inputError.textContent = "Enter a number for conversion!"
        inputError.style.color = "#F43F5E"
        inputUnit.addEventListener("input", function() {
            inputUnit.style.border = "1px solid #B295FF"
            inputError.textContent = ""
        })
    }
})


