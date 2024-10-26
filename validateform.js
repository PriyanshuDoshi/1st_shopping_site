function validateform() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var phone = document.getElementById('phone').value;
    var gender = document.getElementById('gender').value;
    var language = document.getElementById('language').value;
    var address = document.getElementById('address').value;
    var zipcode = document.getElementById('zipcode').value;

    if (name === "" || email === "" || password === "" || confirmPassword === "" || phone === "" || gender === "" || language === "" || address === "" || zipcode === "") {
        alert("Please fill all details");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    
    if (!/^\d{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }
    
    if (!/^\d{5}$/.test(zipcode)) {
        alert("Please enter a valid 5-digit zip code.");
        return false;
    }

    return true;
}
