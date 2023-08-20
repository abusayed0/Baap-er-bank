console.log("js/utilities.js");

function getInputFieldValueById(inputFieldId) {
    const inputElement = document.getElementById(inputFieldId);
    const inputElementValueStr = inputElement.value;
    inputElement.value = "";
    if (isNaN(inputElementValueStr) || inputElementValueStr.length < 1) {
        return NaN;
    }
    else {
        const inputElementValue = parseFloat(inputElementValueStr);
        return inputElementValue;
    }
}

function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueStr = textElement.innerText;
    const textElementValue = parseFloat(textElementValueStr);
    return textElementValue;
}

function setTextElementValueById(elementId, value) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = value;
}
