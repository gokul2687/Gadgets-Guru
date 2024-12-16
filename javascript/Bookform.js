function nextStep() {
    // Step 1 validation
    const category = document.getElementById('category').value;
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const issue = document.getElementById('issue').value;

    let isValid = true;

    if (!category) {
        document.getElementById('error-category').innerText = "Please select a category.";
        isValid = false;
    } else {
        document.getElementById('error-category').innerText = "";
    }

    if (!brand) {
        document.getElementById('error-brand').innerText = "Please enter a brand.";
        isValid = false;
    } else {
        document.getElementById('error-brand').innerText = "";
    }

    if (!model) {
        document.getElementById('error-model').innerText = "Please enter a model.";
        isValid = false;
    } else {
        document.getElementById('error-model').innerText = "";
    }

    if (!issue) {
        document.getElementById('error-issue').innerText = "Please describe the issue.";
        isValid = false;
    } else {
        document.getElementById('error-issue').innerText = "";
    }

    if (isValid) {
        document.getElementById('form1').style.display = 'none';
        document.getElementById('form2').style.display = 'block';
    }
}

function submitForm() {
    // Step 2 validation
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    let isValid = true;

    if (!name) {
        document.getElementById('error-name').innerText = "Please enter your name.";
        isValid = false;
    } else {
        document.getElementById('error-name').innerText = "";
    }

    if (!phone || phone.length < 10) {
        document.getElementById('error-phone').innerText = "Please enter a valid phone number.";
        isValid = false;
    } else {
        document.getElementById('error-phone').innerText = "";
    }

    if (!email || !email.includes('@')) {
        document.getElementById('error-email').innerText = "Please enter a valid email address.";
        isValid = false;
    } else {
        document.getElementById('error-email').innerText = "";
    }

    if (isValid) {
        alert("Form submitted successfully!");
        // Send data to the backend here
    }
}

let currentStep = 1;

function nextStep() {
    if (validateStep(currentStep)) {
        document.getElementById(`form${currentStep}`).style.display = 'none';
        currentStep++;
        document.getElementById(`form${currentStep}`).style.display = 'block';
        updateProgress();
    }
}

function validateStep(step) {
    let isValid = true;
    if (step === 1) {
        ['category', 'brand', 'model', 'issue'].forEach(id => {
            const field = document.getElementById(id);
            const error = document.getElementById(`error-${id}`);
            if (!field.value.trim()) {
                error.textContent = `Please fill out the ${id} field.`;
                error.style.display = 'block';
                isValid = false;
            } else {
                error.style.display = 'none';
            }
        });
    }
    return isValid;
}

function updateProgress() {
    const steps = document.querySelectorAll('#progressbar li');
    steps.forEach((step, index) => {
        if (index + 1 <= currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}
