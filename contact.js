document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  contactForm.addEventListener("submit", async function (event) {
    // 1) Prevent normal form submission
    event.preventDefault();

    // 2) Gather form data
    const formData = new FormData(contactForm);

    try {
      // 3) Send data to Formspree endpoint
      const response = await fetch(contactForm.action, {
        method: contactForm.method,
        headers: { Accept: "application/json" },
        body: formData
      });

      // 4) Check if it was successful
      if (response.ok) {
        formStatus.style.color = "green";
        formStatus.textContent = "Thank you! Your message has been sent successfully.";
        contactForm.reset(); // Clear the form
      } else {
        formStatus.style.color = "red";
        formStatus.textContent = "Oops! There was a problem submitting your form. Please try again.";
      }
    } catch (error) {
      formStatus.style.color = "red";
      formStatus.textContent = "Error sending request. Please check your internet connection.";
    }
  });
});