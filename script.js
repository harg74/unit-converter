/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const oneMeter = 3.281
const oneLiter = 0.264
const oneKg = 2.204
const buttonEl = document.getElementById('button-convert')
const inputEl = document.getElementById('input-num')

const lengthEl = document.getElementById('screen-body-length')
const volumeEl = document.getElementById('screen-body-volume')
const massEl = document.getElementById('screen-body-mass')

const headerEl = document.querySelectorAll('.measure-header') //returns a NodeList of all elements that match the specified CSS selector(s).
                                                                // we use a for each to acces each one of the elements in the NodeList

function conversionUnitMetric(value, equivalance){
    return value * equivalance
}

function conversionUnitImperial(value, equivalance){
    return value / equivalance
}

function render(value){
    headerEl.forEach(element => {
        element.style.marginTop ='31px'
        
    });
      // Clear previous content to avoid appending multiple times
    lengthEl.innerHTML = `<p class="measure-header">Length (Meter/Feet)</p>`
    volumeEl.innerHTML = `<p class="measure-header">Volume (Liters/Gallons)</p>`
    massEl.innerHTML = `<p class="measure-header">Mass (Kilograms/Pounds)</p>`

    lengthEl.innerHTML += `<p class="screen-body-conversion">${value} meters = ${(conversionUnitMetric(value, oneMeter)).toFixed(3)} feet | ${value} feet = ${(conversionUnitImperial(value, oneMeter)).toFixed(3)}</p>`
    volumeEl.innerHTML += `<p class="screen-body-conversion">${value} meters = ${(conversionUnitMetric(value, oneLiter).toFixed(3))} feet | ${value} feet = ${(conversionUnitImperial(value, oneLiter)).toFixed(3)}</p>`
    massEl.innerHTML += `<p class="screen-body-conversion">${value} meters = ${(conversionUnitMetric(value, oneKg)).toFixed(3)} feet | ${value} feet = ${(conversionUnitImperial(value, oneKg)).toFixed(3)}</p>`
}

buttonEl.addEventListener('click', function(){
    const inputValue = inputEl.value
    // console.log(inputValue)
    render(inputValue)
})

document.getElementById('input-num').addEventListener('keydown', function(event) {
    let value = event.target.value;
    let key = event.key

    if (isNaN(key) && key !== 'Backspace' && key !== 'Delete' && key !== 'ArrowLeft' && key !== 'ArrowRight' && key !== 'Tab') {
        event.preventDefault();
        alert('Please enter a number.');
    }

    if (value < 0) {
        alert('Choose a number greater to 0')
    } else if ((value.toString().length) > 6){
        alert('Enter a number lower than 100,000')
        event.target.value = '';
        event.preventDefault();
    }
})

