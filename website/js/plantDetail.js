// Function to get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to load plant details
async function loadPlantDetails() {
    try {
        // Get plant name from URL parameter
        const plantName = getUrlParameter('name');
        if (!plantName) {
            console.error('No plant name provided');
            return;
        }

        // Load plant data
        const response = await fetch('/data/plants/plants.json');
        const plants = await response.json();
        
        // Find the specific plant
        const plant = plants.find(p => p.name === plantName);
        if (!plant) {
            console.error('Plant not found');
            return;
        }

        // Update the page content
        document.title = `${plant.name} - 澳門培正生物資料庫`;
        document.getElementById('plant-name').textContent = plant.name;
        document.getElementById('plant-image').src = plant.image;
        document.getElementById('plant-image').alt = plant.name;
        document.getElementById('scientific-name').textContent = plant.scientificName;
        document.getElementById('description').textContent = plant.description;
        
        // Update additional info if available
        if (plant.growth) document.getElementById('growth').textContent = plant.growth;
        if (plant.habitat) document.getElementById('habitat').textContent = plant.habitat;
        if (plant.uses) document.getElementById('uses').textContent = plant.uses;

    } catch (error) {
        console.error('Error loading plant details:', error);
    }
}

// Load details when the page loads
document.addEventListener('DOMContentLoaded', loadPlantDetails); 