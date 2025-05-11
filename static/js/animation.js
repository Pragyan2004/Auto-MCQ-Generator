const floatingImage = document.querySelector('.floating-image');
if (floatingImage) {
    floatingImage.style.animation = 'floating 3s ease-in-out infinite';
}

document.querySelectorAll('.step, .feature-card, .testimonial-card, .mcq-card').forEach(card => {
    card.classList.add('hover-grow');
});

document.querySelectorAll('.member-image').forEach(member => {
    member.classList.add('hover-rotate');
});

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.classList.add('hover-grow');
    });
    
    btn.addEventListener('mouseleave', () => {
        setTimeout(() => {
            btn.classList.remove('hover-grow');
        }, 300);
    });
});

const scrollReveal = () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
};
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
});

window.addEventListener('scroll', scrollReveal);
window.addEventListener('load', scrollReveal);
const typeWriter = (element, text, speed) => {
    let i = 0;
    element.textContent = '';
    
    const typing = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    };
    
    typing();
};
