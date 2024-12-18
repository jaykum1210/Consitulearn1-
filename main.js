document.addEventListener("DOMContentLoaded", function() {

    // Toggle hover effects for boxes
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.transform = 'scale(1.05)';
        });
        box.addEventListener('mouseout', () => {
            box.style.transform = 'scale(1)';
        });
    });

    // Toggle hover effects for course boxes
    const courseBoxes = document.querySelectorAll('.course-box');
    courseBoxes.forEach(courseBox => {
        courseBox.addEventListener('mouseover', () => {
            courseBox.style.transform = 'scale(1.05)';
        });
        courseBox.addEventListener('mouseout', () => {
            courseBox.style.transform = 'scale(1)';
        });
    });

    // Toggle hover effects for resource boxes
    const resources = document.querySelectorAll('.resource');
    resources.forEach(resource => {
        resource.addEventListener('mouseover', () => {
            resource.style.transform = 'scale(1.05)';
        });
        resource.addEventListener('mouseout', () => {
            resource.style.transform = 'scale(1)';
        });
    });

    // Search functionality
    const searchInput = document.querySelector('.search input');
    const searchButton = document.querySelector('.search button');

    searchButton.addEventListener('click', () => {
        const searchQuery = searchInput.value.trim().toLowerCase();
        if (searchQuery) {
            alert('Search query: ' + searchQuery);
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
            alert('Navigating to sub-course...');
        });
    });

    // Course type hover effects
    const introBoxes = document.querySelectorAll('.intro-box');
    introBoxes.forEach(introBox => {
        introBox.addEventListener('mouseover', () => {
            introBox.style.transform = 'scale(1.05)';
        });
        introBox.addEventListener('mouseout', () => {
            introBox.style.transform = 'scale(1)';
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

    // Handle the footer links
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
        });
    }

});
