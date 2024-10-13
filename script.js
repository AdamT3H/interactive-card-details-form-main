const form = document.getElementById('cardForm');
const confirmBtn = document.getElementById('confirmBtn');

document.getElementById('cvc').addEventListener('input', function (e) {
    let value = e.target.value;
    
    if (value.length > 3) {
        e.target.value = value.slice(0, 3); 
    }
});

document.getElementById('cardNumberInput').addEventListener('input', function (e) {
    let value = e.target.value;
    
    // Обрізаємо введення до 16 символів
    if (value.length > 16) {
        e.target.value = value.slice(0, 16); 
    }
});

document.getElementById('expiryDateMonth').addEventListener('input', function (e) {
    let value = e.target.value;
    
    // Обрізаємо введення до 16 символів
    if (value.length > 2) {
        e.target.value = value.slice(0, 2); 
    }
});

document.getElementById('expiryDateYear').addEventListener('input', function (e) {
    let value = e.target.value;
    
    // Обрізаємо введення до 16 символів
    if (value.length > 2) {
        e.target.value = value.slice(0, 2); 
    }
});

document.getElementById('confirmBtn').addEventListener('click', function () {
    const cardholderName = document.getElementById('cardholderName').value;
    const cardNumber = document.getElementById('cardNumberInput').value;
    const expiryDateMonth = document.getElementById('expiryDateMonth').value;
    const expiryDateYear = document.getElementById('expiryDateYear').value;
    const cvc = document.getElementById('cvc').value;

    document.getElementById('cardName').textContent = cardholderName;
    document.getElementById('cardNumber').textContent = formatCardNumber(cardNumber);
    document.getElementById('cardExpiryMonth').textContent = expiryDateMonth;
    document.getElementById('cardExpiryYear').textContent = expiryDateYear;
    document.getElementById('cardCVC').textContent = cvc;
});

function formatCardNumber(cardNumber) {
    return cardNumber.replace(/(\d{4})(?=\d)/g, '$1 '); 
};

document.getElementById("confirmBtn").addEventListener("click", function() {
    document.getElementById("cardForm").style.display = "none"; // ховаємо форму
    document.getElementById("success-checkmark").style.display = "block";
    document.getElementById("text-success-checkmark").style.display = "block"; // показуємо галочку
});

const cardNumberInput = document.getElementById('cardNumberInput');
const expiryDateYear = document.getElementById('expiryDateYear');
const expiryDateMonth = document.getElementById("expiryDateMonth");
const cvc =  document.getElementById("cvc");


function validateForm() {
    const cardNumberValid = cardNumberInput.value.length === 16;
    const monthValid = expiryDateMonth.value.length === 2;
    const yearValid = expiryDateYear.value.length === 2;
    const cvcValid = cvc.value.length === 3;
    const monthLowerThan12 = expiryDateMonth.value < 13;
    
    if (cardNumberValid && monthValid && yearValid && cvcValid && monthLowerThan12) {
        confirmBtn.disabled = false;
    } else {
        confirmBtn.disabled = true;
    }
}

cardNumberInput.addEventListener('input', function (e) {
    let value = e.target.value;

    if (value.length > 16) {
        e.target.value = value.slice(0, 16); 
    }

    validateForm();
});

expiryDateMonth.addEventListener('input', function (e) {
    let value = e.target.value;
    
    if (value.length > 2) {
        e.target.value = value.slice(0, 2); 
    }

    validateForm();
});

expiryDateYear.addEventListener('input', function (e) {
    let value = e.target.value;
    
    if (value.length > 2) {
        e.target.value = value.slice(0, 2); 
    }

    validateForm();
});

cvc.addEventListener('input', function (e) {
    let value = e.target.value;
    
    if (value.length > 3) {
        e.target.value = value.slice(0, 3); 
    }

    validateForm();
});

