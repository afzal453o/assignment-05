function getInputFieldValueById(id){
    const inputValue=document.getElementById(id).value ;
    const inputNumber=parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue=document.getElementById(id).innerText;
    const textNumber=parseFloat(textValue);
    return textNumber;
}

function btnShow(id){
    document.getElementById(id).classList.remove('hidden');
}
function btnHide(id){
    document.getElementById(id).classList.add('hidden');
}