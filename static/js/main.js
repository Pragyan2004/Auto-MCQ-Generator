const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    });
});
const fileInput = document.getElementById('file');
const fileInfo = document.getElementById('file-info');
const dropArea = document.getElementById('drop-area');

fileInput.addEventListener('change', (e) => {
    if (e.target.files.length) {
        const fileName = e.target.files[0].name;
        fileInfo.textContent = `Selected file: ${fileName}`;
        fileInfo.style.display = 'block';
    }
});
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false);
});

function highlight() {
    dropArea.classList.add('highlight');
}

function unhighlight() {
    dropArea.classList.remove('highlight');
}

dropArea.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    fileInput.files = files;
    
    if (files.length) {
        const fileName = files[0].name;
        fileInfo.textContent = `Selected file: ${fileName}`;
        fileInfo.style.display = 'block';
    }
}
const uploadForm = document.getElementById('upload-form');
const loadingModal = document.getElementById('loading-modal');

if (uploadForm) {
    uploadForm.addEventListener('submit', () => {
        loadingModal.classList.add('active');
    });
}
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        setTimeout(() => {
            submitBtn.textContent = 'Message Sent!';
            setTimeout(() => {
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
                const successMessage = document.createElement('div');
                successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
                successMessage.style.color = 'var(--success-color)';
                successMessage.style.marginTop = '1rem';
                successMessage.style.textAlign = 'center';
                contactForm.appendChild(successMessage);
                
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }, 1500);
        }, 1500);
    });
}

const animateOnScroll = () => {
    const elements = document.querySelectorAll('.slide-in, .fade-in, .fade-in-up');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.animationPlayState = 'running';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
document.querySelectorAll('.step').forEach((step, index) => {
    step.classList.add(`delay-${index + 1}`, 'fade-in-up');
});

document.querySelectorAll('.feature-card').forEach((card, index) => {
    card.classList.add(`delay-${index % 5 + 1}`, 'fade-in-up');
});