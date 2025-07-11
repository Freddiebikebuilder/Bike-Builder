const frames = document.querySelectorAll('.frame');
const buildArea = document.getElementById('build-area');
const selectedFrameImg = document.getElementById('selectedFrame');

frames.forEach(frame => {
  frame.addEventListener('click', () => {
    // Deselect all
    frames.forEach(f => f.classList.remove('selected'));

    // Mark clicked one
    frame.classList.add('selected');

    // Store selected frame
    const selectedFrame = frame.dataset.name;
    console.log('Selected Frame:', selectedFrame);

    // Show build area
    buildArea.style.display = 'block';

    // Update preview image and alt text
    selectedFrameImg.src = `Images/Frames/${selectedFrame}.webp`; // CAPITAL I & F here!
    selectedFrameImg.alt = selectedFrame.replace(/-/g, ' ');
  });
});
