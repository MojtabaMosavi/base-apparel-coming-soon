const form = document.querySelector('form')
const submitButton = document.querySelector('#submit')

function validateEmail(input) {
    const emailRex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (emailRex.test(input)) {
        return true;
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (validate()) {
    } else {
        null;
    }
})

function validate() {
    const emailHelp = document.querySelector('#email-help')
    const emailField = document.querySelector('#email')


    if (emailField.value == '') {
        emailHelp.classList.add('helpText')
        emailField.classList.add('invalid')
        emailHelp.innerHTML = " Please provide a valid email"
        return false;
    }
    if (!validateEmail(emailField.value)) {
        emailHelp.classList.add('helpText')
        emailField.classList.add('invalid')
        emailHelp.innerHTML = " Please provide a valid email"
        return false;
    }
    else {
        emailHelp.classList.remove('help')
        emailField.classList.remove('invalid')
        emailHelp.innerHTML = ""
        return true;
    }

} 
