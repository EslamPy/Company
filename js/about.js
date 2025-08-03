// About Page JavaScript

// Typing animation for mission statement
function typeMissionText() {
    const missionElement = document.getElementById('mission-typing');
    const missionText = "To empower businesses through innovative technology solutions that drive growth, efficiency, and success. We believe in creating digital experiences that not only meet today's needs but anticipate tomorrow's challenges. Our commitment is to transform ideas into powerful, scalable solutions that make a real difference in the world.";
    
    if (!missionElement) return;
    
    let index = 0;
    missionElement.innerHTML = '';
    
    function typeCharacter() {
        if (index < missionText.length) {
            missionElement.innerHTML += missionText.charAt(index);
            index++;
            setTimeout(typeCharacter, 50);
        } else {
            // Remove blinking cursor after typing is complete
            setTimeout(() => {
                missionElement.style.borderRight = 'none';
            }, 1000);
        }
    }
    
    // Start typing animation
    setTimeout(typeCharacter, 1000);
}

// Initialize typing animation when mission section comes into view
const missionSection = document.querySelector('.mission-section');
if (missionSection) {
    const missionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typeMissionText();
                missionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    missionObserver.observe(missionSection);
}

// Enhanced timeline animations
gsap.utils.toArray('.timeline-item').forEach((item, i) => {
    const isEven = i % 2 === 1;
    
    gsap.fromTo(item, {
        x: isEven ? 100 : -100,
        opacity: 0,
        scale: 0.8
    }, {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
    
    // Animate the timeline date on hover
    const timelineDate = item.querySelector('.timeline-date');
    if (timelineDate) {
        timelineDate.addEventListener('mouseenter', () => {
            gsap.to(timelineDate, {
                scale: 1.1,
                rotation: 360,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
        
        timelineDate.addEventListener('mouseleave', () => {
            gsap.to(timelineDate, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    }
});

// Value cards enhanced animations
document.querySelectorAll('.value-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -15,
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
        });
        
        const icon = card.querySelector('.value-icon');
        if (icon) {
            gsap.to(icon, {
                scale: 1.1,
                rotation: 360,
                duration: 0.5,
                ease: 'power2.out'
            });
        }
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
        
        const icon = card.querySelector('.value-icon');
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

// Team stats counter animation
function animateTeamStats() {
    const statNumbers = document.querySelectorAll('.team-stats .stat-number');
    
    statNumbers.forEach(stat => {
        const text = stat.textContent;
        const hasPlus = text.includes('+');
        const hasPercent = text.includes('%');
        const number = parseInt(text.replace(/[+%]/g, ''));
        
        if (isNaN(number)) return;
        
        let current = 0;
        const increment = number / 60;
        const suffix = hasPlus ? '+' : hasPercent ? '%' : '';
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
                current = number;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + suffix;
        }, 30);
    });
}

// Trigger team stats animation
const teamSection = document.querySelector('.team-section');
if (teamSection) {
    const teamObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateTeamStats();
                teamObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    teamObserver.observe(teamSection);
}

// Parallax effect for about hero
gsap.to('.about-hero', {
    yPercent: -30,
    ease: 'none',
    scrollTrigger: {
        trigger: '.about-hero',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
    }
});

// Timeline line animation
const timelineLine = document.querySelector('.timeline::before');
if (timelineLine) {
    gsap.fromTo('.timeline::before', {
        scaleY: 0,
        transformOrigin: 'top'
    }, {
        scaleY: 1,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.timeline',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
}

console.log('📖 About page loaded successfully!');