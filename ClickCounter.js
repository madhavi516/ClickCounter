let counterValueEl = document.getElementById("counterValue");

//getting the value of the clickcount from the localStorage
let clickCount = localStorage.getItem("clickCount");

//checkking if the clickCount value exists in the localStorage or Not 
if (clickCount === null) {
    // Assigning 0 to the textContent of the counterValue if it doesn't exist 
    counterValue.textContent = 0;
} else {
    //Assigning the clickCount value to the textContent of the counterValueEl if it exists
    counterValueEl.textcontent = clickCount;
}

function onIncrementCount() {
    let previousCounterValue = counterValueEl.textContent;
    let updateCounterValue = parseInt(previousCounterValue) + 1;

    // Updating the clickCount value to the localStorage
    localStorage.setItem("clickCount", updateCounterValue);
    // Updating the counterValueEl textContent
    counterValueEl.textContent = updateCounterValue;
}