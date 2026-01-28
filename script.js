
// Mobile Navigation Toggle
        document.getElementById('bar').addEventListener('click', function() {
            const navbar = document.getElementById('navbar');
            navbar.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('#navbar a').forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('navbar').classList.remove('active');
            });
        });