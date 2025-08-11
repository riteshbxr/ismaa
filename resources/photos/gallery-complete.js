// Enhanced Photo Gallery Script with automatic photo loading
// This script automatically loads all photos from the ISMAA Meet July 25 folder

class PhotoGallery {
    constructor(galleryContainer) {
        this.container = document.getElementById(galleryContainer);
        this.photos = [];
    }

    addPhoto(photoData) {
        this.photos.push(photoData);
        this.renderPhoto(photoData);
    }

    renderPhoto(photo) {
        const photoItem = document.createElement('div');
        photoItem.className = 'gallery-item';
        
        photoItem.innerHTML = `
            <a href="${photo.url}" data-lightbox="ismaa-gallery" data-title="${photo.title} - ${photo.description}">
                <img src="${photo.url}" alt="${photo.alt}" loading="lazy">
                <div class="gallery-overlay">
                    <i class="fas fa-expand"></i>
                </div>
            </a>
            <div class="gallery-info">
                <h5>${photo.title}</h5>
                <p>${photo.description}</p>
            </div>
        `;
        
        if (this.container) {
            this.container.appendChild(photoItem);
        }
    }

    reloadGallery() {
        if (this.container) {
            this.container.innerHTML = '';
            this.photos.forEach(photo => this.renderPhoto(photo));
        }
    }
}

// Complete photo data with all photos from July 2025 meet
const photoData = [
    {
        url: 'Family meet at Clark Exotica.jpg',
        title: 'Family Meet',
        description: 'Clark Exotica Gathering',
        alt: 'Family Meet at Clark Exotica',
        category: 'events',
        date: '2024'
    }
];

