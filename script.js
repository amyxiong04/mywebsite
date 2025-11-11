// Landing Page - Typing Animation

document.addEventListener('DOMContentLoaded', function() {
    
    // The text to type out
    const textToType = "<Hello, World. I'm Amy! />";
    const typingElement = document.getElementById('typingText');
    const cursorElement = document.getElementById('cursorBlink');
    const socialIcons = document.getElementById('socialIcons');
    const blurb = document.getElementById('blurb');
    let charIndex = 0;
    
    // Typing animation function
    function typeCharacter() {
        if (charIndex < textToType.length) {
            typingElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            
            // Random typing speed for more natural feel (80-150ms per character)
            const typingSpeed = Math.random() * 70 + 80;
            setTimeout(typeCharacter, typingSpeed);
        } else {
            // When done typing, show blurb and social icons
            setTimeout(() => {
                blurb.classList.add('visible');
                setTimeout(() => {
                    socialIcons.classList.add('visible');
                }, 300);
            }, 200);
        }
    }
    
    // Start typing after a short delay
    setTimeout(() => {
        typeCharacter();
    }, 500);
    
    // Smooth scroll for navigation
    document.querySelectorAll('.nav-item').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
    
    console.log('%c✨ Hello, World! ✨', 'font-size: 20px; color: #000000; font-weight: bold;');
    console.log('%cWelcome to Amy Xiong\'s portfolio', 'font-size: 14px; color: #000000;');
});
