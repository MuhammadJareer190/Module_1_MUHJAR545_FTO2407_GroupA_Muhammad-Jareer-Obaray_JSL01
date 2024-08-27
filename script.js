function validateSyntax() {
    let regEx = /^pet_[A-Z a-z 0-9]+$/;
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
    if (regEx.test(input)) {
        result = "Valid Syntax"
    }else {
        result = "Invalid Syntax"
    }
        // Check if input starts with 'pet_' and followed by alphanumeric characters

            document.getElementById('result').innerText = result;
}


