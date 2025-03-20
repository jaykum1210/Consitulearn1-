document.addEventListener("DOMContentLoaded", function() {

    // Reusable hover effect function
    function addHoverEffect(elements) {
        elements.forEach(element => {
            element.addEventListener('mouseover', () => {
                element.style.transform = 'scale(1.05)';
            });
            element.addEventListener('mouseout', () => {
                element.style.transform = 'scale(1)';
            });
        });
    }

    // Apply hover effect to multiple elements
    addHoverEffect(document.querySelectorAll('.box'));
    addHoverEffect(document.querySelectorAll('.course-box'));
    addHoverEffect(document.querySelectorAll('.resource'));
    addHoverEffect(document.querySelectorAll('.intro-box'));

    // Search functionality
    const searchInput = document.querySelector('.search input');
    const searchButton = document.querySelector('.search button');

    searchButton.addEventListener('click', () => {
        const searchQuery = searchInput.value.trim().toLowerCase();
        if (searchQuery) {
            console.log('Searching for:', searchQuery);
            // Additional logic can be added here to filter/search content dynamically
        } else {
            alert('Please enter a search term');
        }
    });

    // Start button functionality
    const startButton = document.querySelector('.start');
    startButton.addEventListener('click', () => {
        alert("Starting the course...");
    });

    // Button to navigate to sub-courses
    const courseButtons = document.querySelectorAll('.button1');
    courseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const courseName = button.dataset.course || "sub-course";
            alert(`Navigating to ${courseName}...`);
        });
    });

    // Course details toggle on hover
    const introBoxDescriptions = document.querySelectorAll('.intro-box p');
    introBoxDescriptions.forEach(desc => {
        desc.style.opacity = '0'; // Initially hidden
        desc.parentElement.addEventListener('mouseover', () => {
            desc.style.opacity = '1'; // Show description on hover
        });
        desc.parentElement.addEventListener('mouseout', () => {
            desc.style.opacity = '0'; // Hide description when mouse leaves
        });
    });

    // Handle footer link effects
    const footerLinks = document.querySelectorAll('footer a');
    footerLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.textDecoration = 'underline';
        });
        link.addEventListener('mouseout', () => {
            link.style.textDecoration = 'none';
        });
    });

    // Contact us form (if applicable)
    const contactUsForm = document.querySelector('.contact-us form');
    if (contactUsForm) {
        contactUsForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert("Form submitted. We'll get back to you soon!");
            this.reset(); // Clears the form fields
        });
    }

});
