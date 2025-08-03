// Contact Page JavaScript

// Form validation and submission
const contactForm = document.getElementById('contactForm');
const formGroups = document.querySelectorAll('.form-group');

// Form validation functions
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateField(field) {
    const formGroup = field.closest('.form-group');
    const value = field.value.trim();
    
    // Remove previous validation classes
    formGroup.classList.remove('error', 'success');
    
    if (value === '') {
        formGroup.classList.add('error');
        return false;
    }
    
    // Email specific validation
    if (field.type === 'email' && !validateEmail(value)) {
        formGroup.classList.add('error');
        return false;
    }
    
    // Message length validation
    if (field.name === 'message' && value.length < 10) {
        formGroup.classList.add('error');
        return false;
    }
    
    formGroup.classList.add('success');
    return true;
}

// Add real-time validation
formGroups.forEach(group => {
    const input = group.querySelector('input, textarea');
    if (input) {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => {
            // Remove error state while typing
            if (group.classList.contains('error')) {
                group.classList.remove('error');
            }
        });
    }
});

// Form submission
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('.submit-button');
        const formData = new FormData(contactForm);
        let isValid = true;
        
        // Validate all fields
        formGroups.forEach(group => {
            const input = group.querySelector('input, textarea');
            if (input && !validateField(input)) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            // Shake animation for invalid form
            gsap.to(contactForm, {
                x: [-10, 10, -10, 10, 0],
                duration: 0.5,
                ease: 'power2.out'
            });
            return;
        }
        
        // Loading state
        submitButton.classList.add('loading');
        submitButton.disabled = true;
        
        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Success animation
            gsap.to(contactForm, {
                scale: 0.95,
                opacity: 0.8,
                duration: 0.3,
                yoyo: true,
                repeat: 1,
                ease: 'power2.out'
            });
            
            // Reset form
            contactForm.reset();
            formGroups.forEach(group => {
                group.classList.remove('error', 'success');
            });
            
            // Show success message
            showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
            
        } catch (error) {
            showNotification('Failed to send message. Please try again.', 'error');
        } finally {
            submitButton.classList.remove('loading');
            submitButton.disabled = false;
        }
    });
}

// Notification system
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? 'rgba(46, 213, 115, 0.9)' : 'rgba(255, 71, 87, 0.9)',
        color: '#fff',
        padding: '1rem 1.5rem',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        zIndex: '10000',
        backdropFilter: 'blur(10px)',
        border: `1px solid ${type === 'success' ? '#2ed573' : '#ff4757'}`,
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease'
    });
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: #fff;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        margin-left: 1rem;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    const autoRemove = setTimeout(() => removeNotification(), 5000);
    
    function removeNotification() {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
        clearTimeout(autoRemove);
    }
    
    closeBtn.addEventListener('click', removeNotification);
}

// Enhanced form animations
document.querySelectorAll('.form-group input, .form-group textarea').forEach(field => {
    field.addEventListener('focus', () => {
        const formGroup = field.closest('.form-group');
        gsap.to(formGroup, {
            scale: 1.02,
            duration: 0.2,
            ease: 'power2.out'
        });
    });
    
    field.addEventListener('blur', () => {
        const formGroup = field.closest('.form-group');
        gsap.to(formGroup, {
            scale: 1,
            duration: 0.2,
            ease: 'power2.out'
        });
    });
});

// Contact items hover animations
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, {
            x: 15,
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
        });
        
        const icon = item.querySelector('.contact-icon');
        if (icon) {
            gsap.to(icon, {
                scale: 1.1,
                rotation: 10,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    });
    
    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            x: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
        
        const icon = item.querySelector('.contact-icon');
        if (icon) {
            gsap.to(icon, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    });
});

// Map section interactions
const mapButton = document.querySelector('.map-button');
if (mapButton) {
    mapButton.addEventListener('click', () => {
        // Open Google Maps (you can replace with actual coordinates)
        window.open('https://maps.google.com/?q=Cairo,Egypt', '_blank');
    });
    
    mapButton.addEventListener('mouseenter', () => {
        gsap.to(mapButton, {
            scale: 1.05,
            y: -2,
            duration: 0.2,
            ease: 'power2.out'
        });
    });
    
    mapButton.addEventListener('mouseleave', () => {
        gsap.to(mapButton, {
            scale: 1,
            y: 0,
            duration: 0.2,
            ease: 'power2.out'
        });
    });
}

// Parallax effect for contact hero
gsap.to('.contact-hero', {
    yPercent: -30,
    ease: 'none',
    scrollTrigger: {
        trigger: '.contact-hero',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
    }
});

// Stagger animation for contact info items
gsap.fromTo('.contact-item', {
    y: 50,
    opacity: 0,
    scale: 0.9
}, {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 0.6,
    stagger: 0.2,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.contact-info-list',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    }
});

// Form fields stagger animation
gsap.fromTo('.form-group', {
    y: 30,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    }
});

// Social links enhanced animations
document.querySelectorAll('.contact-social .social-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(link, {
            scale: 1.3,
            rotation: 360,
            duration: 0.4,
            ease: 'power2.out'
        });
    });
    
    link.addEventListener('mouseleave', () => {
        gsap.to(link, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

console.log('📞 Contact page loaded successfully!');