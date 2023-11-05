document.addEventListener('DOMContentLoaded', (event) => {
    // Get all the 'a' elements within 'navbar'
    const navLinks = document.querySelectorAll('.navbar a');
    
    // Loop through each link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove 'active' class from all links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });
});
