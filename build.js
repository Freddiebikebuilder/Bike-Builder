document.addEventListener('DOMContentLoaded', () => {
  const selectedFrame = localStorage.getItem('selectedFrame');

  if (selectedFrame) {
    const frameImg = document.getElementById('selectedFrame');
    frameImg.src = `Images/Frames/${selectedFrame}.webp`;
    frameImg.alt = selectedFrame.replace(/-/g, ' ');
  } else {
    alert('No frame selected. Redirecting back.');
    window.location.href = 'index.html';
  }
});

