
document.addEventListener('DOMContentLoaded', () => {
    const watchBtn = document.getElementById('watch-btn');
    const rewardBox = document.getElementById('reward-box');
    const codeDisplay = document.getElementById('code-display');

    const fakeCodes = [
        'XJ49-YT88', 'GAME-2025', 'FLORY-ZON1', 'XP-BONUS7', 'KEY-RWDZ'
    ];

    watchBtn?.addEventListener('click', () => {
        watchBtn.disabled = true;
        watchBtn.innerText = 'Vidéo en cours...';
        
        // Simulation de 5 sec de "pub"
        setTimeout(() => {
            const code = fakeCodes[Math.floor(Math.random() * fakeCodes.length)];
            codeDisplay.textContent = code;
            rewardBox.style.display = 'block';
            watchBtn.style.display = 'none';
        }, 5000);
    });
});
