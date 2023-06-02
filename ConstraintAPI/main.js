const email = document.getElementById('email');

email.addEventListener('input', event => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity('Not an email....');
    } else {
        email.setCustomValidity('');
    } 
});