# Vehicle Images Directory

Place local vehicle images in this directory to serve them locally on the website.

### How to use local images:
1. Save your photos in this folder, e.g.:
   - `/public/vehicles/audi-a4-front.jpg`
   - `/public/vehicles/audi-a4-side.jpg`
   - `/public/vehicles/audi-a4-interior.jpg`

2. Reference them in `src/data/vehicles.ts` using root-relative paths:
   ```typescript
   imageUrl: '/vehicles/audi-a4-front.jpg',
   additionalImages: [
     '/vehicles/audi-a4-side.jpg',
     '/vehicles/audi-a4-interior.jpg',
   ]
   ```

You can also use external image URLs (e.g., from your image host, cloud storage, eBay UK, or Auto Trader) directly in `imageUrl` and `additionalImages`.
