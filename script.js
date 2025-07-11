const frames = document.querySelectorAll('.frame');
const buildArea = document.getElementById('build-area');
const selectedFrameImg = document.getElementById('selectedFrame');
const searchInput = document.getElementById('searchInput');

frames.forEach(frame => {
  frame.addEventListener('click', () => {
    // Remove 'selected' class from all frames
    frames.forEach(f => f.classList.remove('selected'));

    // Add 'selected' class to the clicked frame
    frame.classList.add('selected');

    // Get the selected frame's data-name
    const selectedFrame = frame.dataset.name;
    console.log('Selected Frame:', selectedFrame);

    // Show the build area
    buildArea.style.display = 'block';

    // Update the preview image src and alt text
    selectedFrameImg.src = `Images/Frames/${selectedFrame}.webp`; // Match folder and capitalization exactly!
    selectedFrameImg.alt = selectedFrame.replace(/-/g, ' ');
  });
});

// Search input event to filter frames by name
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();

  frames.forEach(frame => {
    const frameName = frame.dataset.name.toLowerCase();
    if (frameName.includes(searchTerm)) {
      frame.style.display = '';  // show frame
    } else {
      frame.style.display = 'none';  // hide frame
    }
  });
});
