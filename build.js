document.addEventListener('DOMContentLoaded', () => {
  const selectedFrame = localStorage.getItem('selectedFrame');

  if (!selectedFrame) {
    alert('No frame selected. Redirecting back.');
    window.location.href = 'index.html';
    return;
  }

  // Set frame image
  const frameImg = document.getElementById('selectedFrame');
  frameImg.src = `Images/Frames/${selectedFrame}.webp`;
  frameImg.alt = selectedFrame.replace(/-/g, ' ');

  // Parts data with relative paths to previews and overlays
  const categories = {
    forks: [
      { name: "Fox 36", preview: "Fox-36-Preview.webp", overlay: "Fox-36-Overlay.webp" },
      { name: "RockShox Lyrik", preview: "RockShox-Lyrik-Preview.webp", overlay: "RockShox-Lyrik-Overlay.webp" }
    ],
    wheels: [
      { name: "DT Swiss", preview: "DT-Swiss-Preview.webp", overlay: "DT-Swiss-Overlay.webp" },
      { name: "Hunt Enduro", preview: "Hunt-Enduro-Preview.webp", overlay: "Hunt-Enduro-Overlay.webp" }
    ],
    handlebars: [
      { name: "Race Face Atlas", preview: "Atlas-Preview.webp", overlay: "Atlas-Overlay.webp" },
      { name: "Renthal Fatbar", preview: "Fatbar-Preview.webp", overlay: "Fatbar-Overlay.webp" }
    ]
  };

  const partSlider = document.getElementById('partSlider');
  const partsTitle = document.getElementById('partsTitle');
  const buttons = document.querySelectorAll('.part-menu button');

  // Function to load parts for a category
  function loadParts(category) {
    partSlider.innerHTML = '';
    partsTitle.textContent = `Choose Your ${category.charAt(0).toUpperCase() + category.slice(1)}`;

    categories[category].forEach(part => {
      const img = document.createElement('img');
      img.src = `Images/Parts/${category.charAt(0).toUpperCase() + category.slice(1)}/Previews/${part.preview}`;
      img.alt = part.name;
      img.dataset.part = category;
      img.dataset.overlay = part.overlay;
      img.title = part.name;

      img.addEventListener('click', () => {
        // Clear 'selected' class from all parts
        partSlider.querySelectorAll('img').forEach(i => i.classList.remove('selected'));
        // Mark clicked part as selected
        img.classList.add('selected');

        // Set overlay image
        const overlayImg = document.getElementById(`${category}Image`);
        if (overlayImg) {
          overlayImg.src = `Images/Parts/${category.charAt(0).toUpperCase() + category.slice(1)}/Overlays/${part.overlay}`;
          overlayImg.alt = part.name;
        }
      });

      partSlider.appendChild(img);
    });
  }

  // Sidebar buttons click handlers
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      buttons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');

      // Load parts for selected category
      const category = button.dataset.category;
      loadParts(category);
    });
  });

  // Load default category (forks)
  loadParts('forks');
});
