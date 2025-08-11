// Photo Gallery Auto-loader
// This script can be used to automatically load photos from a directory

class PhotoGallery {
    constructor(galleryContainer) {
        this.container = document.getElementById(galleryContainer);
        this.photos = [];
    }

    // Method to add a photo to the gallery
    addPhoto(photoData) {
        this.photos.push(photoData);
        this.renderPhoto(photoData);
    }

    // Render a single photo in the gallery
    renderPhoto(photo) {
        const photoItem = document.createElement('div');
        photoItem.className = 'gallery-item';
        
        photoItem.innerHTML = `
            <a href="${photo.url}" data-lightbox="ismaa-gallery" data-title="${photo.title}">
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

    // Method to clear and reload all photos
    reloadGallery() {
        if (this.container) {
            this.container.innerHTML = '';
            this.photos.forEach(photo => this.renderPhoto(photo));
        }
    }
}

// Photo data structure for easy management
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

// Instructions for adding new photos
/*
To add new photos to the gallery:

1. Save your photos in the /resources/photos/ folder
2. Add photo information to the photoData array above following this format:
   {
       url: 'your-photo-filename.jpg',
       title: 'Photo Title',
       description: 'Brief description',
       alt: 'Alt text for accessibility',
       category: 'events', // or 'meetings', 'certificates', etc.
       date: '2024'
   }

3. The gallery will automatically display the new photos

Recommended photo specifications:
- Format: JPG, PNG, or WebP
- Resolution: Minimum 800x600, optimally 1200x800
- File size: Under 2MB for web performance
- Aspect ratio: 4:3 or 16:9 works best

Categories you can use:
- 'events' - for gatherings, meetings, celebrations
- 'certificates' - for awards, recognitions
- 'meetings' - for formal meetings and conferences  
- 'social' - for informal social gatherings
- 'achievements' - for awards and accomplishments
*/

// Initialize gallery when page loads
document.addEventListener('DOMContentLoaded', function() {
    const gallery = new PhotoGallery('photoGallery');
    
    // Load existing photos
    photoData.forEach(photo => {
        gallery.addPhoto(photo);
    });
    
    // Smooth scrolling for gallery links
    const galleryLinks = document.querySelectorAll('a[href*="photos"]');
    galleryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Allow normal navigation for external links
            if (this.getAttribute('href').includes('resources/photos/')) {
                return true;
            }
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
