// Function to load and display plant data
async function loadPlantData() {
    try {
        const response = await fetch('/data/plants/plants.json');
        const plants = await response.json();
        const grid = document.getElementById('plants-grid');
        
        plants.forEach(plant => {
            const card = createPlantCard(plant);
            grid.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading plant data:', error);
    }
}

// Function to create a plant card
function createPlantCard(plant) {
    const card = document.createElement('div');
    card.className = 'data-card';
    
    // Create a link wrapper
    const link = document.createElement('a');
    link.href = `plantDetail.html?name=${encodeURIComponent(plant.name)}`;
    link.style.textDecoration = 'none';
    link.style.color = 'inherit';
    
    link.innerHTML = `
        <img src="${plant.image}" alt="${plant.name}">
        <div class="card-content">
            <h3>${plant.name}</h3>
            <p class="scientific-name">${plant.scientificName}</p>
        </div>
    `;
    
    card.appendChild(link);
    return card;
}

// Load data when the page loads
document.addEventListener('DOMContentLoaded', loadPlantData); 