const frames = document.querySelectorAll('.frame');
const buildArea = document.getElementById('build-area');
const selectedFrameImg = document.getElementById('selectedFrame');

frames.forEach(frame => {
  frame.addEventListener('click', () => {
    frames.forEach(f => f.classList.remove('selected'));
    frame.classList.add('selected');

    const selectedFrame = frame.dataset.name;
    console.log('Selected Frame:', selectedFrame);

    buildArea.style.display = 'block';

    // Update image path with capitalized folder names
    selectedFrameImg.src = `Images/Frames/${selectedFrame}.webp`;
    selectedFrameImg.alt = selectedFrame.replace(/-/g, ' ');
  });
});
