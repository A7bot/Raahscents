// ========================================
// RAAH SCENTS - PRODUCTS DATABASE
// ========================================

const allProducts = [
  // ═══ WOMEN'S PERFUMES ═══
  {
    id: 1,
    name: "Baccarat Rouge 540",
    category: "Women",
    subcategory: "Floral · Woody",
    price: 18500,
    ml: ["50ml", "100ml"],
    badge: "Bestseller",
    emoji: "🌸",
    gradient: "linear-gradient(135deg, #1a0a0a 0%, #2d1515 50%, #1a0a0a 100%)",
    image: "images/products/baccarat-rouge.jpg",
    description: "A luminous and addictive scent that captivates the senses.",
    notes: {
      top: "Jasmine, Saffron",
      middle: "Amberwood, Floral",
      base: "Fir Resin, Musk"
    },
    rating: 4.8,
    reviews: 24,
    sizes: [
      { size: "50ml", price: 18500 },
      { size: "100ml", price: 28000 }
    ]
  },
  {
    id: 2,
    name: "La Rose Élégante",
    category: "Women",
    subcategory: "Floral · Fresh",
    price: 13000,
    ml: ["75ml"],
    badge: null,
    emoji: "🌹",
    gradient: "linear-gradient(135deg, #110008 0%, #2b0018 50%, #110008 100%)",
    image: "images/products/la-rose.jpg",
    description: "A delicate bouquet for the modern woman.",
    notes: {
      top: "Bergamot, White Peach",
      middle: "Turkish Rose",
      base: "Sandalwood, Vanilla"
    },
    rating: 4.6,
    reviews: 18,
    sizes: [
      { size: "50ml", price: 9800 },
      { size: "75ml", price: 13000 },
      { size: "100ml", price: 16500 }
    ]
  },
  {
    id: 3,
    name: "Cherry Blossom",
    category: "Women",
    subcategory: "Fruity · Floral",
    price: 9500,
    ml: ["50ml"],
    badge: "New",
    emoji: "🌸",
    gradient: "linear-gradient(135deg, #10000a 0%, #260014 50%, #10000a 100%)",
    image: "images/products/cherry-blossom.jpg",
    description: "Playful and feminine with Asian florals.",
    notes: {
      top: "Lychee, Mandarin",
      middle: "Sakura, Peony",
      base: "White Woods, Musk"
    },
    rating: 4.5,
    reviews: 12,
    sizes: [
      { size: "50ml", price: 9500 },
      { size: "100ml", price: 15000 }
    ]
  },
  {
    id: 4,
    name: "Neroli Blanche",
    category: "Women",
    subcategory: "Floral · Powdery",
    price: 10500,
    ml: ["50ml"],
    badge: null,
    emoji: "🤍",
    gradient: "linear-gradient(135deg, #0a0a08 0%, #1e1e18 50%, #0a0a08 100%)",
    image: "images/products/neroli-blanche.jpg",
    description: "Sun-kissed neroli with delicate white musk.",
    notes: {
      top: "Neroli, Bergamot",
      middle: "White Iris, Orange Blossom",
      base: "White Musk, Sandalwood"
    },
    rating: 4.7,
    reviews: 15,
    sizes: [
      { size: "50ml", price: 10500 },
      { size: "100ml", price: 16500 }
    ]
  },
  {
    id: 5,
    name: "Velvet Narcisse",
    category: "Women",
    subcategory: "Floral · Sensual",
    price: 14500,
    ml: ["50ml"],
    badge: "Luxury",
    emoji: "💎",
    gradient: "linear-gradient(135deg, #0d0008 0%, #260012 50%, #0d0008 100%)",
    image: "images/products/velvet-narcisse.jpg",
    description: "Luxurious narcisse wrapped in silk and musk.",
    notes: {
      top: "Narcisse, Violet",
      middle: "Gardenia, Tuberose",
      base: "Amber, Musk"
    },
    rating: 4.9,
    reviews: 22,
    sizes: [
      { size: "50ml", price: 14500 },
      { size: "100ml", price: 22000 }
    ]
  },

  // ═══ MEN'S PERFUMES ═══
  {
    id: 6,
    name: "Oud Royale",
    category: "Men",
    subcategory: "Oriental · Oud",
    price: 22000,
    ml: ["100ml"],
    badge: "Premium",
    emoji: "🏺",
    gradient: "linear-gradient(135deg, #0d0a00 0%, #2a1e00 50%, #0d0a00 100%)",
    image: "images/products/oud-royale.jpg",
    description: "A majestic blend for the discerning gentleman.",
    notes: {
      top: "Spices, Saffron",
      middle: "Rose Absolute, Oud",
      base: "Amber, Sandalwood"
    },
    rating: 4.9,
    reviews: 28,
    sizes: [
      { size: "50ml", price: 14000 },
      { size: "100ml", price: 22000 }
    ]
  },
  {
    id: 7,
    name: "Desert King",
    category: "Men",
    subcategory: "Woody · Spicy",
    price: 19000,
    ml: ["100ml"],
    badge: "Popular",
    emoji: "👑",
    gradient: "linear-gradient(135deg, #080500 0%, #1c1000 50%, #080500 100%)",
    image: "images/products/desert-king.jpg",
    description: "Bold cedarwood with commanding presence.",
    notes: {
      top: "Black Pepper, Bergamot",
      middle: "Cedarwood, Leather",
      base: "Frankincense, Amber"
    },
    rating: 4.7,
    reviews: 19,
    sizes: [
      { size: "50ml", price: 11500 },
      { size: "100ml", price: 19000 }
    ]
  },
  {
    id: 8,
    name: "Tobacco & Oud",
    category: "Men",
    subcategory: "Woody · Smoky",
    price: 24000,
    ml: ["100ml"],
    badge: "Premium",
    emoji: "🪵",
    gradient: "linear-gradient(135deg, #080300 0%, #1c0a00 50%, #080300 100%)",
    image: "images/products/tobacco-oud.jpg",
    description: "Rich tobacco leaf with dark oud.",
    notes: {
      top: "Cinnamon, Tobacco",
      middle: "Oud, Leather",
      base: "Vanilla, Smoky Amber"
    },
    rating: 4.8,
    reviews: 21,
    sizes: [
      { size: "50ml", price: 15000 },
      { size: "100ml", price: 24000 }
    ]
  },
  {
    id: 9,
    name: "Midnight Oud",
    category: "Men",
    subcategory: "Dark · Oud",
    price: 26000,
    ml: ["100ml"],
    badge: "Exclusive",
    emoji: "🌑",
    gradient: "linear-gradient(135deg, #000000 0%, #0d0d0d 50%, #000000 100%)",
    image: "images/products/midnight-oud.jpg",
    description: "The deepest, most captivating oud.",
    notes: {
      top: "Incense, Spices",
      middle: "Aged Oud, Resins",
      base: "Patchouli, Dark Amber"
    },
    rating: 5.0,
    reviews: 31,
    sizes: [
      { size: "50ml", price: 16500 },
      { size: "100ml", price: 26000 }
    ]
  },
  {
    id: 10,
    name: "Aqua Divina",
    category: "Men",
    subcategory: "Aquatic · Citrus",
    price: 11000,
    ml: ["50ml"],
    badge: null,
    emoji: "🌊",
    gradient: "linear-gradient(135deg, #00080d 0%, #001d2b 50%, #00080d 100%)",
    image: "images/products/aqua-divina.jpg",
    description: "Ocean breeze meets mandarin.",
    notes: {
      top: "Mandarin, Sea Salt",
      middle: "Aquatic Notes",
      base: "Driftwood, Musk"
    },
    rating: 4.4,
    reviews: 11,
    sizes: [
      { size: "50ml", price: 11000 },
      { size: "100ml", price: 17500 }
    ]
  },
  {
    id: 11,
    name: "Spice Merchant",
    category: "Men",
    subcategory: "Oriental · Spicy",
    price: 12500,
    ml: ["50ml"],
    badge: "New",
    emoji: "🧂",
    gradient: "linear-gradient(135deg, #0d0500 0%, #2a1000 50%, #0d0500 100%)",
    image: "images/products/spice-merchant.jpg",
    description: "Warm spices with exotic depth.",
    notes: {
      top: "Nutmeg, Clove",
      middle: "Cumin, Pepper",
      base: "Cedarwood, Amber"
    },
    rating: 4.6,
    reviews: 14,
    sizes: [
      { size: "50ml", price: 12500 },
      { size: "100ml", price: 19500 }
    ]
  },

  // ═══ UNISEX PERFUMES ═══
  {
    id: 12,
    name: "Velvet Noir",
    category: "Unisex",
    subcategory: "Chypre · Musky",
    price: 15000,
    ml: ["50ml"],
    badge: null,
    emoji: "🖤",
    gradient: "linear-gradient(135deg, #0a000d 0%, #1a0030 50%, #0a000d 100%)",
    image: "images/products/velvet-noir.jpg",
    description: "Dark and seductive for everyone.",
    notes: {
      top: "Bergamot, Violet",
      middle: "Black Rose, Patchouli",
      base: "Vanilla Musk, Amber"
    },
    rating: 4.7,
    reviews: 20,
    sizes: [
      { size: "50ml", price: 15000 },
      { size: "100ml", price: 23000 }
    ]
  },
  {
    id: 13,
    name: "Amber d'Or",
    category: "Unisex",
    subcategory: "Amber · Gourmand",
    price: 12500,
    ml: ["50ml"],
    badge: "New",
    emoji: "✨",
    gradient: "linear-gradient(135deg, #0d0800 0%, #291900 50%, #0d0800 100%)",
    image: "images/products/amber-dor.jpg",
    description: "Warm golden amber for everyone.",
    notes: {
      top: "Ginger, Vanilla",
      middle: "Amber, Caramel",
      base: "Sandalwood, Musk"
    },
    rating: 4.6,
    reviews: 16,
    sizes: [
      { size: "50ml", price: 12500 },
      { size: "100ml", price: 19500 }
    ]
  },
  {
    id: 14,
    name: "Saffron Mystique",
    category: "Unisex",
    subcategory: "Oriental · Spicy",
    price: 21000,
    ml: ["100ml"],
    badge: "Luxury",
    emoji: "🌙",
    gradient: "linear-gradient(135deg, #0d0500 0%, #2a1000 50%, #0d0500 100%)",
    image: "images/products/saffron-mystique.jpg",
    description: "Exotic saffron for the adventurous.",
    notes: {
      top: "Saffron, Nutmeg",
      middle: "Rose, Oud",
      base: "Amberwood, Musk"
    },
    rating: 4.8,
    reviews: 25,
    sizes: [
      { size: "50ml", price: 13000 },
      { size: "100ml", price: 21000 }
    ]
  },
  {
    id: 15,
    name: "Golden Hour",
    category: "Unisex",
    subcategory: "Woody · Warm",
    price: 14000,
    ml: ["50ml"],
    badge: "Popular",
    emoji: "🌅",
    gradient: "linear-gradient(135deg, #0d0800 0%, #2a1500 50%, #0d0800 100%)",
    image: "images/products/golden-hour.jpg",
    description: "Warm woods that embrace everyone.",
    notes: {
      top: "Lemon, Petitgrain",
      middle: "Heliotrope, Vanilla",
      base: "Cedar, Benzoin"
    },
    rating: 4.7,
    reviews: 18,
    sizes: [
      { size: "50ml", price: 14000 },
      { size: "100ml", price: 21500 }
    ]
  },
  {
    id: 16,
    name: "Twilight Essence",
    category: "Unisex",
    subcategory: "Floral · Woody",
    price: 13500,
    ml: ["50ml"],
    badge: null,
    emoji: "🌌",
    gradient: "linear-gradient(135deg, #0a0010 0%, #1a0030 50%, #0a0010 100%)",
    image: "images/products/twilight-essence.jpg",
    description: "Where floral meets woody mystery.",
    notes: {
      top: "Bergamot, Grapefruit",
      middle: "Jasmine, Violet",
      base: "Vetiver, Sandalwood"
    },
    rating: 4.5,
    reviews: 13,
    sizes: [
      { size: "50ml", price: 13500 },
      { size: "100ml", price: 20500 }
    ]
  },

  // ═══ PERFUME OILS ═══
  {
    id: 17,
    name: "Oud Oil Essence",
    category: "Oils",
    subcategory: "Pure Oud",
    price: 8500,
    ml: ["10ml"],
    badge: "Premium",
    emoji: "🧴",
    gradient: "linear-gradient(135deg, #0d0a00 0%, #2a1e00 50%, #0d0a00 100%)",
    image: "images/products/oud-oil.jpg",
    description: "Pure concentrated oud oil.",
    notes: {
      top: "Oud",
      middle: "Oud, Resins",
      base: "Dark Amber"
    },
    rating: 4.9,
    reviews: 17,
    sizes: [
      { size: "10ml", price: 8500 },
      { size: "15ml", price: 12000 },
      { size: "30ml", price: 22000 }
    ]
  },
  {
    id: 18,
    name: "Rose Absolute Oil",
    category: "Oils",
    subcategory: "Floral Oil",
    price: 7500,
    ml: ["10ml"],
    badge: null,
    emoji: "🌹",
    gradient: "linear-gradient(135deg, #110008 0%, #2b0018 50%, #110008 100%)",
    image: "images/products/rose-oil.jpg",
    description: "Pure rose absolute oil.",
    notes: {
      top: "Rose",
      middle: "Rose",
      base: "Sandalwood"
    },
    rating: 4.7,
    reviews: 12,
    sizes: [
      { size: "10ml", price: 7500 },
      { size: "15ml", price: 10500 },
      { size: "30ml", price: 19500 }
    ]
  },
  {
    id: 19,
    name: "Amber Resin Oil",
    category: "Oils",
    subcategory: "Amber Oil",
    price: 6500,
    ml: ["10ml"],
    badge: "New",
    emoji: "🟡",
    gradient: "linear-gradient(135deg, #0d0800 0%, #291900 50%, #0d0800 100%)",
    image: "images/products/amber-oil.jpg",
    description: "Warm amber resin oil.",
    notes: {
      top: "Amber",
      middle: "Vanilla, Amber",
      base: "Musk"
    },
    rating: 4.6,
    reviews: 9,
    sizes: [
      { size: "10ml", price: 6500 },
      { size: "15ml", price: 9000 },
      { size: "30ml", price: 16500 }
    ]
  },
  {
    id: 20,
    name: "Jasmine Attar",
    category: "Oils",
    subcategory: "Floral Oil",
    price: 8000,
    ml: ["10ml"],
    badge: null,
    emoji: "🤍",
    gradient: "linear-gradient(135deg, #0a0a08 0%, #1e1e18 50%, #0a0a08 100%)",
    image: "images/products/jasmine-attar.jpg",
    description: "Intoxicating jasmine attar.",
    notes: {
      top: "Jasmine",
      middle: "Jasmine, Floral",
      base: "Amber, Musk"
    },
    rating: 4.8,
    reviews: 14,
    sizes: [
      { size: "10ml", price: 8000 },
      { size: "15ml", price: 11500 },
      { size: "30ml", price: 21000 }
    ]
  },
  {
    id: 21,
    name: "Sandalwood Oil",
    category: "Oils",
    subcategory: "Woody Oil",
    price: 7000,
    ml: ["10ml"],
    badge: null,
    emoji: "🪵",
    gradient: "linear-gradient(135deg, #0a0600 0%, #1c1000 50%, #0a0600 100%)",
    image: "images/products/sandalwood-oil.jpg",
    description: "Pure sandalwood oil.",
    notes: {
      top: "Sandalwood",
      middle: "Sandalwood",
      base: "Musk"
    },
    rating: 4.5,
    reviews: 8,
    sizes: [
      { size: "10ml", price: 7000 },
      { size: "15ml", price: 10000 },
      { size: "30ml", price: 18500 }
    ]
  }
];

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = allProducts;
}
