export interface Vehicle {
  id: string;
  make: string;
  model: string;
  variant: string;
  year: number;
  regPlate: string;
  price: number;
  monthlyEstimate?: number;
  mileage: number;
  fuelType: 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric';
  transmission: 'Automatic' | 'Manual' | 'Semi-Automatic';
  engineSize: string;
  bodyType: string;
  color: string;
  doors: number;
  seats: number;
  mpg: string;
  ulezCompliant: boolean;
  owners: number;
  serviceHistory: string;
  motExpiry: string;
  imageUrl: string;
  additionalImages?: string[];
  keyFeatures: string[];
  description: string;
}

export const EXAMPLE_VEHICLES: Vehicle[] = [
  {
    id: 'wmg-001',
    make: 'BMW',
    model: '3 Series',
    variant: '2.0 330e M Sport Pro Saloon 4dr Petrol Plug-in Hybrid',
    year: 2021,
    regPlate: '71 Reg',
    price: 24950,
    monthlyEstimate: 395,
    mileage: 32450,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    engineSize: '2.0L Plug-in Hybrid',
    bodyType: 'Saloon',
    color: 'Portimao Blue Metallic',
    doors: 4,
    seats: 5,
    mpg: '176.6 MPG (Combined WLTP)',
    ulezCompliant: true,
    owners: 1,
    serviceHistory: 'Full BMW Main Dealer History',
    motExpiry: 'October 2027',
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80'
    ],
    keyFeatures: [
      'M Sport Pro Package',
      'Live Cockpit Professional Navigation',
      'Reversing Camera & Front/Rear PDC',
      'Heated Vernasca Leather Seats',
      'Wireless Apple CarPlay & Android Auto',
      '19-inch Bicolour Jet Black Alloy Wheels'
    ],
    description: 'Finished in Portimao Blue Metallic with full Black Vernasca leather. Specification includes M Sport Pro pack, sun protection glass, acoustic glazing, ambient interior lighting, and adaptive LED headlights. Thoroughly checked and prepared to our dealership standard.'
  },
  {
    id: 'wmg-002',
    make: 'Mercedes-Benz',
    model: 'A Class',
    variant: '1.3 A200 AMG Line Executive Hatchback 5dr Petrol',
    year: 2020,
    regPlate: '70 Reg',
    price: 19890,
    monthlyEstimate: 319,
    mileage: 38120,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    engineSize: '1.3L Turbo 163PS',
    bodyType: 'Hatchback',
    color: 'Polar White Gloss',
    doors: 5,
    seats: 5,
    mpg: '47.1 MPG (Combined)',
    ulezCompliant: true,
    owners: 2,
    serviceHistory: 'Full Digital Service Record',
    motExpiry: 'September 2027',
    imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80'
    ],
    keyFeatures: [
      'Executive Pack 10.25-inch Dual Screen MBUX',
      'Heated Front Seats',
      'Active Park Assist with Parktronic',
      'DAB Digital Radio & Bluetooth',
      'Cruise Control with Limiter',
      '18-inch AMG 5-Twin-Spoke Alloy Wheels'
    ],
    description: 'Immaculately maintained Mercedes-Benz A200 AMG Line Executive in Polar White. Features the twin widescreen digital MBUX cockpit, heated sports seats in Artico leather and Dinamica microfibre, and dynamic select driving modes.'
  },
  {
    id: 'wmg-003',
    make: 'Audi',
    model: 'A4 Avant',
    variant: '2.0 35 TDI Black Edition S Tronic Estate 5dr Diesel',
    year: 2021,
    regPlate: '21 Reg',
    price: 22750,
    monthlyEstimate: 365,
    mileage: 44600,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    engineSize: '2.0L TDI 163PS',
    bodyType: 'Estate',
    color: 'Mythos Black Metallic',
    doors: 5,
    seats: 5,
    mpg: '53.3 MPG (Combined)',
    ulezCompliant: true,
    owners: 1,
    serviceHistory: 'Full Audi Specialist Service Record',
    motExpiry: 'November 2027',
    imageUrl: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80'
    ],
    keyFeatures: [
      'Black Styling Exterior Pack',
      'Audi Virtual Cockpit Plus',
      'Matrix LED Headlights with Dynamic Indicators',
      '19-inch Rotor Matt Titanium Alloy Wheels',
      'Power Operated Tailgate',
      'Deluxe 3-Zone Electronic Climate Control'
    ],
    description: 'A striking Audi A4 Avant Black Edition in Mythos Black. High specification includes factory black styling pack, privacy glass, piano black inlays, flat-bottom leather multi-function steering wheel, and Audi Drive Select.'
  },
  {
    id: 'wmg-004',
    make: 'Volkswagen',
    model: 'Golf',
    variant: '2.0 TSI GTI DSG Hatchback 5dr Petrol',
    year: 2022,
    regPlate: '22 Reg',
    price: 27450,
    monthlyEstimate: 435,
    mileage: 21800,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    engineSize: '2.0L TSI 245PS',
    bodyType: 'Hatchback',
    color: 'Pure White',
    doors: 5,
    seats: 5,
    mpg: '38.2 MPG (Combined)',
    ulezCompliant: true,
    owners: 1,
    serviceHistory: 'Full Volkswagen Franchise History',
    motExpiry: 'March 2028',
    imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80'
    ],
    keyFeatures: [
      'Discover Media Navigation System',
      'IQ.LIGHT LED Matrix Headlights',
      'GTI Jacara Tartan Sports Seats',
      'Heated Leather Multifunction Steering Wheel',
      'Adaptive Cruise Control with Travel Assist',
      '18-inch Richmond Alloy Wheels with Red Calipers'
    ],
    description: 'Iconic hot hatch in pristine condition. Mk8 Golf GTI with responsive 245PS engine paired with the rapid 7-speed DSG gearbox. Factory illuminated radiator grille bar, keyless entry and start, and ambient lighting with 30 color choices.'
  },
  {
    id: 'wmg-005',
    make: 'Land Rover',
    model: 'Range Rover Evoque',
    variant: '2.0 D180 R-Dynamic SE Auto 4WD 5dr Diesel',
    year: 2019,
    regPlate: '19 Reg',
    price: 23995,
    monthlyEstimate: 385,
    mileage: 41200,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    engineSize: '2.0L Turbo Diesel AWD',
    bodyType: 'SUV',
    color: 'Eiger Grey Metallic with Black Roof',
    doors: 5,
    seats: 5,
    mpg: '41.5 MPG (Combined)',
    ulezCompliant: true,
    owners: 2,
    serviceHistory: 'Full Service History',
    motExpiry: 'December 2027',
    imageUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80'
    ],
    keyFeatures: [
      'Touch Pro Duo Dual Touchscreen Display',
      'Interactive Driver Display Cockpit',
      'Panoramic Fixed Glass Sunroof',
      'ClearSight Interior Rear-View Mirror',
      '20-inch Gloss Sparkle Silver Alloy Wheels',
      'Terrain Response 2 with All-Terrain Progress'
    ],
    description: 'Luxurious compact premium SUV finished in Eiger Grey with contrasting Narvik Black roof. R-Dynamic styling package, perforated Windsor grain leather seats with memory function, and Meridian premium sound system.'
  },
  {
    id: 'wmg-006',
    make: 'Ford',
    model: 'Puma',
    variant: '1.0 EcoBoost Hybrid mHEV ST-Line X 5dr Petrol',
    year: 2021,
    regPlate: '71 Reg',
    price: 16490,
    monthlyEstimate: 260,
    mileage: 26500,
    fuelType: 'Hybrid',
    transmission: 'Manual',
    engineSize: '1.0L EcoBoost mHEV 155PS',
    bodyType: 'Crossover',
    color: 'Magnetic Grey Metallic',
    doors: 5,
    seats: 5,
    mpg: '52.3 MPG (Combined)',
    ulezCompliant: true,
    owners: 1,
    serviceHistory: 'Full Main Dealer History',
    motExpiry: 'August 2027',
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80'
    ],
    keyFeatures: [
      'B&O Premium 10-Speaker Audio System',
      'Ford SYNC 3 with 8-inch Touchscreen & Sat Nav',
      '12.3-inch Full Digital Instrument Cluster',
      'MegaBox Extended Lower Luggage Compartment',
      'Rear Privacy Glass & Power Tailgate',
      '18-inch Matt Black Machined Alloy Wheels'
    ],
    description: 'Award-winning crossover in ST-Line X trim. Features mild-hybrid powertrain delivering exceptional fuel economy and punchy 155PS performance. Equipped with wireless smartphone charging pad, sports suspension, and cruise control.'
  }
];

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
  phonePlaceholder: '[Telephone to be confirmed]',
  emailPlaceholder: '[Email to be confirmed]',
  hoursPlaceholder: '[Opening hours to be confirmed by client]',
  auditNotice: 'This website is prepared for insurance audit and business verification. All vehicle listings shown are example demonstration stock until verified client inventory is supplied. Contact numbers and operating hours are placeholder items pending confirmation.'
};
