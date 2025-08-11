// Enhanced JavaScript functionality for ISMAA Website

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all functionality
    initSmoothScrolling();
    initNavbarEffects();
    initScrollAnimations();
    initContactForm();
    initNewsletterSubscription();
    
    // Smooth scrolling functionality
    function initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);
                
                if (target) {
                    const navbar = document.querySelector('.navbar');
                    const navbarHeight = navbar ? navbar.offsetHeight : 0;
                    const targetPosition = target.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Navbar effects on scroll
    function initNavbarEffects() {
        const navbar = document.querySelector('.navbar-custom');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', function() {
            const scrollY = window.scrollY;
            
            // Change navbar background
            if (scrollY > 50) {
                navbar.style.background = 'rgba(26, 35, 126, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
            } else {
                navbar.style.background = 'rgba(26, 35, 126, 0.95)';
                navbar.style.boxShadow = 'none';
            }
            
            // Update active nav link
            updateActiveNavLink();
        });
        
        function updateActiveNavLink() {
            const sections = document.querySelectorAll('section[id]');
            const scrollPos = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }
    }
    
    // Scroll animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animatedElements = document.querySelectorAll(
            '.card, .committee-member, .news-item, .hero-content > *'
        );
        
        animatedElements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = `all 0.6s ease ${index * 0.1}s`;
            observer.observe(el);
        });
    }
    
    // Contact form functionality (placeholder)
    function initContactForm() {
        const contactButtons = document.querySelectorAll('.btn-custom');
        
        contactButtons.forEach(button => {
            if (button.textContent.includes('WhatsApp')) {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    alert('WhatsApp group link will be shared via email to verified alumni members.');
                });
            }
            
            if (button.textContent.includes('Email')) {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    alert('Please contact Secretary Sanjib Ghosh for email list subscription.');
                });
            }
        });
    }
    
    // Newsletter subscription
    function initNewsletterSubscription() {
        // Add newsletter subscription functionality
        const newsletterSection = document.querySelector('#newsletter');
        if (newsletterSection) {
            // Create a simple subscription form
            const subscriptionHTML = `
                <div class="row mt-4">
                    <div class="col-lg-8 mx-auto">
                        <div class="card">
                            <div class="card-body text-center">
                                <h5><i class="fas fa-envelope-open text-primary me-2"></i>Subscribe to Newsletter</h5>
                                <p class="text-muted">Stay updated with latest news and events</p>
                                <div class="input-group mb-3">
                                    <input type="email" class="form-control" id="emailSubscription" placeholder="Enter your email address">
                                    <button class="btn btn-custom" type="button" onclick="subscribeNewsletter()">
                                        <i class="fas fa-paper-plane me-2"></i>Subscribe
                                    </button>
                                </div>
                                <small class="text-muted">* Available for verified ISM alumni only</small>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            newsletterSection.querySelector('.container').insertAdjacentHTML('beforeend', subscriptionHTML);
        }
    }
    
    // Utility functions
    window.subscribeNewsletter = function() {
        const email = document.getElementById('emailSubscription').value;
        if (email && validateEmail(email)) {
            alert(`Thank you! Newsletter subscription request for ${email} has been noted. Our team will verify your alumni status and add you to the mailing list.`);
            document.getElementById('emailSubscription').value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    };
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Add loading states
    window.showLoading = function(element) {
        const original = element.innerHTML;
        element.innerHTML = '<span class="loading-spinner"></span>';
        element.disabled = true;
        
        setTimeout(() => {
            element.innerHTML = original;
            element.disabled = false;
        }, 2000);
    };
    
    // Committee member details modal (if needed)
    window.showMemberDetails = function(memberName, position) {
        alert(`${memberName}\nPosition: ${position}\n\nFor more details, please contact the Secretary.`);
    };
    
});

// Additional utility functions
function toggleMobileMenu() {
    const navbar = document.querySelector('.navbar-collapse');
    navbar.classList.toggle('show');
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top functionality
window.addEventListener('scroll', function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        if (window.scrollY > 500) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    }
});
