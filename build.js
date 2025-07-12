ddocument.addEventListener('DOMContentLoaded', () => {
  const selectedFrame = localStorage.getItem('selectedFrame');

  if (!selectedFrame) {
    alert('No frame selected. Redirecting back.');
    window.location.href = 'index.html';
    return;
  }

  const frameImg = document.getElementById('selectedFrame');
  frameImg.src = `Images/Frames/${selectedFrame}.webp`;
  frameImg.alt = selectedFrame.replace(/-/g, ' ');

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

  function loadParts(category) {
    partSlider.innerHTML = '';
    partsTitle.textContent = `Choose Your ${category.charAt(0).toUpperCase() + category.slice(1)}`;

    categories[category].forEach(part => {
      const img = document.createElement('img');
      img.src = `Images/Parts/${category.charAt(0).toUpperCase() + category.slice(1)}/Previews/${part.preview}`;
      img.alt = part.name;
      img.dataset.part = category;
      img.dataset.overlay = part.overlay;
      partSlider.appendChild(img);
    });

    addClickEvents();
  }

  function addClickEvents() {
    document.querySelectorAll('.part-slider img').forEach(img => {
      img.addEventListener('click', () => {
        const partType = img.dataset.part;
        const overlayFile = img.dataset.overlay;
        const overlayImg = document.getElementById(`${partType}Image`);

        if (overlayImg) {
          overlayImg.src = `Images/Parts/${partType.charAt(0).toUpperCase() + partType.slice(1)}/Overlays/${overlayFile}`;
          overlayImg.alt = img.alt;
        }
      });
    });
  }

  document.querySelectorAll('.part-menu button').forEach(button => {
    button.addEventListener('click', () => {
      const category = button.dataset.category;
      loadParts(category);
    });
  });

  // Load default category
  loadParts('forks');
});
