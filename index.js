/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lengthResult = document.getElementById("length-result")
const volumeResult = document.getElementById("volume-result")
const massResult = document.getElementById("mass-result")
const input = document.getElementById("input")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function(){
    let inputVal = Number(input.value)
    let lengthText = `${inputVal} meters = ${roundToThree(inputVal*3.281)} feet | 
                      ${inputVal} feet = ${roundToThree(inputVal/3.281)} meters`
    let volumeText = `${inputVal} liters = ${roundToThree(inputVal*0.264)} gallons | 
                      ${inputVal} gallons = ${roundToThree(inputVal/0.264)} liters`
    let massText = `${inputVal} kilograms = ${roundToThree(inputVal*2.204)} pounds | 
                    ${inputVal} pounds = ${roundToThree(inputVal/2.204)} kilograms`
    lengthResult.textContent = lengthText
    volumeResult.textContent = volumeText
    massResult.textContent = massText
})

function roundToThree(num) {
    return num.toFixed(3);
}