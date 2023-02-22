// function to get data as number from input field
function getNumberFromInputById(inputId){
    const inputField = document.getElementById(inputId);
    const inputDataString = inputField.value;
    const inputNumber = parseFloat(inputDataString);
    return inputNumber;
}

// function to get text data from input field
function getTextFromInputById(inputId){
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    return inputText;    
}


document.getElementById('btn-submit').addEventListener('click', function(){
    // getting initial price amount
    const initialPrice = getNumberFromInputById('price');

    // getting coupon text
    const couponText = getTextFromInputById('coupon');


    // getting initial discount amount
    const discountInputField = document.getElementById('discount');
    const discountString = discountInputField.value;
    const discount = parseFloat(discountString);

    // getting initial payment amount
    const paymentInputField = document.getElementById('payment');
    const paymentString = paymentInputField.value;
    const paymentAmount = parseFloat(paymentString);

    
    if(couponText == 'DISC30'){
        // calculating discount as per conditional
        discountInputField.value = initialPrice * 30 / 100;
        console.log(discountInputField.value);

        // set the discount amount in the discount field
        paymentInputField.value = initialPrice - discountInputField.value;
    }
    else{
        // alert prompt for no coupon usage
        alert('It seem you dont have any coupon code yet!!!');      
        discountInputField.value = '0',
        paymentInputField.value = initialPrice;
    }
})
