/**
 * ============================================================================
 * WEDGE WOOD MOTOR GROUP - CENTRAL VEHICLE STOCK MANAGEMENT
 * ============================================================================
 * 
 * This file is the single source of truth for all vehicle inventory on the website.
 * Used across:
 *   - Homepage featured vehicle listings
 *   - Sales showroom page & inventory filters
 *   - Individual vehicle detail pages (/cars/:slug)
 *   - Similar vehicle recommendations
 * 
 * ----------------------------------------------------------------------------
 * QUICK GUIDE: HOW TO MANAGE STOCK (MANUAL WORKFLOW)
 * ----------------------------------------------------------------------------
 * 
 * 1. TO ADD A NEW VEHICLE:
 *    - Copy the `SAMPLE_VEHICLE_TEMPLATE` below.
 *    - Paste it at the top or bottom of the `VEHICLES` array.
 *    - Give it a unique `id` (e.g., 'wmg-007' or 'wmg-ebay-101').
 *    - Give it a unique, lowercase, hyphenated `slug` (e.g., 'bmw-1-series-shadow-edition').
 *    - Fill in actual details collected from eBay UK or Auto Trader.
 *    - Set `status: 'available'`.
 *    - Omit any unknown optional fields (do not invent mileage, reg plate, etc.).
 * 
 * 2. TO ADD PHOTOS:
 *    - Option A (Local photos): Place JPG/PNG files in `/public/vehicles/` and reference
 *      them as `imageUrl: '/vehicles/your-car-main.jpg'`, `additionalImages: ['/vehicles/your-car-side.jpg']`.
 *    - Option B (Remote photos): Paste the full HTTPS photo URL from your host or listing.
 * 
 * 3. TO MARK A VEHICLE AS SOLD:
 *    - Change `status: 'available'` to `status: 'sold'`.
 *    - The website will automatically display a "SOLD" badge, disable enquiries,
 *      and notify customers to ask about sourcing similar vehicles.
 * 
 * 4. TO REMOVE A VEHICLE:
 *    - Delete the vehicle object from the `VEHICLES` array (or comment it out).
 * 
 * ----------------------------------------------------------------------------
 */

export type VehicleStatus = 'available' | 'sold';

export interface Vehicle {
  /** Unique internal identifier (e.g. 'wmg-001', 'wmg-at-002', 'wmg-ebay-003') */
  id: string;

  /** Unique SEO-friendly URL slug (e.g. 'bmw-3-series', 'audi-a4-avant-diesel') */
  slug: string;

  /** Make of the vehicle (e.g. 'BMW', 'Mercedes-Benz', 'Audi') */
  make: string;

  /** Model of the vehicle (e.g. '3 Series', 'A Class', 'Golf') */
  model: string;

  /** Variant / trim level (e.g. '2.0 330e M Sport Pro Saloon 4dr Petrol Plug-in Hybrid') */
  variant?: string;

  /** Price in GBP (£) - genuine price, never fabricated */
  price: number;

  /** Registration year or year of manufacture (e.g. 2021) */
  year: number;

  /** Full or partial registration plate / year marker (e.g. '71 Reg', '21 Reg'). Omit if unknown */
  regPlate?: string;

  /** Recorded mileage in miles. Omit if unknown */
  mileage?: number;

  /** Fuel type: 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric' | string. Omit if unknown */
  fuelType?: 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric' | string;

  /** Transmission: 'Automatic' | 'Manual' | 'Semi-Automatic' | string. Omit if unknown */
  transmission?: 'Automatic' | 'Manual' | 'Semi-Automatic' | string;

  /** Engine size / output (e.g. '2.0L', '1.5L EcoBoost', '2.0 TDI 163PS'). Omit if unknown */
  engineSize?: string;

  /** Body style (e.g. 'Saloon', 'Hatchback', 'Estate', 'SUV', 'Crossover', 'Coupe') */
  bodyType?: string;

