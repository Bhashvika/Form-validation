function register() {
    var firstname = document.querySelector('.firstname').value;
    var lastname = document.querySelector('.lastname').value;
    var email = document.querySelector('.email').value;
    var password = document.querySelector('.password').value;
    var confirmpassword = document.querySelector('.confirmpassword').value;

    document.getElementById('firsterror').textContent = '';
    document.getElementById('lasterror').textContent = '';
    document.getElementById('emailerror').textContent = '';
    document.getElementById('passworderror').textContent = '';
    document.getElementById('cpassworderror').textContent = '';

    var isValid = true;

    if (firstname.trim() === '') {
        document.getElementById('firsterror').textContent = 'Firstname is required';
        isValid = false;
    }

    if (lastname.trim() === '') {
        document.getElementById('lasterror').textContent = 'Lastname is required';
        isValid = false;
    }

    if (password.length < 8) {
        document.getElementById('passworderror').textContent = 'Password must be at least 8 characters';
        isValid = false;
    }

    if (password !== confirmpassword) {
        document.getElementById('cpassworderror').textContent = 'Passwords do not match';
        isValid = false;
    }

    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailFormat.test(email)) {
        document.getElementById('emailerror').textContent = 'Invalid email, please enter the correct one';
        isValid = false;
    }

    return isValid;
}
