
// Event listener untuk tombol
document.getElementById('forgiveBtn').addEventListener('click', function() {
  const popup = document.getElementById('popupMessage');
  popup.classList.remove('hidden');
  this.style.display = 'none';
  
  // Tambahkan konfeti
  createConfetti();
});

// Fungsi untuk membuat konfeti
function createConfetti() {
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = randomColor();
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-10px';
    confetti.style.borderRadius = '50%';
    document.body.appendChild(confetti);

    const animation = confetti.animate([
      { transform: 'translateY(0vh) rotate(0deg)' },
      { transform: `translateY(100vh) rotate(${Math.random() * 360}deg)` }
    ], {
      duration: Math.random() * 2000 + 1000,
      easing: 'linear'
    });

    animation.onfinish = () => confetti.remove();
  }
}

// Fungsi untuk warna random
function randomColor() {
  const colors = ['#ff9a9e', '#fad0c4', '#ff4b4b', '#ffffff'];
  return colors[Math.floor(Math.random() * colors.length)];
}