  /** Exterior colour name (e.g. 'Portimao Blue Metallic', 'Pure White') */
  color?: string;
  colour?: string; // UK spelling alias for convenience

  /** Vehicle description / condition notes */
  description: string;

  /** Feature list / specifications */
  features?: string[];
  keyFeatures?: string[]; // Alias for backwards compatibility

  /** Main vehicle image (relative path in /public or absolute URL) */
  imageUrl: string;
  mainImage?: string; // Alias for imageUrl

  /** Additional gallery images */
  additionalImages?: string[];
  galleryImages?: string[]; // Alias for additionalImages

  /** Original listing source URL (e.g. eBay UK listing or Auto Trader advert) */
  sourceUrl?: string;

  /** Stock availability status: 'available' or 'sold' */
  status: VehicleStatus;

  /** Optional extended specifications - omit if unknown */
  doors?: number;
  seats?: number;
  mpg?: string;
  ulezCompliant?: boolean;
  owners?: number;
  serviceHistory?: string;
  motExpiry?: string;
  monthlyEstimate?: number;
}

/**
 * ============================================================================
 * CLEARLY LABELLED SAMPLE VEHICLE TEMPLATE
 * ============================================================================
 * Copy this block whenever you want to add a car manually collected from eBay
 * UK or Auto Trader. Fill in what you know; delete or leave undefined what
 * you don't.
 */
export const SAMPLE_VEHICLE_TEMPLATE: Vehicle = {
  id: 'wmg-sample-template',
  slug: 'sample-make-model-variant',
  make: 'Make Name',
  model: 'Model Name',
  variant: 'Trim / Engine Variant (e.g. 2.0 TDI S Line)',
  price: 15995, // Price in GBP
  year: 2021, // Year of manufacture
  regPlate: '21 Reg', // Optional - delete if not known
  mileage: 35000, // Optional - delete if not known
  fuelType: 'Diesel', // 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric'
  transmission: 'Automatic', // 'Automatic' | 'Manual'
  engineSize: '2.0L', // Optional
  bodyType: 'Hatchback', // 'Hatchback' | 'Saloon' | 'Estate' | 'SUV'
  color: 'Metallic Grey', // Optional
  description: 'Full vehicle description collected from your listing. Mention service history, mechanical checks, and condition.',
  features: [
    'Satellite Navigation',
    'Heated Front Seats',
    'Rear Parking Sensors',
    'Apple CarPlay / Android Auto',
    'Alloy Wheels',
    'Bluetooth Connectivity'
  ],
  imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
  additionalImages: [
    'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80'
  ],
  sourceUrl: 'https://www.autotrader.co.uk/', // Optional Auto Trader or eBay listing URL
  status: 'available' // 'available' or 'sold'
};

/**
 * ============================================================================
 * CENTRAL VEHICLE INVENTORY DATA
 * ============================================================================
 */
