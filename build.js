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

  const partSlider = document.getElementById('partSlider');
  const partsTitle = document.getElementById('partsTitle');

  const partsData = {
    forks: [
      {
        preview: 'Fox-36-Preview.webp',
        overlay: 'Fox-36-Overlay.webp',
        name: 'Fox 36'
      },
      {
        preview: 'RockShox-Lyrik-Preview.webp',
        overlay: 'RockShox-Lyrik-Overlay.webp',
        name: 'RockShox Lyrik'
      }
    ],
    wheels: [
      {
        preview: 'DT-Swiss-Preview.webp',
        overlay: 'DT-Swiss-Overlay.webp',
        name: 'DT Swiss'
      },
      {
        preview: 'Hunt-Enduro-Preview.webp',
        overlay: 'Hunt-Enduro-Overlay.webp',
        name: 'Hunt Enduro'
      }
    ],
    handlebars: [
      {
        preview: 'RaceFace-Atlas-Preview.webp',
        overlay: 'RaceFace-Atlas-Overlay.webp',
        name: 'RaceFace Atlas'
      },
      {
        preview: 'Renthal-Fatbar-Preview.webp',
        overlay: 'Renthal-Fatbar-Overlay.webp',
        name: 'Renthal Fatbar'
      }
    ]
  };

  // Load part images into slider
  function loadParts(category) {
    partSlider.innerHTML = '';
    partsTitle.textContent = `Choose Your ${category.charAt(0).toUpperCase() + category.slice(1)}`;

    partsData[category].forEach(part => {
      const img = document.createElement('img');
      img.src = `Images/Parts/${capitalize(category)}/Previews/${part.preview}`;
      img.alt = part.name;
      img.dataset.part = category;
      img.dataset.overlay = part.overlay;
      img.classList.add('part-option');
      partSlider.appendChild(img);
    });

    attachPartClickListeners();
  }

  // Capitalize function for folder names
  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  // Add overlay when part is clicked
  function attachPartClickListeners() {
    document.querySelectorAll('.part-slider img').forEach(img => {
      img.addEventListener('click', () => {
        const partType = img.dataset.part;
        const overlayFile = img.dataset.overlay;
        const overlayImg = document.getElementById(`${partType}Image`);

        if (overlayImg) {
          overlayImg.src = `Images/Parts/${capitalize(partType)}/Overlays/${overlayFile}`;
          overlayImg.alt = img.alt;
        }
      });
    });
  }

  // Listen for sidebar clicks
  document.querySelectorAll('.part-menu button').forEach(button => {
    button.addEventListener('click', () => {
      const category = button.dataset.category;
      loadParts(category);
    });
  });

  // Load default category
  loadParts('forks');
});
