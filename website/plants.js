// Load plants data
fetch('https://raw.githubusercontent.com/YOUR_USERNAME/pui-ching-biology/main/data/plants/plants.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('plants-container');
        data.forEach(plant => {
            const card = createPlantCard(plant);
            container.appendChild(card);
        });
    })
    .catch(error => console.error('Error loading plants data:', error)); 