// Automatically generate photo data for all July 2025 meet photos
const julyMeetPhotos = [
    'SVB_9214.JPG', 'SVB_9215.JPG', 'SVB_9216.JPG', 'SVB_9217.JPG', 'SVB_9218.JPG',
    'SVB_9219.JPG', 'SVB_9220.JPG', 'SVB_9222.JPG', 'SVB_9223.JPG', 'SVB_9224.JPG',
    'SVB_9225.JPG', 'SVB_9226.JPG', 'SVB_9227.JPG', 'SVB_9229.JPG', 'SVB_9230.JPG',
    'SVB_9231.JPG', 'SVB_9232.JPG', 'SVB_9233.JPG', 'SVB_9234.JPG', 'SVB_9235.JPG',
    'SVB_9236.JPG', 'SVB_9237.JPG', 'SVB_9238.JPG', 'SVB_9239.JPG', 'SVB_9241.JPG',
    'SVB_9242.JPG', 'SVB_9243.JPG', 'SVB_9244.JPG', 'SVB_9246.JPG', 'SVB_9247.JPG',
    'SVB_9249.JPG', 'SVB_9250.JPG', 'SVB_9251.JPG', 'SVB_9252.JPG', 'SVB_9253.JPG',
    'SVB_9254.JPG', 'SVB_9255.JPG', 'SVB_9257.JPG', 'SVB_9258.JPG', 'SVB_9260.JPG',
    'SVB_9261.JPG', 'SVB_9262.JPG', 'SVB_9264.JPG', 'SVB_9265.JPG', 'SVB_9266.JPG',
    'SVB_9267.JPG', 'SVB_9269.JPG', 'SVB_9270.JPG', 'SVB_9271.JPG', 'SVB_9273.JPG',
    'SVB_9274.JPG', 'SVB_9275.JPG', 'SVB_9276.JPG', 'SVB_9277.JPG', 'SVB_9278.JPG',
    'SVB_9280.JPG', 'SVB_9281.JPG', 'SVB_9282.JPG', 'SVB_9283.JPG', 'SVB_9284.JPG',
    'SVB_9285.JPG', 'SVB_9286.JPG', 'SVB_9287.JPG', 'SVB_9288.JPG', 'SVB_9289.JPG',
    'SVB_9291.JPG', 'SVB_9293.JPG', 'SVB_9294.JPG', 'SVB_9296.JPG', 'SVB_9297.JPG',
    'SVB_9298.JPG', 'SVB_9299.JPG', 'SVB_9300.JPG', 'SVB_9303.JPG', 'SVB_9304.JPG',
    'SVB_9305.JPG', 'SVB_9306.JPG', 'SVB_9307.JPG', 'SVB_9308.JPG', 'SVB_9310.JPG',
    'SVB_9312.JPG', 'SVB_9313.JPG', 'SVB_9314.JPG', 'SVB_9315.JPG', 'SVB_9316.JPG',
    'SVB_9317.JPG', 'SVB_9318.JPG', 'SVB_9319.JPG', 'SVB_9321.JPG', 'SVB_9322.JPG',
    'SVB_9323.JPG', 'SVB_9324.JPG', 'SVB_9325.JPG', 'SVB_9326.JPG', 'SVB_9330.JPG',
    'SVB_9332.JPG', 'SVB_9334.JPG', 'SVB_9336.JPG', 'SVB_9338.JPG', 'SVB_9339.JPG',
    'SVB_9340.JPG', 'SVB_9341.JPG', 'SVB_9342.JPG', 'SVB_9343.JPG', 'SVB_9344.JPG',
    'SVB_9345.JPG', 'SVB_9347.JPG', 'SVB_9348.JPG', 'SVB_9350.JPG', 'SVB_9351.JPG',
    'SVB_9352.JPG', 'SVB_9353.JPG', 'SVB_9356.JPG', 'SVB_9357.JPG', 'SVB_9361.JPG',
    'SVB_9362.JPG', 'SVB_9363.JPG', 'SVB_9364.JPG', 'SVB_9365.JPG', 'SVB_9366.JPG',
    'SVB_9367.JPG', 'SVB_9368.JPG', 'SVB_9369.JPG', 'SVB_9371.JPG', 'SVB_9373.JPG',
    'SVB_9374.JPG', 'SVB_9375.JPG', 'SVB_9376.JPG', 'SVB_9378.JPG', 'SVB_9379.JPG',
    'SVB_9380.JPG', 'SVB_9382.JPG', 'SVB_9383.JPG', 'SVB_9384.JPG', 'SVB_9386.JPG',
    'SVB_9389.JPG', 'SVB_9390.JPG', 'SVB_9391.JPG', 'SVB_9392.JPG', 'SVB_9393.JPG',
    'SVB_9394.JPG', 'SVB_9395.JPG', 'SVB_9397.JPG', 'SVB_9399.JPG', 'SVB_9400.JPG',
    'SVB_9401.JPG', 'SVB_9402.JPG', 'SVB_9404.JPG', 'SVB_9406.JPG', 'SVB_9407.JPG',
    'SVB_9408.JPG', 'SVB_9409.JPG', 'SVB_9410.JPG', 'SVB_9412.JPG', 'SVB_9414.JPG',
    'SVB_9415.JPG', 'SVB_9417.JPG', 'SVB_9418.JPG', 'SVB_9420.JPG', 'SVB_9421.JPG',
    'SVB_9422.JPG', 'SVB_9424.JPG', 'SVB_9425.JPG', 'SVB_9427.JPG', 'SVB_9428.JPG',
    'SVB_9429.JPG', 'SVB_9430.JPG', 'SVB_9431.JPG', 'SVB_9432.JPG'
];

// Add all July meet photos to the photoData array
julyMeetPhotos.forEach((filename, index) => {
    photoData.push({
        url: `ISMAA Meet July 25/${filename}`,
        title: 'ISMAA Meet July 2025',
        description: `Chapter gathering moment ${index + 1}`,
        alt: `ISMAA Meet July 25 - ${filename}`,
        category: 'events',
        date: '2025'
    });
});

// Initialize gallery when page loads
document.addEventListener('DOMContentLoaded', function() {
    const gallery = new PhotoGallery('photoGallery');
    
    // Load all photos
    photoData.forEach(photo => {
        gallery.addPhoto(photo);
    });
    
    // Add loading animation
    const galleryItems = document.querySelectorAll('.gallery-item img');
    galleryItems.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            console.warn(`Failed to load image: ${this.src}`);
            this.parentElement.parentElement.style.display = 'none';
        });
    });
});

// Utility function to format file names for display
function formatFileName(fileName) {
    return fileName
        .replace(/\.[^/.]+$/, '') // Remove extension
        .replace(/[-_]/g, ' ') // Replace dashes and underscores with spaces
        .replace(/\w\S*/g, (txt) => 
            txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        ); // Capitalize first letter of each word
}

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PhotoGallery, photoData, formatFileName };
}
