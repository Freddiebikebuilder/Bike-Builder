const frames = document.querySelectorAll('.frame');
const buildArea = document.getElementById('build-area');

frames.forEach(frame => {
  frame.addEventListener('click', () => {
    // Deselect all
    frames.forEach(f => f.classList.remove('selected'));

    // Mark clicked one
    frame.classList.add('selected');

    // Store selected frame (can be extended later)
    const selectedFrame = frame.dataset.name;
    console.log('Selected Frame:', selectedFrame);

    // Show build area
    buildArea.style.display = 'block';
  });
});
