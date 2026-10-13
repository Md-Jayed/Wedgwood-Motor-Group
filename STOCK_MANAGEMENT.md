# WEDGE WOOD MOTOR GROUP - Vehicle Stock Management Guide

This document describes the manual vehicle stock management workflow for your website. All vehicle data is stored centrally in:

**`src/data/vehicles.ts`**

No databases, complex admin panels, or external APIs are required. You can manage your entire inventory directly by editing this single file.

---

## 1. Quick Overview

- **Central Inventory File:** `src/data/vehicles.ts`
- **Local Photos Directory:** `/public/vehicles/`
- **URL Format:** `/cars/:slug` (e.g. `/cars/audi-a4-avant-diesel`, `/cars/bmw-3-series`)
- **Pages connected automatically:**
  - Homepage featured vehicle listings
  - Used Vehicle Sales showroom with search, fuel, gearbox, and availability filters
  - Individual vehicle details pages (`/cars/:slug`)
  - Similar vehicle recommendations

---

## 2. Clearly Labelled Sample Record (Template)

Whenever you collect a new car listing from **eBay UK** or **Auto Trader**, copy this block and paste it into the `VEHICLES` array in `src/data/vehicles.ts`:

```typescript
  {
    // 1. UNIQUE IDENTIFIERS (Required)
    id: 'wmg-007', // Must be unique across all vehicles
    slug: 'audi-q3-s-line-black-edition', // Unique URL slug: lowercase, hyphens only
    status: 'available', // 'available' or 'sold'

    // 2. CORE VEHICLE DETAILS (Required)
    make: 'Audi',
    model: 'Q3',
    variant: '2.0 TDI S Line Black Edition S Tronic Quattro 5dr', // Trim / engine
    year: 2021, // Year of manufacture
    price: 21995, // Genuine vehicle price in GBP (£)

    // 3. OPTIONAL DETAILS (Omit or delete if not known from your listing)
    regPlate: '21 Reg', // Year / plate marker (omit if unknown)
    mileage: 38500, // Miles recorded (omit if unknown)
    fuelType: 'Diesel', // 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric'
    transmission: 'Automatic', // 'Automatic' | 'Manual'
    engineSize: '2.0L TDI 150PS', // Engine size / power
    bodyType: 'SUV', // 'SUV' | 'Hatchback' | 'Saloon' | 'Estate'
    color: 'Daytona Grey Pearl', // Exterior colour
    doors: 5, // Number of doors
    seats: 5, // Number of seats
    mpg: '47.9 MPG (Combined)', // Fuel economy if known
    ulezCompliant: true, // ULEZ status if known
    owners: 1, // Number of previous owners
    serviceHistory: 'Full Audi Franchise Service Record',
    motExpiry: 'December 2027',

    // 4. PHOTOGRAPHS
    // Main image (local path in /public/vehicles or remote HTTPS URL)
    imageUrl: '/vehicles/audi-q3-main.jpg',
    // Additional gallery images
    additionalImages: [
      '/vehicles/audi-q3-main.jpg',
      '/vehicles/audi-q3-interior.jpg',
      '/vehicles/audi-q3-rear.jpg'
    ],

    // 5. DESCRIPTION & FEATURES
    description: 'High specification Audi Q3 Black Edition finished in Daytona Grey Pearl with half-leather S Line sports interior. Thoroughly checked and prepared to our dealership workshop standard.',
    features: [
      'Black Styling Exterior Package',
      'Audi Virtual Cockpit Display',
      'MMI Navigation Plus with Touchscreen',
      'Heated S Line Sports Front Seats',
      'Rear Reversing Camera & Park Assist',
      '19-inch 5-Arm Rotor Matt Titanium Alloy Wheels'
    ],

    // 6. SOURCE LISTING (Optional)
    sourceUrl: 'https://www.autotrader.co.uk/' // Paste eBay UK or Auto Trader URL
  },
```

---

## 3. How to Add a Car

1. Open `src/data/vehicles.ts`.
2. Locate the `VEHICLES` array (around line 140).
3. Copy the template above (or an existing vehicle record) and paste it at the top or bottom of the array.
4. Update the fields with your actual listing details:
   - **`id`**: Must be unique (e.g. `wmg-007`, `wmg-ebay-12`, `wmg-at-55`).
   - **`slug`**: Must be unique, lowercase, letters and hyphens only (e.g. `volkswagen-tiguan-r-line`).
   - **`price`**: Numeric price in GBP without currency symbols (e.g. `18450`).
   - **`status`**: Set to `'available'`.
5. Save the file. The car is now live across the homepage, showroom, and its own `/cars/:slug` page.

---

## 4. How to Add Photos

### Option A: Local Photos (Recommended for original dealer photography)
1. Save your photos into the project folder:
   `/public/vehicles/`
   *(Example: `/public/vehicles/golf-front.jpg`, `/public/vehicles/golf-cabin.jpg`)*
2. In `src/data/vehicles.ts`, reference them using the path starting with `/vehicles/`:
   ```typescript
   imageUrl: '/vehicles/golf-front.jpg',
   additionalImages: [
     '/vehicles/golf-front.jpg',
     '/vehicles/golf-cabin.jpg',
     '/vehicles/golf-rear.jpg'
   ],
   ```

### Option B: Remote Photos (eBay UK / Auto Trader / Cloud Host)
Paste the full HTTPS link directly:
```typescript
imageUrl: 'https://example.com/photos/car-01.jpg',
additionalImages: [
  'https://example.com/photos/car-01.jpg',
  'https://example.com/photos/car-02.jpg'
],
```

*Note: All images feature automatic graceful fallbacks to prevent broken image icons if a photo URL fails to load.*

---

## 5. How to Mark a Vehicle as Sold

When a car is sold:
1. Open `src/data/vehicles.ts`.
2. Find the car in the `VEHICLES` array.
3. Change:
   ```typescript
   status: 'available',
   ```
   to:
   ```typescript
   status: 'sold',
   ```
4. Save the file.

### What happens automatically:
- A distinct **SOLD** badge is shown on vehicle cards.
- The vehicle page displays a notification banner: *"This vehicle has been sold. Contact our team to source a similar vehicle."*
- Action buttons switch from viewing/deposit to *"Enquire About Similar Vehicles"*.
- The Sales page allows buyers to filter by *"In Stock Only"* or view *"Recently Sold"*.

---

## 6. How to Remove a Car From Stock

If you no longer want a vehicle shown on the website:
1. Open `src/data/vehicles.ts`.
2. Delete the vehicle block from the `VEHICLES` array (or comment it out with `/* ... */`).
3. Save the file.

---

## 7. Data Validation Rules

The application includes an automated validation routine (`validateVehicleStock`):
- **Unique ID Check:** Warns immediately if two vehicles share the same `id`.
- **Unique Slug Check:** Prevents duplicate URLs so every vehicle can be accessed at `/cars/:slug`.
- **Missing Optional Fields Handled Gracefully:**
  - If `regPlate` is omitted, the site displays just the year (e.g. `2021`) instead of empty brackets.
  - If `mileage` is omitted, the site displays *"Mileage on request"* instead of `0 miles` or `undefined`.
  - If optional specs (MOT, Service History, Engine Size) are omitted, they are gracefully omitted rather than fabricating placeholder text.
