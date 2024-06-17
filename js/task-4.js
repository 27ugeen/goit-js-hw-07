'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Access form elements
    const emailInput = this.elements.email;
    const passwordInput = this.elements.password;

    // Trim and get values
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    // Check if fields are empty
    if (emailValue === '' || passwordValue === '') {
      alert('All form fields must be filled in');
      return;
    }

    // Create object with form data
    const formData = {
      email: emailValue,
      password: passwordValue,
    };

    // Log form data and reset form
    console.log(formData);
    loginForm.reset();
  });
});
