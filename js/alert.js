function required(inputTx) {
    const notEmpty = inputTx.value.length;
    const notString = isNaN(inputTx.value);
    if (notEmpty == 0) {
        alert('Fill the input field');
        inputTx.style.border = '3px solid red';
        inputTx.focus();
        return false;
    }
    else if (notString == true){
        alert('Fill the input field in number');
        inputTx.focus();
        return false
    }
    else true;
}

function numberRequired(inputNb) {
    if(inputNb < 0){
        alert('Fill the input field positive number');
        return false;
    }
    else true;
}
