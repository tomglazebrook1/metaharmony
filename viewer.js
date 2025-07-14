// Combined viewer.js
const viewers = [
  {
    id: 'mainImage',
    images: [
      ['Gmaj.png', 'Emaj.png', 'Dbmaj.png', 'Bbmaj.png'],
      ['Cmaj.png', 'Amaj.png', 'Gbmaj.png', 'Ebmaj.png'],
      ['Fmaj.png', 'Dmaj.png', 'Bmaj.png', 'Abmaj.png']
    ],
    basePath: '../imagesviewer/'
  },
  {
    id: 'secondImage',
    images: [
      ['Gmaj2.png', 'Emaj2.png', 'Dbmaj2.png', 'Bbmaj2.png'],
      ['Cmaj2.png', 'Amaj2.png', 'Gbmaj2.png', 'Ebmaj2.png'],
      ['Fmaj2.png', 'Dmaj2.png', 'Bmaj2.png', 'Abmaj2.png']
    ],
    basePath: '../imagesviewer/'
  }
];

let currentLevel = 1;     // Start at the middle level
let currentIndex = 0;     // Start at the first image in the middle

// Function to update all images
function updateImages() {
  viewers.forEach(viewer => {
    const imageElement = document.getElementById(viewer.id);
    if (imageElement) {
      const file = `${viewer.basePath}${viewer.images[currentLevel][currentIndex]}`;
      console.log(`Loading ${viewer.id}:`, file);
      imageElement.src = file;
    }
  });
}

// Navigation functions
function moveUp() {
  if (currentLevel > 0) {
    currentLevel--;
    updateImages();
  }
}

function moveDown() {
  if (currentLevel < 2) {
    currentLevel++;
    updateImages();
  }
}

function moveRight() {
  currentIndex = (currentIndex + 1) % 4;  // Wrap around right
  updateImages();
}

function moveLeft() {
  currentIndex = (currentIndex - 1 + 4) % 4;  // Wrap around left
  updateImages();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Initialize images
  updateImages();
  
  // Set up keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
      moveUp();
    } else if (e.key === 'ArrowDown') {
      moveDown();
    } else if (e.key === 'ArrowRight') {
      moveRight();
    } else if (e.key === 'ArrowLeft') {
      moveLeft();
    }
  });
  
  // Set up button navigation
  const upBtn = document.getElementById('upBtn');
  const downBtn = document.getElementById('downBtn');
  const leftBtn = document.getElementById('leftBtn');
  const rightBtn = document.getElementById('rightBtn');
  
  if (upBtn) upBtn.addEventListener('click', moveUp);
  if (downBtn) downBtn.addEventListener('click', moveDown);
  if (leftBtn) leftBtn.addEventListener('click', moveLeft);
  if (rightBtn) rightBtn.addEventListener('click', moveRight);
});