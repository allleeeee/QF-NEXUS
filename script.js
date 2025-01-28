document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.querySelector(".hero-image");
    if (heroSection) {
      heroSection.style.opacity = "0";
      heroSection.style.transition = "opacity 1.5s ease-in-out";
      
      // Fade it in after a short delay
      setTimeout(() => {
        heroSection.style.opacity = "1";
      }, 100);
    }
  });



  // Get references to elements
const getInTouchBtn = document.getElementById('getInTouchBtn');
const contactModal = document.getElementById('contactModal');
const closeModalBtn = document.getElementById('closeModal');

// Open the modal when "Get in Touch" button is clicked
getInTouchBtn.addEventListener('click', () => {
  contactModal.style.display = 'block';
});

// Close the modal when the “x” is clicked
closeModalBtn.addEventListener('click', () => {
  contactModal.style.display = 'none';
});

// Close the modal if user clicks outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === contactModal) {
    contactModal.style.display = 'none';
  }
});









/**
 * Use Intersection Observer to fade in (and slide up)
 * each .timeline-item when it enters the viewport.
 */
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");

  // Intersection Observer callback
  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the "show" class to trigger the CSS transition
        entry.target.classList.add("show");
        // (Optional) unobserve once shown, so it won’t toggle again
        observer.unobserve(entry.target);
      }
    });
  };

  // Create observer with some margin so animation triggers a bit earlier
  const options = {
    root: null,           // Use browser viewport
    rootMargin: "0px 0px -20% 0px", // Trigger earlier/later as desired
    threshold: 0.1        // 10% of item must be visible
  };

  const observer = new IntersectionObserver(callback, options);

  // Observe each item
  items.forEach(item => observer.observe(item));
});
