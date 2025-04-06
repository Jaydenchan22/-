// Function to update the count displays
async function updateCounts() {
    try {
        // Update plants count
        const plantsResponse = await fetch('/data/plants/plants.json');
        const plantsData = await plantsResponse.json();
        const plantsCount = document.getElementById('plants-count');
        plantsCount.textContent = `${plantsData.length}筆`;

        // Update animals count
        const animalsResponse = await fetch('/data/animals/animals.json');
        const animalsData = await animalsResponse.json();
        const animalsCount = document.getElementById('animals-count');
        animalsCount.textContent = `${animalsData.length}筆`;
    } catch (error) {
        console.error('Error updating counts:', error);
    }
}

// Update counts when the page loads
document.addEventListener('DOMContentLoaded', updateCounts); 