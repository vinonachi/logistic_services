    document.addEventListener('DOMContentLoaded', function () {
        const contactForm = document.getElementById('contactForm');

        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            const errorMessages = document.querySelectorAll('.help-block.text-danger');
            errorMessages.forEach(errorMessage => {
                errorMessage.textContent = '';
            });

            let isValid = true;

            if (!name) {
                showError('name', 'Please enter your name');
                isValid = false;
            }

            if (!email) {
                showError('email', 'Please enter your email');
                isValid = false;
            } else if (!validateEmail(email)) {
                showError('email', 'Please enter a valid email');
                isValid = false;
            }

            if (!subject) {
                showError('subject', 'Please enter a subject');
                isValid = false;
            }

            if (!message) {
                showError('message', 'Please enter your message');
                isValid = false;
            }

            if (isValid) {
                // Here you can handle the form submission, e.g., send the data to your server
                alert('Form submitted successfully!');
                contactForm.reset();
            }
        });

        function showError(inputId, message) {
            const inputElement = document.getElementById(inputId);
            const errorMessageElement = inputElement.nextElementSibling;
            errorMessageElement.textContent = message;
        }

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }
    });

    document.addEventListener('DOMContentLoaded', function () {
        const paragraph = document.getElementById('animated-paragraph');
        const text = paragraph.textContent;
        paragraph.textContent = '';
    
        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            if (text[i] === ' ') {
                span.innerHTML = '&nbsp;';
            } else {
                span.textContent = text[i];
            }
            span.style.animationDelay = `${i * 0.03}s`;
            span.className = 'animated-char';
            paragraph.appendChild(span);
        }
    });
    
    
