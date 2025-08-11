# ISMAA Bengaluru Chapter - Photo Gallery

This folder contains the photo gallery for the ISMAA Bengaluru Chapter website.

## Current Photos

- `Family meet at Clark Exotica.jpg` - Family gathering event at Clark Exotica
- `ISMAA Meet July 25/*.JPG` - 150+ photos from July 2025 chapter meeting

## Adding New Photos

To add new photos to the website gallery:

### Step 1: Add Photo Files
1. Save your photos in this folder (`/resources/photos/`)
2. Use descriptive file names (e.g., `Annual_Meeting_2024.jpg`)
3. Recommended specifications:
   - Format: JPG, PNG, or WebP
   - Resolution: Minimum 800x600, optimally 1200x800
   - File size: Under 2MB for better web performance

### Step 2: Update Gallery Configuration
1. Open `gallery.js` file
2. Add your photo information to the `photoData` array:
   ```javascript
   {
       url: 'your-photo-filename.jpg',
       title: 'Display Title',
       description: 'Brief description',
       alt: 'Alt text for accessibility',
       category: 'events', // or 'meetings', 'certificates', etc.
       date: '2024'
   }
   ```

### Step 3: Update Photo Count
1. Update the photo count in `../index.html` (resources page)
2. Look for the line with `<small class="badge bg-info">2 photos</small>`
3. Change the number to reflect the total number of photos

## Photo Categories

Use these categories when adding photos:
- `events` - Gatherings, meetings, celebrations
- `certificates` - Awards, recognitions
- `meetings` - Formal meetings and conferences  
- `social` - Informal social gatherings
- `achievements` - Awards and accomplishments

## File Structure

```
photos/
├── index.html          # Photo gallery page
├── gallery.js          # Gallery functionality
├── README.md           # This file
├── Family meet at Clark Exotica.jpg
└── ISMAA Meet July 25/
    └── [150+ SVB_*.JPG files]
```

## Contact

For questions about adding photos or managing the gallery, contact:
- **Secretary:** Mr. Sanjib Ghosh
- Through the main website contact form

## Google Photos Integration

To use photos from Google Photos albums:
1. Download the photos you want to use from the shared album
2. Follow the steps above to add them to the website
3. Ensure you have proper permissions to use the photos

---
*Last updated: January 2025*
