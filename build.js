document.addEventListener('DOMContentLoaded', () => {
  const selectedFrame = localStorage.getItem('selectedFrame');

  if (!selectedFrame) {
    alert('No frame selected. Redirecting back.');
    window.location.href = 'index.html';
    return;
  }

  // Load selected frame image
  const frameImg = document.getElementById('selectedFrame');
  frameImg.src = `Images/Frames/${selectedFrame}.webp`;
  frameImg.alt = selectedFrame.replace(/-/g, ' ');

  // Listen for part selection
  document.querySelectorAll('.part-slider img').forEach(img => {
    img.addEventListener('click', () => {
      const partType = img.dataset.part;
      const overlayFile = img.dataset.overlay; // get overlay filename

      if (partType === 'fork') {
        const forkImg = document.getElementById('forkImage');
        forkImg.src = `Images/Parts/Forks/${overlayFile}`;
        forkImg.alt = img.alt;
      }

      // Add more part types here as needed
    });
  });
});