export const VEHICLES: Vehicle[] = [
 {
  "id": "wmg-007",
  "slug": "volkswagen-golf-r-tsi-2017",
  "make": "Volkswagen",
  "model": "Golf",
  "variant": "2.0 TSI R 3dr Hatchback Petrol",
  "year": 2017,
  "regPlate": "FL67 KTO",
  "price": 16495,
  "monthlyEstimate": null,
  "mileage": 47300,
  "fuelType": "Petrol",
  "transmission": "Manual",
  "engineSize": "2.0L TSI",
  "bodyType": "Hatchback",
  "color": "Black",
  "doors": 3,
  "seats": 5,
  "mpg": null,
  "ulezCompliant": true,
  "owners": 3,
  "serviceHistory": "Full Service History",
  "motExpiry": "May 2027",
  "imageUrl": "https://i.ebayimg.com/images/g/-zsAAeSwKT5qzlLJ/s-l1600.webp",
  "additionalImages": [
    "https://i.ebayimg.com/images/g/-zsAAeSwKT5qzlLJ/s-l1600.webp",
    "https://i.ebayimg.com/images/g/2r8AAeSwKz9qzlLX/s-l960.webp",
    "https://i.ebayimg.com/images/g/JZcAAeSwj99qzlLO/s-l960.webp"
  ],
  "features": [
    "Heated Leather Seats",
    "3-Door Hatchback",
    "R-Line Styling",
    "Air Conditioning",
    "Alloy Wheels",
    "AM/FM Stereo",
    "Bluetooth Connectivity",
    "Cruise Control",
    "Electric Windows",
    "Front and Rear Parking Sensors",
    "Power-Assisted Steering",
    "Tinted Rear Windows"
  ],
  "keyFeatures": [
    "2.0L TSI Petrol Engine",
    "Manual Transmission",
    "Full Service History",
    "Heated Leather Seats",
    "Three Previous Owners",
    "Euro 6 Emissions Standard"
  ],
  "description": "2017 Volkswagen Golf R TSI 3-door performance hatchback in black, with a 2.0L petrol engine and manual transmission. The vehicle has covered 47,300 miles and has a full service history. Features include heated leather seats, Bluetooth connectivity, air conditioning, alloy wheels, cruise control, electric windows and parking sensors. The seller reports three previous owners and states that the car has been owned for approximately one year. MOT expiry is listed as May 2027.",
  "status": "available",
  "sourceUrl": "https://www.ebay.co.uk/itm/147634180926"
},
  {
  "id": "wmg-008",
  "slug": "audi-a4-tdi-ultra-sport-2015",
  "make": "Audi",
  "model": "A4",
  "variant": "2.0 TDI ultra Sport Saloon S Tronic Euro 6 190PS",
  "year": 2015,
  "regPlate": "SG18 HHJ",
  "price": 6500,
  "monthlyEstimate": null,
  "mileage": 137000,
  "fuelType": "Diesel",
  "transmission": "Semi-Automatic",
  "engineSize": "2.0L TDI 1968cc",
  "bodyType": "Saloon",
  "color": "Black",
  "doors": 4,
  "seats": 5,
  "mpg": null,
  "ulezCompliant": true,
  "owners": 2,
  "serviceHistory": "Partial Service History",
  "motExpiry": "March 2027",
  "imageUrl": "https://i.ebayimg.com/images/g/KmAAAeSwi5Zqye8q/s-l500.webp",
  "additionalImages": [
    "https://i.ebayimg.com/images/g/KmAAAeSwi5Zqye8q/s-l500.webp",
    "https://i.ebayimg.com/images/g/5YwAAeSw0slqye8U/s-l500.webp",
    "https://i.ebayimg.com/images/g/5UkAAeSw1MBqyfSV/s-l500.webp"
  ],
  "features": [
    "Air Conditioning",
    "Alloy Wheels",
    "Climate Control",
    "Cruise Control",
    "Electric Windows",
    "Power-Assisted Steering",
    "AM/FM Stereo"
  ],
  "keyFeatures": [
    "2.0L TDI Diesel Engine",
    "190PS Engine Specification",
    "S Tronic Transmission",
    "Euro 6 Emissions Class",
    "Four-Door Saloon",
    "Partial Service History"
  ],
  "description": "Used Audi A4 Sport 2.0 TDI ultra saloon with a 1968cc diesel engine and semi-automatic transmission. The listing reports 137,000 miles, two previous owners, partial service history and an MOT expiry of March 2027. Finished in black with five seats and four doors. The listing title describes the car as a 2018 model, while its item specifics state 2015; verify the model year and registration details before publishing.",
  "status": "available",
  "sourceUrl": "https://www.ebay.co.uk/itm/117458949578"
},
  {
  "id": "wmg-009",
  "slug": "audi-a4-35-tfsi-s-line-2023",
  "make": "Audi",
  "model": "A4",
  "variant": "35 TFSI S line 4dr S Tronic Petrol Saloon",
  "year": 2023,
  "regPlate": "23 Reg",
  "price": 18051,
  "monthlyEstimate": null,
  "mileage": 43057,
  "fuelType": "Petrol",
  "transmission": "Automatic",
  "engineSize": "1984cc",
  "bodyType": "Saloon",
  "color": "White",
  "doors": 4,
  "seats": 5,
  "mpg": null,
  "ulezCompliant": null,
  "owners": 0,
  "serviceHistory": null,
  "motExpiry": null,
  "imageUrl": "https://i.ebayimg.com/thumbs/images/g/jxYAAeSwxbpqp-dy/s-l500.jpg",
  "additionalImages": [
    "https://i.ebayimg.com/thumbs/images/g/jxYAAeSwxbpqp-dy/s-l500.jpg",
    "https://i.ebayimg.com/images/g/2m0AAeSwHAJqp-dy/s-l140.webp",
    "https://i.ebayimg.com/images/g/HzMAAeSw4Zdqp-dy/s-l140.webp"
  ],
  "features": [
    "Air Conditioning",
    "Alloy Wheels",
    "Climate Control",
    "Cruise Control",
    "Electric Heated Seats",
    "Power-Assisted Steering",
    "AM/FM Stereo",
    "Xenon Headlights",
    "ABS",
    "Parking Sensors"
  ],
  "keyFeatures": [
    "35 TFSI S line Specification",
    "Petrol Engine",
    "Automatic S Tronic Transmission",
    "White Exterior",
    "Heated Seats",
    "Climate Control",
    "Parking Sensors"
  ],
  "description": "Used 2023 Audi A4 35 TFSI S line saloon advertised by Vertu Motors Group. Finished in white, with automatic transmission, a petrol engine, 43,057 miles, four doors and five seats. Listed features include alloy wheels, climate control, cruise control, heated seats, xenon headlights and parking sensors. The seller lists zero previous owners and a first registration date of 30 May 2023.",
  "status": "available",
  "sourceUrl": "https://www.ebay.co.uk/itm/318869810939"
},
  {
  "id": "wmg-010",
  "slug": "bmw-530d-xdrive-m-sport-2018",
  "make": "BMW",
  "model": "5 Series",
  "variant": "530d xDrive M Sport",
  "year": 2018,
  "regPlate": "18 Reg",
  "price": 17550,
  "monthlyEstimate": null,
  "mileage": 74500,
  "fuelType": "Diesel",
  "transmission": "Automatic",
  "engineSize": "3.0L Diesel",
  "bodyType": "Saloon",
  "color": null,
  "doors": 4,
  "seats": 5,
  "mpg": null,
  "ulezCompliant": true,
  "owners": null,
  "serviceHistory": "Service History Available",
  "motExpiry": null,
  "imageUrl": "https://i.ebayimg.com/images/g/RdQAAeSw4vRqzl2X/s-l140.webp",
  "additionalImages": [
    "https://i.ebayimg.com/images/g/RdQAAeSw4vRqzl2X/s-l140.webp"
  ],
  "features": [],
  "keyFeatures": [
    "xDrive All-Wheel Drive",
    "M Sport Specification",
    "Automatic Transmission",
    "Euro 6 Emissions Class"
  ],
  "description": "Used 2018 BMW 530d xDrive M Sport with 74,500 miles, diesel engine, automatic transmission and five seats. The seller states that service history is available. Listed in the UK for £17,550 or best offer.",
  "status": "available",
  "sourceUrl": "https://www.ebay.co.uk/itm/287645945948"
},
  {
  "id": "wmg-011",
  "slug": "bmw-330e-touring-g21-2020",
  "make": "BMW",
  "model": "3 Series",
  "variant": "330e M Sport Touring G21",
  "year": 2020,
  "regPlate": "20 Reg",
  "price": 12000,
  "monthlyEstimate": null,
  "mileage": 122000,
  "fuelType": "Hybrid",
  "transmission": "Automatic",
  "engineSize": "2.0L Plug-in Hybrid",
  "bodyType": "Estate",
  "color": "Blue",
  "doors": 5,
  "seats": 5,
  "mpg": null,
  "ulezCompliant": true,
  "owners": null,
  "serviceHistory": "Full BMW Service History (seller-stated)",
  "motExpiry": null,
  "imageUrl": "https://i.ebayimg.com/images/g/aY4AAeSwUZ1qzlC0/s-l140.webp",
  "additionalImages": [
    "https://i.ebayimg.com/images/g/aY4AAeSwUZ1qzlC0/s-l140.webp"
  ],
  "features": [
    "Harman Kardon Audio",
    "Vernasca Leather",
    "Front Collision Warning",
    "Lane Assist",
    "Cruise Control with Brake Function",
    "Parking Assistant Plus",
    "Wireless Phone Charging",
    "Reversing Camera",
    "Heated Seats",
    "Rear Climate Control"
  ],
  "keyFeatures": [
    "330e Plug-in Hybrid",
    "M Sport Package",
    "Automatic Transmission",
    "Full BMW Service History",
    "Vernasca Leather",
    "Harman Kardon Audio",
    "Reversing Camera"
  ],
  "description": "BMW 330e M Sport Touring G21 in blue with brown interior, automatic transmission and plug-in hybrid powertrain. The listing specifies 122,000 miles and a 2.0-litre engine. Seller notes describe full BMW service history, Harman Kardon audio, Vernasca leather, collision warning, lane assist, heated seats, reversing camera and Parking Assistant Plus. The listing title says 2021, while item specifics state 2020.",
  "status": "available",
  "sourceUrl": "https://www.ebay.co.uk/itm/900011096432"
},
  {
  "id": "wmg-012",
  "slug": "bmw-m340i-xdrive-2020",
  "make": "BMW",
  "model": "3 Series",
  "variant": "M340i xDrive 4dr Step Auto Saloon",
  "year": 2020,
  "regPlate": "20 Reg",
  "price": 27795,
  "monthlyEstimate": null,
  "mileage": 53000,
  "fuelType": "Petrol",
  "transmission": "Automatic",
  "engineSize": "3.0L 2998cc",
  "bodyType": "Saloon",
  "color": "White",
  "doors": 4,
  "seats": 5,
  "mpg": null,
  "ulezCompliant": null,
  "owners": 1,
  "serviceHistory": null,
  "motExpiry": null,
  "imageUrl": "https://i.ebayimg.com/images/g/0bYAAeSwAJ5qxhG0/s-l140.webp",
  "additionalImages": [
    "https://i.ebayimg.com/images/g/0bYAAeSwAJ5qxhG0/s-l140.webp"
  ],
  "features": [
    "Climate Control",
    "Rear Spoiler",
    "Xenon Headlights",
    "Alarm",
    "ABS",
    "Electronic Stability Programme"
  ],
  "keyFeatures": [
    "M340i Performance Model",
    "xDrive All-Wheel Drive",
    "3.0L Petrol Engine",
    "Automatic Transmission",
    "53,000 Miles",
    "One Previous Owner"
  ],
  "description": "Used 2020 BMW 3 Series M340i xDrive saloon in white. The listing specifies a 3.0-litre petrol engine, automatic transmission, 53,000 miles, five seats and four doors. The seller advertises one previous owner. Listed at £27,795.",
  "status": "available",
  "sourceUrl": "https://www.ebay.co.uk/itm/287632819798"
}
];

