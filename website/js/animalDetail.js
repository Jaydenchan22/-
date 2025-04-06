// Function to get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to load animal details
async function loadAnimalDetails() {
    try {
        // Get animal name from URL parameter
        const animalName = getUrlParameter('name');
        if (!animalName) {
            console.error('No animal name provided');
            return;
        }

        // Load animal data
        const response = await fetch('/data/animals/animals.json');
        const animals = await response.json();
        
        // Find the specific animal
        const animal = animals.find(a => a.name === animalName);
        if (!animal) {
            console.error('Animal not found');
            return;
        }

        // Update the page content
        document.title = `${animal.name} - 澳門培正生物資料庫`;
        document.getElementById('animal-name').textContent = animal.name;
        document.getElementById('animal-image').src = animal.image;
        document.getElementById('animal-image').alt = animal.name;
        document.getElementById('scientific-name').textContent = animal.scientificName;
        document.getElementById('description').textContent = animal.description;
        
        // Update additional info if available
        if (animal.habits) document.getElementById('habits').textContent = animal.habits;
        if (animal.habitat) document.getElementById('habitat').textContent = animal.habitat;
        if (animal.conservation) document.getElementById('conservation').textContent = animal.conservation;

    } catch (error) {
        console.error('Error loading animal details:', error);
    }
}

// Load details when the page loads
document.addEventListener('DOMContentLoaded', loadAnimalDetails); 