document.addEventListener('DOMContentLoaded', function() {
    // Select all navbar links
    const navLinks = document.querySelectorAll('.navbar-nav a, .navbar-brand');

    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor behavior
            e.preventDefault();

            // Get the target element's id from the href attribute
            const targetId = this.getAttribute('href').substring(1);

            // Scroll to the target element
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });

            // Remove 'active' class from all nav-links
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });

            // Add 'active' class to the clicked nav-link
            this.classList.add('active');
        });
    });

    // Highlight active section in navbar on scroll
    document.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        let shrinkNavbar = false; // Flag to determine if navbar should shrink

        // Iterate through each section to check its position relative to scroll
        document.querySelectorAll('section').forEach(section => {
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.navbar-nav a[href="#${sectionId}"]`);

            // Check if section is in viewport
            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                // Add 'active' class to corresponding navbar link
                navLink.classList.add('active');
                
                // Set flag to shrink navbar if scroll position is greater than 0
                shrinkNavbar = scrollPosition > 0;
            } else {
                // Remove 'active' class from corresponding navbar link
                navLink.classList.remove('active');
            }
        });

        // Add or remove 'shrink' class based on flag value
        const navbar = document.querySelector('.navbar');
        if (shrinkNavbar) {
            navbar.classList.add('shrink');
        } else {
            navbar.classList.remove('shrink');
        }
    });
});

$(".card").hover(function(){
    $(".card").removeClass("active");
    $(this).addClass("active");
    
});