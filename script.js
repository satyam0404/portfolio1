document.addEventListener('DOMContentLoaded', () => {

    // --- "Back to Top" button functionality ---
    const backToTopButton = document.getElementById('backToTopBtn');

    if (backToTopButton) {
        // Show or hide the button based on scroll position
        window.onscroll = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        };

        // Scroll to the top when the button is clicked
        backToTopButton.onclick = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }

    // --- Typing animation for the header ---
    const nameElement = document.querySelector('header h1');
    
    if (nameElement) {
        const nameText = nameElement.textContent;
        nameElement.textContent = ''; // Clear the text initially
        let i = 0;

        function typeWriter() {
            if (i < nameText.length) {
                nameElement.textContent += nameText.charAt(i);
                i++;
                setTimeout(typeWriter, 120); // Typing speed
            }
        }
        // Start after a short delay
        setTimeout(typeWriter, 500);
    }
});