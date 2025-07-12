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
      const overlayFile = img.dataset.overlay;

      if (partType === 'fork') {
        const forkImg = document.getElementById('forkImage');
        forkImg.src = `Images/Parts/Forks/Overlays/${overlayFile}`;
        forkImg.alt = img.alt;
      }

      // You can add similar blocks for wheels, drivetrain, etc.
      // Example:
      // if (partType === 'wheels') {
      //   const wheelsImg = document.getElementById('wheelsImage');
      //   wheelsImg.src = `Images/Parts/Wheels/Overlays/${overlayFile}`;
      //   wheelsImg.alt = img.alt;
      // }
    });
  });
});
