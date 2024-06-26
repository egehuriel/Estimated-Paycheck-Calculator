function calculatePaycheck() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var birthDate = document.getElementById("birthDate").value;
    var birthPlace = document.getElementById("birthPlace").value;
    var languages = document.querySelectorAll('input[name="languages"]:checked');
    var driverLicense = document.querySelector('input[name="drivingLicense"]:checked');
    var university = document.getElementById("university").value;

    if (firstName === "" || lastName === "" || birthDate === "" || birthPlace === "" || languages.length === 0 || driverLicense === null || university === "") {
        document.getElementById("error").textContent = "Please fill in all required fields.";
        document.getElementById("error").style.display = "block";
        document.getElementById("paycheckResult").style.display = "none";
    } else {
        var baseSalary = 15000;
        var languageBonus = languages.length * 1000;
        var licenseBonus = driverLicense.value === "Yes" ? 1000 : 0;
        var totalSalary = baseSalary + languageBonus + licenseBonus;
        
        document.getElementById("greeting").textContent = "Hello, ";
        document.getElementById("fullName").textContent = firstName + " " + lastName + ". ";
        document.getElementById("birthInfo").textContent = "Your birth year is: " + birthDate + ". ";
        
        var languageText = "Languages you know: ";
        for (var i = 0; i < languages.length; i++) {
            languageText += languages[i].value;
            if (i !== languages.length - 1) {
                languageText += ", ";
            }
        }
        languageText += ". ";
        document.getElementById("languageInfo").textContent = languageText;
        
        document.getElementById("licenseInfo").textContent = "Do you have a driver's license? " + driverLicense.value + ". ";
        document.getElementById("universityInfo").textContent = "University you graduated from: " + university + ". ";
        document.getElementById("salaryInfo").textContent = "Your salary: " + totalSalary + " $.";

        document.getElementById("paycheckResult").style.display = "block";
        document.getElementById("error").style.display = "none";
    }
}
