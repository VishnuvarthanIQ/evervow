document.addEventListener('DOMContentLoaded', () => {
    // Password visibility toggle
    const togglePasswordBtns = document.querySelectorAll('.toggle-password');
    togglePasswordBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const input = document.getElementById(this.dataset.target);
            if (input) {
                if (input.type === 'password') {
                    input.type = 'text';
                    this.textContent = 'Hide';
                } else {
                    input.type = 'password';
                    this.textContent = 'Show';
                }
            }
        });
    });

    // Password strength indicator demo
    const passwordInput = document.getElementById('registerPassword');
    const strengthBar = document.getElementById('strengthBar');
    if (passwordInput && strengthBar) {
        passwordInput.addEventListener('input', function() {
            const val = this.value;
            let strength = 0;
            if (val.length > 5) strength += 33;
            if (val.match(/[A-Z]/) && val.match(/[0-9]/)) strength += 33;
            if (val.match(/[^a-zA-Z0-9]/)) strength += 34;
            
            strengthBar.style.width = strength + '%';
            if (strength < 34) {
                strengthBar.className = 'progress-bar bg-danger';
            } else if (strength < 67) {
                strengthBar.className = 'progress-bar bg-warning';
            } else {
                strengthBar.className = 'progress-bar bg-success';
            }
        });
    }

    // Name validation (blocks numbers and ensures minimum length)
    const nameInputs = document.querySelectorAll('#fullName, #name, .name-validation');
    nameInputs.forEach(input => {
        const validateName = () => {
            const val = input.value.trim();
            const feedback = input.nextElementSibling;
            
            if (!val) {
                input.setCustomValidity("Please enter your name.");
                input.classList.add('is-invalid');
                input.classList.remove('is-valid');
                if (feedback && feedback.classList.contains('invalid-feedback')) {
                    feedback.textContent = "Please enter your name (letters only, no numbers).";
                }
                return false;
            }
            
            // Strictly check for numbers
            if (/\d/.test(val)) {
                input.setCustomValidity("Names cannot contain numbers.");
                input.classList.add('is-invalid');
                input.classList.remove('is-valid');
                if (feedback && feedback.classList.contains('invalid-feedback')) {
                    feedback.textContent = "Numbers are not allowed in names. Please use letters only.";
                }
                return false;
            }
            
            // Letters, accents, spaces, hyphens, apostrophes, ampersands, dots (must include at least 2 letters)
            const nameRegex = /^[a-zA-Z\u00C0-\u024F\s'\-\.&]+$/;
            const letterCount = (val.match(/[a-zA-Z\u00C0-\u024F]/g) || []).length;
            if (!nameRegex.test(val) || letterCount < 2) {
                input.setCustomValidity("Please enter a valid name (at least 2 letters, no numbers).");
                input.classList.add('is-invalid');
                input.classList.remove('is-valid');
                if (feedback && feedback.classList.contains('invalid-feedback')) {
                    feedback.textContent = "Please enter a valid name (letters only, at least 2 characters).";
                }
                return false;
            }
            
            input.setCustomValidity("");
            input.classList.remove('is-invalid');
            return true;
        };

        input.addEventListener('keydown', function(e) {
            if (/^[0-9]$/.test(e.key)) {
                e.preventDefault();
                input.setCustomValidity("Numbers are not allowed in names.");
                input.classList.add('is-invalid');
                const feedback = input.nextElementSibling;
                if (feedback && feedback.classList.contains('invalid-feedback')) {
                    feedback.textContent = "Numbers are not allowed in names. Please use letters only.";
                }
            }
        });

        input.addEventListener('input', function() {
            if (/\d/.test(this.value)) {
                this.value = this.value.replace(/[0-9]/g, '');
                input.setCustomValidity("Numbers are not allowed in names.");
                input.classList.add('is-invalid');
                const feedback = input.nextElementSibling;
                if (feedback && feedback.classList.contains('invalid-feedback')) {
                    feedback.textContent = "Numbers are not allowed in names. Please use letters only.";
                }
                return;
            }
            validateName();
        });
        input.addEventListener('blur', validateName);

        const parentForm = input.closest('form');
        if (parentForm) {
            parentForm.addEventListener('submit', function(e) {
                if (!validateName()) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            }, true);
        }
    });

    // Blog Comment Form handling
    const blogCommentForm = document.getElementById('blogCommentForm');
    if (blogCommentForm) {
        blogCommentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            const successMsg = document.getElementById('blogCommentSuccess');
            if (!this.checkValidity()) {
                this.classList.add('was-validated');
                if (successMsg) successMsg.classList.add('d-none');
                return;
            }
            this.classList.remove('was-validated');
            this.querySelectorAll('.is-invalid, .is-valid').forEach(el => el.classList.remove('is-invalid', 'is-valid'));
            this.reset();
            if (successMsg) {
                successMsg.classList.remove('d-none');
                setTimeout(() => successMsg.classList.add('d-none'), 5000);
            }
        });
    }

    // Phone validation and restriction (strict 10 digits)
    const phoneInputs = document.querySelectorAll('.phone-validation, #phone');
    phoneInputs.forEach(input => {
        const validatePhone = () => {
            // Remove characters other than digits, +, spaces, -, (, )
            input.value = input.value.replace(/[^+\s\-\(\)\d]/g, '');
            
            let digitsOnly = input.value.replace(/\D/g, '');
            let normalizedDigits = digitsOnly;
            if (digitsOnly.length === 11 && digitsOnly.startsWith('1')) {
                normalizedDigits = digitsOnly.substring(1);
            }
            
            // Limit to max 10 digits (or 11 if leading 1)
            const maxAllowed = input.value.startsWith('+1') || (digitsOnly.length > 10 && digitsOnly.startsWith('1')) ? 11 : 10;
            if (digitsOnly.length > maxAllowed) {
                let count = 0;
                let sliceIndex = 0;
                for (let i = 0; i < input.value.length; i++) {
                    if (/\d/.test(input.value[i])) count++;
                    if (count === maxAllowed) {
                        sliceIndex = i + 1;
                        break;
                    }
                }
                input.value = input.value.substring(0, sliceIndex);
                digitsOnly = input.value.replace(/\D/g, '');
                normalizedDigits = (digitsOnly.length === 11 && digitsOnly.startsWith('1')) ? digitsOnly.substring(1) : digitsOnly;
            }

            const val = input.value.trim();
            const feedback = input.nextElementSibling;
            
            if (!val) {
                input.setCustomValidity("Please enter your phone number.");
                input.classList.add('is-invalid');
                input.classList.remove('is-valid');
                if (feedback && feedback.classList.contains('invalid-feedback')) {
                    feedback.textContent = "Please enter your phone number.";
                }
                return false;
            }
            
            if (normalizedDigits.length !== 10) {
                input.setCustomValidity("Please enter a valid 10-digit phone number.");
                input.classList.add('is-invalid');
                input.classList.remove('is-valid');
                if (feedback && feedback.classList.contains('invalid-feedback')) {
                    feedback.textContent = "Please enter a valid 10-digit phone number.";
                }
                return false;
            } else {
                input.setCustomValidity("");
                input.classList.remove('is-invalid');
                return true;
            }
        };

        input.addEventListener('input', validatePhone);
        input.addEventListener('blur', validatePhone);
    });
});
