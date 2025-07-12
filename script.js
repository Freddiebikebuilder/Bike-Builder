const frames = document.querySelectorAll('.frame');

frames.forEach(frame => {
  frame.addEventListener('click', () => {
    const selectedFrame = frame.dataset.name;
    localStorage.setItem('selectedFrame', selectedFrame); // Save frame name
    window.location.href = 'build.html'; // Redirect to build page
  });
});

