document.addEventListener('DOMContentLoaded', () => {
  const selectedFrame = localStorage.getItem('selectedFrame');

  if (!selectedFrame) {
    alert('No frame selected. Redirecting back.');
    window.location.href = 'index.html';
    return;
  }

  // Load frame image
  const frameImg = document.getElementById('selectedFrame');
  frameImg.src = `Images/Frames/${selectedFrame}.webp`;
  frameImg.alt = selectedFrame.replace(/-/g, ' ');

  // Listen for part selection
  document.querySelectorAll('.part-slider img').forEach(img => {
    img.addEventListener('click', () => {
      const partType = img.dataset.part;

      if (partType === 'fork') {
        const forkImg = document.getElementById('forkImage');
        forkImg.src = img.src;
        forkImg.alt = img.alt;
      }

      // Add more part types here if needed
    });
  });
});