/**
 * ============================================================================
 * DATA VALIDATION ROUTINE
 * ============================================================================
 * Runs automatically to prevent duplicate IDs and duplicate slugs from breaking
 * navigation, URLs, or booking references.
 */
export function validateVehicleStock(stock: Vehicle[]): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  const idMap = new Map<string, number>();
  const slugMap = new Map<string, number>();

  stock.forEach((vehicle, index) => {
    // 1. Check ID
    if (!vehicle.id || vehicle.id.trim() === '') {
      errors.push(`Vehicle at position #${index + 1} (${vehicle.make} ${vehicle.model}) is missing a required 'id'.`);
    } else {
      const lowerId = vehicle.id.toLowerCase();
      if (idMap.has(lowerId)) {
        errors.push(`Duplicate ID detected: "${vehicle.id}" is used by multiple vehicles. Every vehicle must have a unique ID.`);
      } else {
        idMap.set(lowerId, index);
      }
    }

    // 2. Check Slug
    const canonicalSlug = getVehicleSlug(vehicle);
    if (!canonicalSlug) {
      errors.push(`Vehicle at position #${index + 1} (${vehicle.make} ${vehicle.model}) generated an empty slug.`);
    } else {
      if (slugMap.has(canonicalSlug)) {
        errors.push(`Duplicate URL slug detected: "/cars/${canonicalSlug}". Ensure each vehicle's slug is distinct.`);
      } else {
        slugMap.set(canonicalSlug, index);
      }
    }

    // 3. Check Price
    if (typeof vehicle.price !== 'number' || isNaN(vehicle.price) || vehicle.price < 0) {
      errors.push(`Vehicle "${vehicle.id}" has an invalid price: £${vehicle.price}. Must be a valid positive number.`);
    }

    // 4. Check Year
    if (typeof vehicle.year !== 'number' || isNaN(vehicle.year) || vehicle.year < 1980) {
      errors.push(`Vehicle "${vehicle.id}" has an invalid year: ${vehicle.year}.`);
    }
  });

  if (errors.length > 0 && typeof console !== 'undefined') {
    console.warn('[WEDGE WOOD MOTOR GROUP Stock Validation Alerts]:\n' + errors.join('\n'));
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

// Run initial validation check
validateVehicleStock(VEHICLES);

/**
 * ============================================================================
 * SLUG & URL UTILITIES
 * ============================================================================
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function generateVehicleSlug(vehicle: {
  make: string;
  model: string;
  variant?: string;
  fuelType?: string;
}): string {
  const makeSlug = slugify(vehicle.make);
  const modelSlug = slugify(vehicle.model);
  let base = `${makeSlug}-${modelSlug}`;

  const variant = (vehicle.variant || '').toLowerCase();
  const fuel = (vehicle.fuelType || '').toLowerCase();

  if (variant.includes('gti')) {
    base += '-gti';
  } else if (variant.includes('diesel') || fuel === 'diesel') {
    base += '-diesel';
  } else if (variant.includes('st-line')) {
    base += '-st-line';
  }

  return slugify(base);
}

export function getVehicleSlug(vehicle: Vehicle): string {
  return vehicle.slug || generateVehicleSlug(vehicle);
}

/**
 * Finds a vehicle by exact slug, generated slug, ID, or fuzzy matching.
 */
export function findVehicleBySlug(slugOrId: string): Vehicle | undefined {
  if (!slugOrId) return undefined;
  const decoded = decodeURIComponent(slugOrId).trim();
  const target = slugify(decoded);
  const rawLower = decoded.toLowerCase();

  // 1. Direct match on vehicle.slug
  const directMatch = VEHICLES.find(
    (v) => (v.slug && v.slug.toLowerCase() === target) || (v.slug && v.slug.toLowerCase() === rawLower)
  );
  if (directMatch) return directMatch;

  // 2. Match on generated vehicle slug
  const generatedMatch = VEHICLES.find(
    (v) => generateVehicleSlug(v) === target
  );
  if (generatedMatch) return generatedMatch;

  // 3. Fallback match by ID
  const idMatch = VEHICLES.find(
    (v) => v.id.toLowerCase() === rawLower || slugify(v.id) === target
  );
  if (idMatch) return idMatch;

  // 4. Fuzzy match (e.g. 'audi-a4-avant' matches 'audi-a4-avant-diesel')
  return VEHICLES.find((v) => {
    const makeModelSlug = slugify(`${v.make} ${v.model}`);
    return (
      target === makeModelSlug ||
      target.startsWith(makeModelSlug) ||
      makeModelSlug.startsWith(target) ||
      (v.slug && v.slug.includes(target)) ||
      (v.slug && target.includes(v.slug))
    );
  });
}

/**
 * ============================================================================
 * HELPER GETTERS FOR SAFE COMPONENT CONSUMPTION
 * ============================================================================
 */

/**
 * Returns all vehicles in stock (both available and sold).
 */
export function getAllVehicles(): Vehicle[] {
  return VEHICLES;
}

/**
 * Returns only currently available vehicles.
 */
export function getAvailableVehicles(): Vehicle[] {
  return VEHICLES.filter((v) => v.status !== 'sold');
}

/**
 * Returns vehicles marked as sold.
 */
export function getSoldVehicles(): Vehicle[] {
  return VEHICLES.filter((v) => v.status === 'sold');
}

/**
 * Returns array of all image URLs for a vehicle, starting with the primary image.
 */
export function getVehicleImages(vehicle: Vehicle): string[] {
  const primary = vehicle.mainImage || vehicle.imageUrl;
  const extras = vehicle.galleryImages || vehicle.additionalImages || [];
  
  const all = [primary, ...extras].filter(Boolean);
  return Array.from(new Set(all));
}

/**
 * Returns the feature list for a vehicle.
 */
export function getVehicleFeatures(vehicle: Vehicle): string[] {
  return vehicle.features || vehicle.keyFeatures || [];
}

/**
 * Returns the exterior colour or graceful fallback.
 */
export function getVehicleColor(vehicle: Vehicle): string {
  return vehicle.color || vehicle.colour || 'Not specified';
}

/**
 * Returns similar vehicles from stock, prioritizing same make or body type.
 */
export function getSimilarVehicles(vehicle: Vehicle, limit: number = 3): Vehicle[] {
  return VEHICLES
    .filter((v) => v.id !== vehicle.id)
    .sort((a, b) => {
      // Prioritize same make
      if (a.make === vehicle.make && b.make !== vehicle.make) return -1;
      if (b.make === vehicle.make && a.make !== vehicle.make) return 1;
      // Then prioritize same body type
      if (a.bodyType && vehicle.bodyType && a.bodyType === vehicle.bodyType) return -1;
      if (b.bodyType && vehicle.bodyType && b.bodyType === vehicle.bodyType) return 1;
      return 0;
    })
    .slice(0, limit);
}

/** Backward compatibility alias */
export const EXAMPLE_VEHICLES: Vehicle[] = VEHICLES;

/**
 * Dealership business identity and contact details
 */
export const DEALERSHIP_INFO = {
  name: 'WEDGE WOOD MOTOR GROUP',
  tradingName: 'WEDGE WOOD MOTOR GROUP',
  address: 'Unit 7, Wedgwood Rd, Bicester, OX26 4UL, United Kingdom',
  addressLines: [
    'Unit 7, Wedgwood Rd',
    'Bicester',
    'OX26 4UL',
    'United Kingdom'
  ],
  street: 'Unit 7, Wedgwood Rd',
  city: 'Bicester',
  postcode: 'OX26 4UL',
  country: 'United Kingdom',
  phone: '07888 090788',
  phoneRaw: '07888090788',
  email: 'wedgewood05@outlook.com',
  phonePlaceholder: '07888 090788',
  emailPlaceholder: 'wedgewood05@outlook.com',
  hoursPlaceholder: '[Opening hours to be confirmed by client]',
  auditNotice: 'This website is prepared for insurance audit and business verification. All vehicle listings shown are pre-owned dealership stock prepared to workshop inspection criteria.'
};
