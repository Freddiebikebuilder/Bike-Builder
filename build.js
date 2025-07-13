document.addEventListener('DOMContentLoaded', () => {
  const selectedFrame = localStorage.getItem('selectedFrame');

  if (!selectedFrame) {
    alert('No frame selected. Redirecting back.');
    window.location.href = 'index.html';
    return;
  }

  const framePrices = {
    "Forbidden-Supernought": 3500,
    "Propain-Tyee": 3000,
    "Trek-Remedy": 2800,
    "Specialized-Enduro": 3200,
    "Santa-Cruz-Nomad": 3700
  };

  const frameImg = document.getElementById('selectedFrame');
  frameImg.src = `Images/Frames/${selectedFrame}.png`;
  frameImg.alt = selectedFrame.replace(/-/g, ' ');

  document.getElementById('framePrice').textContent = `Frame Price: £${framePrices[selectedFrame] || 0}`;

  const selectedPrices = {
    frame: framePrices[selectedFrame] || 0,
    forks: 0,
    wheels: 0,
    handlebars: 0,
    rearShocks: 0
  };

  function updateEstimatedPrice() {
    const total = Object.values(selectedPrices).reduce((a, b) => a + b, 0);
    document.getElementById('priceEstimate').textContent = `Estimated Price: £${total}`;
  }

  const categories = {
    forks: [
      { name: "Fox 36", preview: "Fox-36-Preview.png", overlay: "Fox-36-Overlay.png", price: 899 },
      { name: "RockShox Lyrik", preview: "RockShox-Lyrik-Preview.png", overlay: "RockShox-Lyrik-Overlay.png", price: 779 }
    ],
    wheels: [
      { name: "DT Swiss", preview: "DT-Swiss-Preview.png", overlay: "DT-Swiss-Overlay.png", price: 649 },
      { name: "Hunt Enduro", preview: "Hunt-Enduro-Preview.png", overlay: "Hunt-Enduro-Overlay.png", price: 549 }
    ],
    handlebars: [
      { name: "Race Face Atlas", preview: "Atlas-Preview.png", overlay: "Atlas-Overlay.png", price: 89 },
      { name: "Renthal Fatbar", preview: "Fatbar-Preview.png", overlay: "Fatbar-Overlay.png", price: 109 }
    ],
    rearShocks: [
      { name: "RockShox Super Deluxe", preview: "SuperDeluxe-Preview.png", overlay: "SuperDeluxe-Overlay.png", price: 499 },
      { name: "Fox DHX2 Coil", preview: "DHX2-Preview.png", overlay: "DHX2-Overlay.png", price: 629 }
    ]
  };

  const partSlider = document.getElementById('partSlider');
  const partsTitle = document.getElementById('partsTitle');
  const buttons = document.querySelectorAll('.part-menu button');

  function loadParts(category) {
    partSlider.innerHTML = '';
    partsTitle.textContent = `Choose Your ${category.charAt(0).toUpperCase() + category.slice(1)}`;

    categories[category].forEach(part => {
      const img = document.createElement('img');
      img.src = `Images/Parts/${category.charAt(0).toUpperCase() + category.slice(1)}/Previews/${part.preview}`;
      img.alt = part.name;
      img.title = part.name;
      img.dataset.overlay = part.overlay;
      img.dataset.category = category;

      img.addEventListener('click', () => {
        partSlider.querySelectorAll('img').forEach(i => i.classList.remove('selected'));
        img.classList.add('selected');

        const overlayImg = document.getElementById(`${category}Image`);
        if (overlayImg) {
          overlayImg.src = `Images/Parts/${category.charAt(0).toUpperCase() + category.slice(1)}/Overlays/${part.overlay}`;
          overlayImg.alt = part.name;
        }

        selectedPrices[category] = part.price;
        updateEstimatedPrice();
      });

      partSlider.appendChild(img);
    });
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const category = button.dataset.category;
      loadParts(category);
    });
  });

  // Load default (forks)
  loadParts('forks');
  updateEstimatedPrice();
});
