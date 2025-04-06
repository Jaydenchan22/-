// Function to load and display animal data
async function loadAnimalData() {
    try {
        const response = await fetch('/data/animals/animals.json');
        const animals = await response.json();
        const grid = document.getElementById('animals-grid');
        
        animals.forEach(animal => {
            const card = createAnimalCard(animal);
            grid.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading animal data:', error);
    }
}

// Function to create an animal card
function createAnimalCard(animal) {
    const card = document.createElement('div');
    card.className = 'data-card';
    
    // Create a link wrapper
    const link = document.createElement('a');
    link.href = `animalDetail.html?name=${encodeURIComponent(animal.name)}`;
    link.style.textDecoration = 'none';
    link.style.color = 'inherit';
    
    link.innerHTML = `
        <img src="${animal.image}" alt="${animal.name}">
        <div class="card-content">
            <h3>${animal.name}</h3>
            <p class="scientific-name">${animal.scientificName}</p>
        </div>
    `;
    
    card.appendChild(link);
    return card;
}

// Load data when the page loads
document.addEventListener('DOMContentLoaded', loadAnimalData); 