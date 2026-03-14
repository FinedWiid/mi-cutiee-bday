function showSurprise() {
    const surprise = document.getElementById('surprise');
    surprise.classList.toggle('hidden');
    
    if (!surprise.classList.contains('hidden')) {
        createConfetti();
    }
}

function createConfetti() {
    const confettiPieces = 50;
    const colors = ['#667eea', '#764ba2', '#ffeaa7', '#fdcb6e', '#e74c3c'];
    
    for (let i = 0; i < confettiPieces; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = '50%';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.zIndex = '1000';
        confetti.style.pointerEvents = 'none';
        
        document.body.appendChild(confetti);
        
        const duration = Math.random() * 3 + 2;
        const xMove = (Math.random() - 0.5) * 400;
        
        confetti.animate([
            { 
                transform: 'translateY(0) translateX(0)', 
                opacity: 1 
            },
            { 
                transform: `translateY(${window.innerHeight + 20}px) translateX(${xMove}px)`, 
                opacity: 0 
            }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        setTimeout(() => confetti.remove(), duration * 1000);
    }
}

// Create stars on page load
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const numStars = 100;
    
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', createStars);