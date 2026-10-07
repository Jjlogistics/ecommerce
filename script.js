const image = (id, width = 720) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;
const categories = [
  {
    name: "Men",
    icon: "01",
    description: "Easy layers. Excellent tailoring.",
    subcategories: [
      "T-Shirts",
      "Shirts",
      "Polo Shirts",
      "Trousers",
      "Jeans",
      "Shorts",
      "Suits",
      "Native Wear",
      "Jackets",
      "Hoodies",
    ],
    image: "photo-1515886657613-9f3515b0c78f",
  },
  {
    name: "Women",
    icon: "02",
    description: "For wherever the day takes you.",
    subcategories: [
      "Dresses",
      "Tops",
      "Skirts",
      "Trousers",
      "Jeans",
      "Jumpsuits",
      "Blouses",
      "Native Wear",
      "Abayas",
      "Jackets",
    ],
    image: "photo-1539109136881-3be0616acf4b",
  },
  {
    name: "Kids",
    icon: "03",
    description: "Little people. Big personality.",
    subcategories: [
      "Boys",
      "Girls",
      "Baby",
      "School Wear",
      "Party Wear",
      "Casual Wear",
      "Kids Shoes",
    ],
    image: "photo-1503919005314-30d93d07d823",
  },
  {
    name: "Shoes",
    icon: "04",
    description: "A very good place to start.",
    subcategories: [
      "Sneakers",
      "Heels",
      "Flats",
      "Sandals",
      "Boots",
      "Loafers",
      "Slippers",
    ],
    image: "photo-1542291026-7eec264c27ff",
  },
  {
    name: "Bags",
    icon: "05",
    description: "Carry the things you love.",
    subcategories: [
      "Handbags",
      "Backpacks",
      "Crossbody Bags",
      "Shoulder Bags",
      "Tote Bags",
      "Travel Bags",
      "Clutches",
    ],
    image: "photo-1584917865442-de89df76afd3",
  },
  {
    name: "Accessories",
    icon: "06",
    description: "The details make the outfit.",
    subcategories: [
      "Watches",
      "Sunglasses",
      "Belts",
      "Hats",
      "Caps",
      "Jewelry",
      "Scarves",
    ],
    image: "photo-1523275335684-37898b6baf30",
  },
  {
    name: "Traditional / Native Wear",
    icon: "07",
    description: "A heritage all your own.",
    subcategories: [
      "Agbada",
      "Kaftans",
      "Ankara",
      "Senator Wear",
      "Aso Ebi",
      "Lace",
      "Traditional Dresses",
    ],
    image: "photo-1534528741775-53994a69daeb",
  },
  {
    name: "Activewear",
    icon: "08",
    description: "Made to move with you.",
    subcategories: [
      "Gym Wear",
      "Running Wear",
      "Sports Tops",
      "Sports Shorts",
      "Leggings",
      "Tracksuits",
      "Sports Bras",
    ],
    image: "photo-1518611012118-696072aa579a",
  },
  {
    name: "Outerwear",
    icon: "09",
    description: "One more layer. A whole new look.",
    subcategories: [
      "Jackets",
      "Coats",
      "Blazers",
      "Hoodies",
      "Sweatshirts",
      "Cardigans",
      "Vests",
    ],
    image: "photo-1591047139829-d91aecb6caea",
  },
  {
    name: "Underwear & Essentials",
    icon: "10",
    description: "The pieces you reach for daily.",
    subcategories: [
      "Boxers",
      "Briefs",
      "Bras",
      "Panties",
      "Socks",
      "Undershirts",
      "Thermal Wear",
    ],
    image: "photo-1512436991641-6745cdb1723f",
  },
];

const mockProducts = [
  {
    id: "lno-101",
    name: "The Sunday Linen Shirt",
    brand: "OAK & IVORY",
    category: "Men",
    subcategory: "Shirts",
    gender: "Men",
    price: 38500,
    originalPrice: 45000,
    description:
      "Soft, breathable linen with a relaxed cut for slow mornings and long lunches. Designed in Lagos and made to wear on repeat.",
    images: [
      "photo-1521572163474-6864f9cf17ab",
      "photo-1512436991641-6745cdb1723f",
    ],
    colors: ["Chalk", "Olive", "Clay"],
    sizes: ["S", "M", "L", "XL"],
    stock: 14,
    rating: 4.8,
    reviewCount: 28,
    isNew: true,
    isFeatured: true,
    isOnSale: true,
    tags: ["linen", "summer", "everyday"],
  },
  {
    id: "lno-102",
    name: "Adire After Hours Dress",
    brand: "ARA STUDIO",
    category: "Traditional / Native Wear",
    subcategory: "Traditional Dresses",
    gender: "Women",
    price: 74500,
    description:
      "Hand-dyed adire, cut into an easy, flowing silhouette. Every piece carries the small variations that make it yours.",
    images: [
      "photo-1539109136881-3be0616acf4b",
      "photo-1534528741775-53994a69daeb",
    ],
    colors: ["Indigo", "Midnight"],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 6,
    rating: 4.9,
    reviewCount: 41,
    isNew: true,
    isFeatured: true,
    isOnSale: false,
    tags: ["adire", "handmade", "evening"],
  },
  {
    id: "lno-103",
    name: "Everywhere Leather Tote",
    brand: "FORME LAGOS",
    category: "Bags",
    subcategory: "Tote Bags",
    gender: "Unisex",
    price: 68000,
    originalPrice: 85000,
    description:
      "A structured, vegetable-tanned leather carryall with room for all the things. Made in small batches by Lagos artisans.",
    images: [
      "photo-1584917865442-de89df76afd3",
      "photo-1590874103328-eac38a683ce7",
    ],
    colors: ["Cocoa", "Black", "Saddle"],
    sizes: ["One size"],
    stock: 4,
    rating: 4.7,
    reviewCount: 19,
    isNew: false,
    isFeatured: true,
    isOnSale: true,
    tags: ["leather", "work bag", "handmade"],
  },
  {
    id: "lno-104",
    name: "Soft Landing Knit Set",
    brand: "SUNDAY OBJECTS",
    category: "Women",
    subcategory: "Tops",
    gender: "Women",
    price: 56000,
    description:
      "A soft cotton co-ord set with a boxy tee and an easy pull-on trouser. Your off-duty uniform, sorted.",
    images: [
      "photo-1529139574466-a303027c1d8b",
      "photo-1503342217505-b0a15ec3261c",
    ],
    colors: ["Butter", "Sage", "Oat"],
    sizes: ["XS", "S", "M", "L"],
    stock: 22,
    rating: 4.6,
    reviewCount: 13,
    isNew: true,
    isFeatured: true,
    isOnSale: false,
    tags: ["cotton", "co-ord", "loungewear"],
  },
  {
    id: "lno-105",
    name: "Sunday Market Sneakers",
    brand: "OKIKE",
    category: "Shoes",
    subcategory: "Sneakers",
    gender: "Unisex",
    price: 49500,
    originalPrice: 62000,
    description:
      "A low-profile everyday sneaker in supple leather, built for city miles and market detours.",
    images: [
      "photo-1542291026-7eec264c27ff",
      "photo-1600185365926-3a2ce3cdb9eb",
    ],
    colors: ["Brick", "Cream"],
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    stock: 2,
    rating: 4.5,
    reviewCount: 32,
    isNew: true,
    isFeatured: false,
    isOnSale: true,
    tags: ["sneakers", "leather", "comfort"],
  },
  {
    id: "lno-106",
    name: "Sunday Best Mini",
    brand: "LITTLE LAGOS",
    category: "Kids",
    subcategory: "Girls",
    gender: "Kids",
    price: 22500,
    description:
      "A playful cotton poplin dress with a roomy fit and pockets sized for small discoveries.",
    images: [
      "photo-1503919005314-30d93d07d823",
      "photo-1519238263530-99bdd11df2ea",
    ],
    colors: ["Coral", "Sky"],
    sizes: ["2Y", "4Y", "6Y", "8Y"],
    stock: 0,
    rating: 4.8,
    reviewCount: 8,
    isNew: false,
    isFeatured: false,
    isOnSale: false,
    tags: ["cotton", "party", "kids"],
  },
  {
    id: "lno-107",
    name: "Good Form Brass Cuff",
    brand: "NURU OBJECTS",
    category: "Accessories",
    subcategory: "Jewelry",
    gender: "Unisex",
    price: 18000,
    description:
      "A hand-finished brass cuff with a softly hammered surface. Made by a small Lagos-based studio.",
    images: [
      "photo-1611652022419-a9419f74343d",
      "photo-1617038220319-276d3cfab638",
    ],
    colors: ["Brass", "Silver"],
    sizes: ["S", "M"],
    stock: 18,
    rating: 4.9,
    reviewCount: 24,
    isNew: true,
    isFeatured: true,
    isOnSale: false,
    tags: ["jewelry", "handmade", "brass"],
  },
  {
    id: "lno-108",
    name: "The Lagos Rain Jacket",
    brand: "DAYBREAK SUPPLY",
    category: "Outerwear",
    subcategory: "Jackets",
    gender: "Unisex",
    price: 62000,
    originalPrice: 78000,
    description:
      "A lightweight water-resistant layer for the unexpected downpour. Packs into its own inside pocket.",
    images: [
      "photo-1591047139829-d91aecb6caea",
      "photo-1551028719-00167b16eac5",
    ],
    colors: ["Forest", "Black"],
    sizes: ["S", "M", "L", "XL"],
    stock: 9,
    rating: 4.4,
    reviewCount: 17,
    isNew: false,
    isFeatured: true,
    isOnSale: true,
    tags: ["rain", "lightweight", "travel"],
  },
  {
    id: "lno-109",
    name: "Weekend Runner Set",
    brand: "FORME LAGOS",
    category: "Activewear",
    subcategory: "Tracksuits",
    gender: "Women",
    price: 41000,
    description:
      "A breathable stretch jersey set made for early walks, errands, and everything after.",
    images: [
      "photo-1518611012118-696072aa579a",
      "photo-1517836357463-d25dfeac3438",
    ],
    colors: ["Plum", "Charcoal"],
    sizes: ["XS", "S", "M", "L"],
    stock: 7,
    rating: 4.6,
    reviewCount: 15,
    isNew: true,
    isFeatured: false,
    isOnSale: false,
    tags: ["active", "stretch", "running"],
  },
  {
    id: "lno-110",
    name: "Àdìrẹ Weekend Wrap",
    brand: "ARA STUDIO",
    category: "Traditional / Native Wear",
    subcategory: "Ankara",
    gender: "Women",
    price: 52000,
    description:
      "A versatile wrap skirt in hand-printed cotton, made in limited runs with local textile makers.",
    images: [
      "photo-1515886657613-9f3515b0c78f",
      "photo-1525507119028-ed4c629a60a3",
    ],
    colors: ["Indigo", "Ochre"],
    sizes: ["S", "M", "L"],
    stock: 3,
    rating: 4.8,
    reviewCount: 22,
    isNew: false,
    isFeatured: true,
    isOnSale: false,
    tags: ["ankara", "adire", "wrap"],
  },
  {
    id: "lno-111",
    name: "The Everyday Crossbody",
    brand: "FORME LAGOS",
    category: "Bags",
    subcategory: "Crossbody Bags",
    gender: "Women",
    price: 35500,
    description:
      "A compact leather crossbody with an adjustable strap and just-enough room for the essentials.",
    images: [
      "photo-1590874103328-eac38a683ce7",
      "photo-1584917865442-de89df76afd3",
    ],
    colors: ["Tan", "Black"],
    sizes: ["One size"],
    stock: 11,
    rating: 4.5,
    reviewCount: 12,
    isNew: false,
    isFeatured: false,
    isOnSale: false,
    tags: ["leather", "everyday", "crossbody"],
  },
  {
    id: "lno-112",
    name: "Coastline Slide",
    brand: "OKIKE",
    category: "Shoes",
    subcategory: "Sandals",
    gender: "Unisex",
    price: 24000,
    originalPrice: 30000,
    description:
      "An easy, cushioned leather slide with a clean shape and a sole built for the long way home.",
    images: [
      "photo-1603487742131-4160ec999306",
      "photo-1600185365926-3a2ce3cdb9eb",
    ],
    colors: ["Sand", "Black"],
    sizes: ["38", "39", "40", "41", "42", "43"],
    stock: 26,
    rating: 4.3,
    reviewCount: 31,
    isNew: false,
    isFeatured: false,
    isOnSale: true,
    tags: ["sandals", "leather", "comfort"],
  },
  {
    id: "lno-113",
    name: "The Soft Cotton Tee",
    brand: "OAK & IVORY",
    category: "Men",
    subcategory: "T-Shirts",
    gender: "Men",
    price: 16500,
    description:
      "A heavyweight, garment-washed cotton tee. Relaxed through the body, considered in every detail.",
    images: [
      "photo-1521572163474-6864f9cf17ab",
      "photo-1503342217505-b0a15ec3261c",
    ],
    colors: ["White", "Olive", "Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 35,
    rating: 4.7,
    reviewCount: 54,
    isNew: false,
    isFeatured: true,
    isOnSale: false,
    tags: ["cotton", "basics", "everyday"],
  },
  {
    id: "lno-114",
    name: "Palm Shade Shirt Dress",
    brand: "SUNDAY OBJECTS",
    category: "Women",
    subcategory: "Dresses",
    gender: "Women",
    price: 46500,
    description:
      "A breezy shirt dress cut in soft cotton with a tie waist and a hem that moves with you.",
    images: [
      "photo-1539533018447-63fcce2678e3",
      "photo-1525507119028-ed4c629a60a3",
    ],
    colors: ["Palm", "Clay"],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 13,
    rating: 4.6,
    reviewCount: 20,
    isNew: true,
    isFeatured: false,
    isOnSale: false,
    tags: ["cotton", "dress", "summer"],
  },
  {
    id: "lno-115",
    name: "Old Town Leather Loafer",
    brand: "OKIKE",
    category: "Shoes",
    subcategory: "Loafers",
    gender: "Men",
    price: 58500,
    originalPrice: 72000,
    description:
      "A polished leather loafer, stitched by hand and designed to get better with every wear.",
    images: [
      "photo-1531310197839-ccf54634509e",
      "photo-1542291026-7eec264c27ff",
    ],
    colors: ["Cocoa", "Black"],
    sizes: ["40", "41", "42", "43", "44"],
    stock: 5,
    rating: 4.8,
    reviewCount: 16,
    isNew: false,
    isFeatured: false,
    isOnSale: true,
    tags: ["leather", "formal", "handmade"],
  },
  {
    id: "lno-116",
    name: "Lagos Timepiece No. 02",
    brand: "NURU OBJECTS",
    category: "Accessories",
    subcategory: "Watches",
    gender: "Unisex",
    price: 89500,
    description:
      "A minimalist, water-resistant timepiece with a brushed steel case and a locally assembled strap.",
    images: [
      "photo-1523275335684-37898b6baf30",
      "photo-1524805444758-089113d48a6d",
    ],
    colors: ["Silver", "Gold"],
    sizes: ["One size"],
    stock: 12,
    rating: 4.6,
    reviewCount: 29,
    isNew: true,
    isFeatured: true,
    isOnSale: false,
    tags: ["watch", "steel", "minimal"],
  },
  {
    id: "lno-117",
    name: "Sunday Senator Set",
    brand: "OAK & IVORY",
    category: "Traditional / Native Wear",
    subcategory: "Senator Wear",
    gender: "Men",
    price: 95000,
    description:
      "A modern senator set with clean finishing, woven from a soft, breathable cotton blend in Nigeria.",
    images: [
      "photo-1515886657613-9f3515b0c78f",
      "photo-1523398002811-999ca8dec234",
    ],
    colors: ["Midnight", "Sand"],
    sizes: ["M", "L", "XL", "XXL"],
    stock: 8,
    rating: 4.9,
    reviewCount: 37,
    isNew: true,
    isFeatured: true,
    isOnSale: false,
    tags: ["native", "senator", "occasion"],
  },
  {
    id: "lno-118",
    name: "Little Day Backpack",
    brand: "LITTLE LAGOS",
    category: "Kids",
    subcategory: "Boys",
    gender: "Kids",
    price: 19500,
    description:
      "A durable canvas backpack with padded straps and a roomy front pocket for their little treasures.",
    images: [
      "photo-1553062407-98eeb64c6a62",
      "photo-1503919005314-30d93d07d823",
    ],
    colors: ["Mustard", "Teal"],
    sizes: ["One size"],
    stock: 17,
    rating: 4.5,
    reviewCount: 9,
    isNew: false,
    isFeatured: false,
    isOnSale: false,
    tags: ["canvas", "school", "kids"],
  },
  {
    id: "lno-119",
    name: "Sculpted Evening Heel",
    brand: "OKIKE",
    category: "Shoes",
    subcategory: "Heels",
    gender: "Women",
    price: 55000,
    description:
      "A considered mid-heel sandal in soft leather, made for evenings that turn into stories.",
    images: ["photo-1543163521-1bf539c55dd2", "photo-1542291026-7eec264c27ff"],
    colors: ["Wine", "Black"],
    sizes: ["37", "38", "39", "40", "41"],
    stock: 0,
    rating: 4.7,
    reviewCount: 11,
    isNew: false,
    isFeatured: false,
    isOnSale: false,
    tags: ["heels", "leather", "occasion"],
  },
  {
    id: "lno-120",
    name: "Market Day Beaded Necklace",
    brand: "NURU OBJECTS",
    category: "Accessories",
    subcategory: "Jewelry",
    gender: "Women",
    price: 12500,
    description:
      "A joyful strand of hand-finished glass beads, thoughtfully made by a women-led collective.",
    images: [
      "photo-1611652022419-a9419f74343d",
      "photo-1617038220319-276d3cfab638",
    ],
    colors: ["Citrus", "Ocean"],
    sizes: ["One size"],
    stock: 29,
    rating: 4.8,
    reviewCount: 46,
    isNew: true,
    isFeatured: false,
    isOnSale: false,
    tags: ["beads", "handmade", "jewelry"],
  },
  {
    id: "lno-121",
    name: "Cloud Nine Lounge Set",
    brand: "SUNDAY OBJECTS",
    category: "Underwear & Essentials",
    subcategory: "Undershirts",
    gender: "Unisex",
    price: 29500,
    description:
      "An exceptionally soft cotton lounge set, made for unwinding properly.",
    images: [
      "photo-1512436991641-6745cdb1723f",
      "photo-1503342217505-b0a15ec3261c",
    ],
    colors: ["Oat", "Sage"],
    sizes: ["S", "M", "L", "XL"],
    stock: 19,
    rating: 4.6,
    reviewCount: 18,
    isNew: false,
    isFeatured: false,
    isOnSale: false,
    tags: ["cotton", "lounge", "essentials"],
  },
  {
    id: "lno-122",
    name: "Studio Ribbed Legging",
    brand: "DAYBREAK SUPPLY",
    category: "Activewear",
    subcategory: "Leggings",
    gender: "Women",
    price: 21000,
    originalPrice: 26000,
    description:
      "A supportive ribbed legging with a high rise and a soft, sculpting feel for movement or rest.",
    images: [
      "photo-1518611012118-696072aa579a",
      "photo-1517836357463-d25dfeac3438",
    ],
    colors: ["Black", "Plum"],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 16,
    rating: 4.4,
    reviewCount: 27,
    isNew: false,
    isFeatured: false,
    isOnSale: true,
    tags: ["leggings", "gym", "stretch"],
  },
  {
    id: "lno-123",
    name: "Aso Oke Weekend Clutch",
    brand: "ARA STUDIO",
    category: "Bags",
    subcategory: "Clutches",
    gender: "Women",
    price: 39000,
    description:
      "A structured evening clutch wrapped in handwoven aso oke, with a detachable chain strap.",
    images: [
      "photo-1584917865442-de89df76afd3",
      "photo-1590874103328-eac38a683ce7",
    ],
    colors: ["Gold", "Indigo"],
    sizes: ["One size"],
    stock: 6,
    rating: 4.9,
    reviewCount: 14,
    isNew: true,
    isFeatured: false,
    isOnSale: false,
    tags: ["aso oke", "handwoven", "occasion"],
  },
  {
    id: "lno-124",
    name: "The Good Layer Blazer",
    brand: "OAK & IVORY",
    category: "Outerwear",
    subcategory: "Blazers",
    gender: "Women",
    price: 72000,
    description:
      "An unlined, beautifully relaxed blazer in a breathable cotton-linen blend. Tailored in Lagos.",
    images: [
      "photo-1591047139829-d91aecb6caea",
      "photo-1539109136881-3be0616acf4b",
    ],
    colors: ["Stone", "Olive"],
    sizes: ["XS", "S", "M", "L"],
    stock: 1,
    rating: 4.7,
    reviewCount: 21,
    isNew: false,
    isFeatured: true,
    isOnSale: false,
    tags: ["blazer", "tailored", "linen"],
  },
];

let products = mockProducts;

const nigeriaStates = {
  Abia: ["Umuahia North", "Aba North", "Aba South", "Arochukwu"],
  Adamawa: ["Yola North", "Yola South", "Mubi North", "Jimeta"],
  "Akwa Ibom": ["Uyo", "Eket", "Ikot Ekpene", "Oron"],
  Anambra: ["Awka South", "Onitsha North", "Nnewi North", "Ekwusigo"],
  Bauchi: ["Bauchi", "Azare", "Misau", "Ningi"],
  Bayelsa: ["Yenagoa", "Brass", "Nembe", "Ogbia"],
  Benue: ["Makurdi", "Gboko", "Otukpo", "Katsina-Ala"],
  Borno: ["Maiduguri", "Biu", "Jere", "Konduga"],
  "Cross River": ["Calabar Municipal", "Calabar South", "Ogoja", "Ikom"],
  Delta: ["Warri South", "Udu", "Sapele", "Ughelli North"],
  Ebonyi: ["Abakaliki", "Afikpo North", "Ezza South", "Onicha"],
  Edo: ["Oredo", "Egor", "Ikpoba-Okha", "Uhunmwonde"],
  Ekiti: ["Ado Ekiti", "Ikere", "Irepodun/Ifelodun", "Oye"],
  Enugu: ["Enugu North", "Enugu South", "Nsukka", "Nkanu West"],
  "Federal Capital Territory": [
    "Abuja Municipal",
    "Gwagwalada",
    "Kuje",
    "Bwari",
    "Kubwa",
  ],
  Gombe: ["Gombe", "Billiri", "Kaltungo", "Dukku"],
  Imo: ["Owerri Municipal", "Owerri West", "Orlu", "Okigwe"],
  Jigawa: ["Dutse", "Hadejia", "Kazaure", "Gumel"],
  Kaduna: ["Kaduna North", "Kaduna South", "Zaria", "Kafanchan"],
  Kano: ["Kano Municipal", "Nassarawa", "Fagge", "Gwale"],
  Katsina: ["Katsina", "Daura", "Funtua", "Malumfashi"],
  Kebbi: ["Birnin Kebbi", "Argungu", "Yauri", "Zuru"],
  Kogi: ["Lokoja", "Okene", "Kabba", "Idah"],
  Kwara: ["Ilorin West", "Ilorin South", "Offa", "Omu-Aran"],
  Lagos: [
    "Ikeja",
    "Eti-Osa",
    "Lagos Island",
    "Surulere",
    "Yaba",
    "Lekki",
    "Ikorodu",
    "Alimosho",
  ],
  Nasarawa: ["Lafia", "Keffi", "Karu", "Akwanga"],
  Niger: ["Minna", "Bida", "Suleja", "Kontagora"],
  Ogun: ["Abeokuta South", "Abeokuta North", "Ijebu Ode", "Sagamu"],
  Ondo: ["Akure South", "Ondo West", "Owo", "Ikare"],
  Osun: ["Osogbo", "Ile-Ife", "Ilesa West", "Ede North"],
  Oyo: ["Ibadan North", "Ibadan South-West", "Ogbomosho North", "Oyo East"],
  Plateau: ["Jos North", "Jos South", "Barkin Ladi", "Pankshin"],
  Rivers: ["Port Harcourt", "Obio-Akpor", "Eleme", "Bonny"],
  Sokoto: ["Sokoto North", "Sokoto South", "Tambuwal", "Wurno"],
  Taraba: ["Jalingo", "Wukari", "Bali", "Sardauna"],
  Yobe: ["Damaturu", "Potiskum", "Gashua", "Nguru"],
  Zamfara: ["Gusau", "Kaura Namoda", "Talata Mafara", "Anka"],
};

const formatNaira = (amount) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
const productService = {
  async list() {
    return mockProducts;
  },
};
const locationService = {
  getStates() {
    return Object.keys(nigeriaStates);
  },
  getCities(state) {
    return nigeriaStates[state] ?? [];
  },
};
const readStore = (key, fallback) => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch (error) {
    console.error(
      `Could not read saved ${key} data. Starting with an empty selection.`,
      error,
    );
    return fallback;
  }
};
const savedCart = readStore("leno-cart", []);
let cart = Array.isArray(savedCart)
  ? savedCart.filter((line) => {
      const product = products.find(({ id }) => id === line?.productId);
      return (
        product &&
        Number.isInteger(line.quantity) &&
        line.quantity > 0 &&
        line.quantity <= product.stock &&
        product.sizes.includes(line.size) &&
        product.colors.includes(line.color)
      );
    })
  : [];
const savedWishlist = readStore("leno-wishlist", []);
let wishlist = Array.isArray(savedWishlist)
  ? [...new Set(savedWishlist)].filter((id) =>
      products.some((product) => product.id === id),
    )
  : [];
let selectedCategory = "";
let selectedSubcategory = "";
let selectedGender = "";
let activePanel = "cart";
let lastFocusedElement = null;
let activeProductId = null;
let closingProductFromHistory = false;
let authenticatedCustomer = readDemoSession();
let pendingCheckout = false;
let accountMode = "login";

function readDemoSession() {
  try {
    const saved =
      sessionStorage.getItem("leno-demo-session") ??
      localStorage.getItem("leno-demo-remembered-session");
    if (!saved) return null;
    const customer = JSON.parse(saved);
    return typeof customer?.name === "string" &&
      typeof customer?.email === "string"
      ? customer
      : null;
  } catch (error) {
    console.error("Could not restore the demo account session.", error);
    return null;
  }
}

function updateAccountTrigger() {
  const name = authenticatedCustomer?.name;
  const label = name ? `Account for ${name}` : "Sign in or create an account";
  $("#account-trigger").setAttribute("aria-label", label);
  $("#mobile-account").textContent = name ? `Account · ${name}` : "Account";
}

function accountMessage(message, isError = false) {
  const feedback = $("#account-feedback");
  if (!feedback) return;
  feedback.textContent = message;
  feedback.classList.toggle("is-error", isError);
}

function renderAccountDialog(message = "") {
  const content = $("#account-content");
  if (authenticatedCustomer) {
    content.innerHTML =
      `<div class="account-card"><p class="eyebrow">Your LENO account</p><h2 id="account-title">Good to see you, <em>${escapeHtml(authenticatedCustomer.name.split(/\s+/)[0])}.</em></h2><p>You're signed in as ${escapeHtml(authenticatedCustomer.email)}. Your cart stays saved on this device.</p><p class="account-note">This is a local demo account, not a secure production login. Connect a trusted authentication service before launch.</p><button class="button button-outline account-signout" type="button" id="account-signout">Sign out</button></div>`;
    return;
  }

  const registering = accountMode === "register";
  content.innerHTML =
    `<div class="account-card">
      <p class="eyebrow">${pendingCheckout ? "Your cart is saved" : "Welcome to LENO"}</p>
      <h2 id="account-title">${pendingCheckout ? "One more step, " : "Your style, "}<em>${pendingCheckout ? "then checkout." : "your way."}</em></h2>
      <p class="account-intro">${pendingCheckout ? "Create an account or sign in before continuing to checkout. Your cart will be waiting." : registering ? "Create an account to check out and keep your cart close." : "Sign in to your account for a more personal shopping experience."}</p>
      <form id="account-form" novalidate>
        ${registering ? '<label>Full name<span class="account-input-wrap"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="8" r="4"/></svg><input name="name" type="text" autocomplete="name" required minlength="2" placeholder="e.g. Amara Okafor"></span></label>' : ""}
        <label>Email address<span class="account-input-wrap"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg><input name="email" type="email" autocomplete="email" required placeholder="you@example.com"></span></label>
        <label>Password<span class="account-input-wrap"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg><input name="password" type="password" autocomplete="${registering ? "new-password" : "current-password"}" minlength="8" required placeholder="${registering ? "At least 8 characters" : "Enter your password"}"></span></label>
        ${registering ? '<label>Confirm password<span class="account-input-wrap"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg><input name="confirmPassword" type="password" autocomplete="new-password" minlength="8" required placeholder="Confirm your password"></span></label>' : '<div class="account-form-options"><label class="remember-option"><input name="rememberMe" type="checkbox"><span>Remember me</span></label><button class="forgot-password" type="button" id="forgot-password">Forgot password?</button></div>'}
        <button class="button button-dark account-submit" type="submit">${registering ? "Create account" : "Sign in"}</button>
        <p id="account-feedback" aria-live="polite" role="status"></p>
      </form>
      <button class="account-mode-toggle" type="button" data-account-mode="${registering ? "login" : "register"}">${registering ? "Already have an account? Sign in" : "Don’t have an account? Sign up"}</button>
    <div class="auth-divider"><span>or</span></div>
    <div class="social-auth">
      <button type="button" class="button button-outline google-auth-btn" id="google-auth-btn" aria-label="Continue with Google">
        <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
        <span>Continue with Google</span>
      </button>
    </div>
      <p class="account-note">Demo account details are stored only in this browser. This is not a secure production authentication service.</p>
    </div>`;
  accountMessage(message);
}



function openAccountDialog({ mode = "login", message = "" } = {}) {
  accountMode = mode;
  renderAccountDialog(message);
  lastFocusedElement = document.activeElement;
  if (!$("#account-dialog").open) $("#account-dialog").showModal();
}

function encodeBase64(bytes) {
  return btoa(String.fromCharCode(...new Uint8Array(bytes)));
}

async function hashDemoPassword(password, salt) {
  if (!crypto.subtle) {
    throw new Error("Secure browser cryptography is unavailable in this context.");
  }
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"],
  );
  return crypto.subtle.deriveBits(
    { name: "PBKDF2", salt, iterations: 150000, hash: "SHA-256" },
    key,
    256,
  );
}

function constantTimeEqual(left, right) {
  if (left.length !== right.length) return false;
  let difference = 0;
  for (let index = 0; index < left.length; index += 1) {
    difference |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }
  return difference === 0;
}

async function handleAccountSubmit(form) {
  if (!form.reportValidity()) return;
  const submitButton = $('button[type="submit"]', form);
  submitButton.disabled = true;
  accountMessage("Please wait…");
  try {
    const formData = new FormData(form);
    const email = String(formData.get("email")).trim().toLocaleLowerCase();
    const password = String(formData.get("password"));
    const confirmPassword = String(formData.get("confirmPassword") ?? "");
    const accounts = readStore("leno-demo-accounts", []);
    const savedAccounts = Array.isArray(accounts) ? accounts : [];

    if (accountMode === "register") {
      const name = String(formData.get("name")).trim();
      if (name.length < 2) {
        accountMessage("Enter your full name to create an account.", true);
        return;
      }
      if (password !== confirmPassword) {
        accountMessage("Passwords do not match. Please try again.", true);
        return;
      }
      if (savedAccounts.some((account) => account.email === email)) {
        accountMode = "login";
        renderAccountDialog("An account already uses this email. Sign in instead.");
        return;
      }
      const salt = crypto.getRandomValues(new Uint8Array(16));
      const digest = await hashDemoPassword(password, salt);
      savedAccounts.push({
        email,
        name,
        salt: encodeBase64(salt),
        digest: encodeBase64(digest),
      });
      localStorage.setItem("leno-demo-accounts", JSON.stringify(savedAccounts));
      await startDemoSession({ email, name }, formData.get("rememberMe") === "on");
      return;
    }

    const account = savedAccounts.find((saved) => saved.email === email);
    if (!account) {
      accountMessage("No account was found for this email. Create one to continue.", true);
      return;
    }
    const derived = await hashDemoPassword(
      password,
      Uint8Array.from(atob(account.salt), (character) =>
        character.charCodeAt(0),
      ),
    );
    const digest = encodeBase64(derived);
    if (!constantTimeEqual(digest, account.digest)) {
      accountMessage("That email and password combination was not recognised.", true);
      return;
    }
    await startDemoSession(
      { email: account.email, name: account.name },
      formData.get("rememberMe") === "on",
    );
  } catch (error) {
    console.error("Could not complete the local demo account action.", error);
    accountMessage(
      "We couldn't save or verify this demo account in your browser. Please try again.",
      true,
    );
  } finally {
    if (submitButton.isConnected) submitButton.disabled = false;
  }
}



async function startDemoSession(customer, rememberMe = false) {
  if (rememberMe) {
    localStorage.setItem(
      "leno-demo-remembered-session",
      JSON.stringify(customer),
    );
    sessionStorage.removeItem("leno-demo-session");
  } else {
    sessionStorage.setItem("leno-demo-session", JSON.stringify(customer));
    localStorage.removeItem("leno-demo-remembered-session");
  }
  authenticatedCustomer = customer;
  updateAccountTrigger();
  $("#account-dialog").close();
  if (pendingCheckout) {
    pendingCheckout = false;
    renderCheckout();
  }
}

function handleGoogleAuth() {
  showToast("Google sign-in requires a backend OAuth integration. This demo uses local accounts only.");
}

function requireCustomerForCheckout() {
  if (authenticatedCustomer) return true;
  pendingCheckout = true;
  openAccountDialog({
    mode: "register",
    message: "Create an account or sign in before continuing to checkout. Your cart is saved.",
  });
  return false;
}

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [
  ...parent.querySelectorAll(selector),
];
const revealObserver =
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? new IntersectionObserver(
        (entries, observer) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        },
        { rootMargin: "0px 0px -35px 0px", threshold: 0.08 },
      )
    : null;

function observeReveals(root = document) {
  if (!revealObserver) return;
  root
    .querySelectorAll(".product-card, .category-card")
    .forEach((element) => {
      element.classList.add("reveal-item");
      revealObserver.observe(element);
    });
}

function persistState() {
  try {
    localStorage.setItem("leno-cart", JSON.stringify(cart));
    localStorage.setItem("leno-wishlist", JSON.stringify(wishlist));
  } catch (error) {
    console.error("Could not persist the cart and wishlist to this device.", error);
    showToast("Your changes are active, but could not be saved on this device.");
  }
}

function openInfoPage(page) {
  const infoPages = {
    delivery: {
      title: "Delivery across Nigeria",
      body: "<p>This demo includes sample delivery estimates only. A live launch needs delivery zones, carrier rates, dispatch times and tracking from the fulfilment partner.</p><p>Complimentary delivery over ₦150,000 is an example offer, not a live service commitment.</p>",
    },
    returns: {
      title: "Returns & exchanges",
      body: "<p>Return and exchange terms must be confirmed by LENO before launch. The product detail copy is placeholder information and is not a final policy.</p><p>For this demo, no purchases or returns are processed.</p>",
    },
    faq: {
      title: "Frequently asked questions",
      body: "<details><summary>Can I place a real order?</summary><p>No. Checkout is a demonstration only; no payment is collected.</p></details><details><summary>Where does LENO deliver?</summary><p>The experience is designed for Nigeria. Delivery coverage must be connected to a live fulfilment service.</p></details><details><summary>How do I contact LENO?</summary><p>Email <a href=\"mailto:hello@leno.ng\">hello@leno.ng</a>.</p></details>",
    },
    size: {
      title: "A note on sizing",
      body: "<p>Sizes shown are sample product data and vary by label. Please refer to the product-specific size chart or contact the designer before ordering.</p><p>For help, write to <a href=\"mailto:hello@leno.ng\">hello@leno.ng</a>.</p>",
    },
    about: {
      title: "The LENO story",
      body: "<p>LENO is a concept for a considered fashion marketplace focused on independent Nigerian labels and everyday pieces.</p><p>Product descriptions, reviews and availability shown here are sample content for the demo.</p>",
    },
    privacy: {
      title: "Privacy",
      body: "<p>This demonstration does not send checkout details to a server. The cart and wishlist are stored in local browser storage on this device.</p><p>A production privacy notice must describe real data collection, retention, processors and customer rights before launch.</p>",
    },
    terms: {
      title: "Terms & conditions",
      body: "<p>This storefront is a non-transactional demo. The sample catalogue, pricing, offers and policies are not an offer to sell goods.</p><p>Final terms must be reviewed and published by the business before accepting orders.</p>",
    },
  };
  const content = infoPages[page];
  if (!content) return;
  lastFocusedElement = document.activeElement;
  $("#info-content").innerHTML = `<p class="eyebrow">LENO / Helpful things</p><h2 id="info-title">${content.title}</h2>${content.body}`;
  $("#info-dialog").showModal();
}

function stockText(stock) {
  if (stock === 0) return { text: "Out of stock", level: "out" };
  if (stock <= 3) return { text: `Only ${stock} left`, level: "critical" };
  if (stock <= 8) return { text: `${stock} left`, level: "low" };
  return { text: `${stock} in stock`, level: "plenty" };
}

function categoryProductCount(category) {
  return products.filter((product) => product.category === category.name)
    .length;
}

function categoryCard(category) {
  return `<article class="category-card" style="--category-image:url('${image(category.image, 680)}')">
    <div class="category-card-image" role="img" aria-label="${category.name} fashion"></div>
    <div class="category-card-content"><span class="category-number">${category.icon} / LENO EDIT</span><h3>${category.name}</h3><p>${category.description}</p><div class="category-card-bottom"><span>${categoryProductCount(category)} curated pieces</span><button data-category-filter="${category.name}" aria-label="Shop ${category.name}">Shop edit <span aria-hidden="true">↗</span></button></div></div>
  </article>`;
}

function renderCategories() {
  $("#category-grid").innerHTML = categories.map(categoryCard).join("");
  const megaGroups = categories
    .map(
      (category) =>
        `<div class="mega-group"><button class="mega-title" data-category-filter="${category.name}">${category.name}<span>${categoryProductCount(category)}</span></button>${category.subcategories.map((subcategory) => `<button class="mega-subcategory" data-subcategory-filter="${subcategory}" data-parent-category="${category.name}">${subcategory}</button>`).join("")}</div>`,
    )
    .join("");
  $("#mega-menu").innerHTML =
    `<div class="mega-menu-intro"><p class="eyebrow">The LENO directory</p><h2>Find your <em>something.</em></h2><button data-category-filter="">View all categories <span>↗</span></button></div><div class="mega-groups">${megaGroups}</div>`;
  $("#mobile-category-list").innerHTML = categories
    .map(
      (category) =>
        `<details><summary>${category.name}<span>${categoryProductCount(category)} pieces</span></summary><div>${category.subcategories.map((subcategory) => `<button data-subcategory-filter="${subcategory}" data-parent-category="${category.name}">${subcategory}</button>`).join("")}</div></details>`,
    )
    .join("");
  $("#filter-category").insertAdjacentHTML(
    "beforeend",
    categories.map(({ name }) => `<option>${name}</option>`).join(""),
  );
  const brands = [...new Set(products.map(({ brand }) => brand))].sort();
  $("#filter-brand").insertAdjacentHTML(
    "beforeend",
    brands.map((brand) => `<option>${brand}</option>`).join(""),
  );
  const colors = [
    ...new Set(products.flatMap(({ colors: productColors }) => productColors)),
  ].sort();
  $("#filter-color").insertAdjacentHTML(
    "beforeend",
    colors.map((color) => `<option>${color}</option>`).join(""),
  );
  observeReveals($("#category-grid"));
}

function productCard(product, index = 0) {
  const stock = stockText(product.stock);
  const saved = wishlist.includes(product.id);
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;
  return `<article class="product-card" style="--reveal-delay:${Math.min(index, 5) * 55}ms" data-product-id="${product.id}">
    <button class="product-image-button" data-open-product="${product.id}" aria-label="View ${product.name}">
      <img class="product-image" src="${image(product.images[0], 680)}" alt="${product.name} by ${product.brand}" loading="lazy">
      ${product.isNew ? '<span class="product-badge badge-new">Just in</span>' : ""}
      ${discount ? `<span class="product-badge badge-sale">${discount}% off</span>` : ""}
      <span class="image-look">Take a closer look <span aria-hidden="true">↗</span></span>
    </button>
    <button class="wishlist-button ${saved ? "is-saved" : ""}" data-wishlist="${product.id}" aria-pressed="${saved}" aria-label="${saved ? "Remove from" : "Add to"} wishlist: ${product.name}">${saved ? "♥" : "♡"}</button>
    <div class="product-info"><div class="product-brand-row"><span>${product.brand}</span><span class="product-rating">★ ${product.rating.toFixed(1)} <span>(${product.reviewCount})</span></span></div>
      <button class="product-name" data-open-product="${product.id}">${product.name}</button>
      <div class="product-category">${product.subcategory} <span>·</span> ${product.category}</div>
      <div class="product-price">${formatNaira(product.price)} ${product.originalPrice ? `<s>${formatNaira(product.originalPrice)}</s>` : ""}</div>
      <div class="product-sizes" aria-label="Available sizes">Sizes ${product.sizes.join(" · ")}</div>
      <div class="product-colours" aria-label="Available colours">${product.colors
        .slice(0, 4)
        .map(
          (color) =>
            `<span title="${color}" aria-label="${color}" style="--swatch:${colourHex(color)}"></span>`,
        )
        .join("")}<small>${product.colors.length} colours</small></div>
      <div class="product-stock stock-${stock.level}"><span aria-hidden="true"></span>${stock.text}</div>
      <button class="quick-add ${product.stock === 0 ? "is-unavailable" : ""}" data-open-product="${product.id}" ${product.stock === 0 ? 'aria-label="View out-of-stock product"' : ""}>${product.stock === 0 ? "Out of stock" : "Choose options"} <span aria-hidden="true">↗</span></button>
    </div></article>`;
}

function colourHex(color) {
  const colors = {
    Chalk: "#eceae1",
    Olive: "#697459",
    Clay: "#b36e55",
    Indigo: "#3c456f",
    Midnight: "#293143",
    Cocoa: "#70503d",
    Black: "#222222",
    Saddle: "#ad7753",
    Butter: "#ead783",
    Sage: "#9ca88a",
    Oat: "#c9bca5",
    Brick: "#a74b38",
    Cream: "#e7dfca",
    Brass: "#b18a43",
    Silver: "#aeb1b3",
    Forest: "#52654b",
    Plum: "#75516f",
    Ochre: "#c3933e",
    Tan: "#bd906c",
    Sand: "#c9b99a",
    White: "#f4f3ef",
    Wine: "#703f4d",
    Gold: "#caa64f",
    Citrus: "#d9be4b",
    Ocean: "#598499",
    Charcoal: "#44464a",
    Stone: "#b6b1a1",
    Palm: "#829276",
    Coral: "#dc856e",
    Sky: "#8cb9d0",
    Mustard: "#d2a63e",
    Teal: "#478a86",
  };
  return colors[color] ?? "#b7aa9a";
}

function matchesFilters(product) {
  const query = $("#product-search").value.trim().toLocaleLowerCase();
  const searchable = [
    product.name,
    product.brand,
    product.category,
    product.subcategory,
    product.description,
    ...product.colors,
    ...product.tags,
  ]
    .join(" ")
    .toLocaleLowerCase();
  if (query && !searchable.includes(query)) return false;
  if (selectedCategory && product.category !== selectedCategory) return false;
  if (selectedSubcategory && product.subcategory !== selectedSubcategory)
    return false;
  if (
    selectedGender &&
    product.gender !== selectedGender &&
    !(selectedGender === "Women" && product.gender === "Unisex") &&
    !(selectedGender === "Men" && product.gender === "Unisex")
  )
    return false;
  if (
    $("#filter-size").value &&
    !product.sizes.includes($("#filter-size").value)
  )
    return false;
  if ($("#filter-brand").value && product.brand !== $("#filter-brand").value)
    return false;
  if (
    $("#filter-color").value &&
    !product.colors.includes($("#filter-color").value)
  )
    return false;
  if ($("#filter-stock").checked && product.stock < 1) return false;
  if ($("#filter-sale").checked && !product.isOnSale) return false;
  if ($("#filter-new").checked && !product.isNew) return false;
  if (
    Number($("#filter-rating").value) &&
    product.rating < Number($("#filter-rating").value)
  )
    return false;
  if ($("#price-min").value && product.price < Number($("#price-min").value))
    return false;
  if ($("#price-max").value && product.price > Number($("#price-max").value))
    return false;
  return true;
}

function filteredProducts() {
  const result = products.filter(matchesFilters);
  const sort = $("#sort-select").value;
  const sorters = {
    newest: (a, b) => Number(b.isNew) - Number(a.isNew),
    "price-asc": (a, b) => a.price - b.price,
    "price-desc": (a, b) => b.price - a.price,
    rating: (a, b) => b.rating - a.rating,
    popular: (a, b) => b.reviewCount - a.reviewCount,
    featured: (a, b) =>
      Number(b.isFeatured) - Number(a.isFeatured) ||
      Number(b.isNew) - Number(a.isNew),
  };
  return result.sort(sorters[sort] ?? sorters.featured);
}

function updateFilterCount() {
  const count =
    Number(Boolean(selectedCategory)) +
    Number(Boolean(selectedSubcategory)) +
    Number(Boolean(selectedGender)) +
    Number(Boolean($("#filter-size").value)) +
    Number(Boolean($("#filter-brand").value)) +
    Number(Boolean($("#filter-color").value)) +
    Number($("#filter-stock").checked) +
    Number($("#filter-sale").checked) +
    Number($("#filter-new").checked) +
    Number(Number($("#filter-rating").value) > 0) +
    Number(Boolean($("#price-min").value)) +
    Number(Boolean($("#price-max").value));
  const badge = $("#active-filter-count");
  badge.hidden = count === 0;
  badge.textContent = count;
}

function renderCatalog() {
  const visible = filteredProducts();
  const query = $("#product-search").value.trim();
  $("#product-grid").innerHTML = visible.map(productCard).join("");
  $("#product-grid").hidden = visible.length === 0;
  $("#empty-products").hidden = visible.length !== 0 || !products.length;
  $("#catalog-error").hidden = true;
  $("#results-count").textContent =
    `${visible.length} ${visible.length === 1 ? "piece" : "pieces"}${selectedCategory ? ` / ${selectedCategory}` : query ? ` matching “${query}”` : ""}`;
  $("#clear-search").hidden = !query;
  updateFilterCount();
  observeReveals($("#product-grid"));
}

function renderSearchSuggestions() {
  const terms = new Set(
    products.flatMap((product) => [
      product.name,
      product.brand,
      product.category,
      product.subcategory,
      ...product.colors,
      ...product.tags,
    ]),
  );
  $("#product-suggestions").innerHTML = [...terms]
    .map(
      (term) =>
        `<option value="${term.replaceAll("&", "&amp;").replaceAll('"', "&quot;")}"></option>`,
    )
    .join("");
}

function renderFeatured() {
  $("#new-products").innerHTML = products
    .filter(({ isNew }) => isNew)
    .slice(0, 4)
    .map(productCard)
    .join("");
  $("#men-products").innerHTML = products
    .filter(({ gender }) => gender === "Men" || gender === "Unisex")
    .slice(0, 4)
    .map(productCard)
    .join("");
  $("#women-products").innerHTML = products
    .filter(({ gender }) => gender === "Women" || gender === "Unisex")
    .slice(0, 4)
    .map(productCard)
    .join("");
  $("#kids-products").innerHTML = products
    .filter(({ gender }) => gender === "Kids")
    .map(productCard)
    .join("");
  $("#bestseller-products").innerHTML = [...products]
    .sort((a, b) => b.reviewCount - a.reviewCount)
    .slice(0, 4)
    .map(productCard)
    .join("");
  $("#sale-products").innerHTML = products
    .filter(({ isOnSale }) => isOnSale)
    .slice(0, 3)
    .map(productCard)
    .join("");
  observeReveals();
}

function setCategoryFilter(category = "", subcategory = "") {
  clearFilters();
  selectedCategory = category;
  selectedSubcategory = subcategory;
  selectedGender = "";
  $("#filter-gender").value = "";
  $("#filter-category").value = category;
  $("#filter-subcategory").disabled = !category;
  $("#filter-subcategory").innerHTML =
    `<option value="">All subcategories</option>${(categories.find(({ name }) => name === category)?.subcategories ?? []).map((name) => `<option>${name}</option>`).join("")}`;
  $("#filter-subcategory").value = subcategory;
  renderCatalog();
  $("#mega-menu").hidden = true;
  $("#categories-trigger").setAttribute("aria-expanded", "false");
  $("#mobile-menu").hidden = true;
  $("#mobile-menu-button").setAttribute("aria-expanded", "false");
  $("#mobile-menu-button").setAttribute("aria-label", "Open navigation");
  $("#products").scrollIntoView({ behavior: "smooth", block: "start" });
}

function updateHeaderCounts() {
  const cartQuantity = cart.reduce((sum, line) => sum + line.quantity, 0);
  $("#cart-count").textContent = cartQuantity;
  $("#wishlist-count").textContent = wishlist.length;
  $("#mobile-cart-count").textContent = cartQuantity;
  $("#mobile-wishlist-count").textContent = wishlist.length;
}

function productSlug(product) {
  return product.name
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function toggleWishlist(productId) {
  wishlist = wishlist.includes(productId)
    ? wishlist.filter((id) => id !== productId)
    : [...wishlist, productId];
  persistState();
  updateHeaderCounts();
  renderCatalog();
  renderFeatured();
  if (!$("#side-drawer").hidden && activePanel === "wishlist") renderDrawer();
  const detailWishlist = $(".detail-wishlist");
  if (detailWishlist?.dataset.wishlist === productId) {
    const saved = wishlist.includes(productId);
    detailWishlist.classList.toggle("is-saved", saved);
    detailWishlist.setAttribute("aria-pressed", String(saved));
    detailWishlist.setAttribute(
      "aria-label",
      `${saved ? "Remove from" : "Add to"} wishlist`,
    );
  }
  showToast(
    wishlist.includes(productId)
      ? "Saved to your wishlist."
      : "Removed from your wishlist.",
  );
}

function openProduct(productId, { updateUrl = true } = {}) {
  const product = products.find(({ id }) => id === productId);
  if (!product) return;
  if (!$("#product-dialog").open) lastFocusedElement = document.activeElement;
  if (updateUrl && window.location.pathname !== `/products/${productSlug(product)}`) {
    history.pushState({ productId }, "", `/products/${productSlug(product)}`);
  }
  activeProductId = productId;
  $("#detail-content").innerHTML = productDetails(product);
  document.title = `${product.name} by ${product.brand} | LENO`;
  $("#detail-product-schema")?.remove();
  const schema = document.createElement("script");
  schema.id = "detail-product-schema";
  schema.type = "application/ld+json";
  schema.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images.map((id) => image(id, 1000)),
    sku: product.id,
    brand: { "@type": "Brand", name: product.brand },
    offers: {
      "@type": "Offer",
      priceCurrency: "NGN",
      price: product.price,
      availability: product.stock > 0
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: `${location.origin}/products/${productSlug(product)}`,
    },
  });
  document.head.append(schema);
  if (!$("#product-dialog").open) $("#product-dialog").showModal();
}

function finishProductDialogClose(updateHistory = true) {
  const closedProductId = activeProductId;
  if (!closedProductId) return;

  $("#detail-product-schema")?.remove();
  document.title = "LENO — Nigerian fashion, found.";
  activeProductId = null;
  lastFocusedElement?.focus?.();

  if (
    updateHistory &&
    history.state?.productId === closedProductId
  ) {
    if (history.state.directProduct) {
      history.replaceState(null, "", "/");
    } else {
      history.back();
    }
  }
}

function closeProductDialog(updateHistory = true) {
  const dialog = $("#product-dialog");
  if (dialog.open) dialog.close();
  finishProductDialogClose(updateHistory);
}

function productDetails(product) {
  const stock = stockText(product.stock);
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;
  const recentlyViewed = products
    .filter(
      ({ id, category }) => id !== product.id && category === product.category,
    )
    .slice(0, 2);
  return `<div class="detail-gallery"><img class="detail-main-image" src="${image(product.images[0], 1000)}" alt="${product.name} by ${product.brand}"><div class="detail-thumbnails">${product.images.map((src, index) => `<button class="detail-thumb ${index === 0 ? "is-active" : ""}" data-detail-image="${src}" aria-label="Show image ${index + 1}"><img src="${image(src, 180)}" alt=""></button>`).join("")}</div></div>
    <div class="detail-info"><p class="eyebrow">${product.brand} <span>·</span> ${product.subcategory}</p><h2 id="detail-name">${product.name}</h2><p class="detail-rating">★ ${product.rating.toFixed(1)} <span>${product.reviewCount} reviews</span></p>
      <div class="detail-price">${formatNaira(product.price)} ${product.originalPrice ? `<s>${formatNaira(product.originalPrice)}</s><span class="discount-note">${discount}% off</span>` : ""}</div>
      <p class="detail-description">${product.description}</p><div class="detail-stock stock-${stock.level}"><span></span>${stock.text} <span class="stock-legend">· Stock updates live</span></div>
      <label class="option-label">Colour <span id="selected-color-label">${product.colors[0]}</span><div class="option-chips">${product.colors.map((color, index) => `<button class="color-chip ${index === 0 ? "is-selected" : ""}" type="button" data-color="${color}" aria-label="${color}" aria-pressed="${index === 0}" style="--swatch:${colourHex(color)}"></button>`).join("")}</div></label>
      <label class="option-label">Size <button class="size-guide-link" type="button" data-size-guide>Size guide</button><div class="option-chips size-chips">${product.sizes.map((size) => `<button class="size-chip" type="button" data-size="${size}" aria-pressed="false">${size}</button>`).join("")}</div></label>
      <div class="quantity-control"><span>Quantity</span><div><button type="button" data-detail-quantity="-1" aria-label="Decrease quantity">−</button><output id="detail-quantity">1</output><button type="button" data-detail-quantity="1" aria-label="Increase quantity">+</button></div></div>
      <div class="detail-actions"><button class="button button-dark detail-add" data-add-cart="${product.id}" ${product.stock === 0 ? "disabled" : ""}>${product.stock === 0 ? "Out of stock" : "Add to Cart"} <span>${product.stock > 0 ? "↗" : ""}</span></button><button class="button button-light detail-buy" data-buy-now="${product.id}" ${product.stock === 0 ? "disabled" : ""}>Buy now</button><button class="detail-wishlist ${wishlist.includes(product.id) ? "is-saved" : ""}" data-wishlist="${product.id}" aria-pressed="${wishlist.includes(product.id)}" aria-label="${wishlist.includes(product.id) ? "Remove from" : "Add to"} wishlist">♥</button></div>
      <div class="delivery-note"><span>↗</span><p><strong>Delivery across Nigeria</strong><br>Complimentary on orders over ₦150,000. Checkout for local estimates.</p></div>
      <details class="product-extra"><summary>Details & care</summary><p>Designed with care. Follow the garment care label for lasting wear. Made by ${product.brand}.</p></details><details class="product-extra"><summary>Delivery & returns</summary><p>Delivery available across all 36 states and the FCT. Eligible unworn pieces can be returned within 7 days of delivery.</p></details>
      ${recentlyViewed.length ? `<div class="related-products"><h3>More from this edit</h3>${recentlyViewed.map(({ id, name, price, images }) => `<button data-open-product="${id}"><img src="${image(images[0], 140)}" alt=""><span>${name}<small>${formatNaira(price)}</small></span></button>`).join("")}</div>` : ""}</div>`;
}

function addToCart(productId, options = {}) {
  const product = products.find(({ id }) => id === productId);
  if (!product || product.stock === 0) return false;
  if (product.sizes.length > 1 && !options.size) {
    showToast("Choose a size before adding this piece.");
    return false;
  }
  const quantity = options.quantity ?? 1;
  const color = options.color ?? product.colors[0];
  const size = options.size ?? (product.sizes.length === 1 ? product.sizes[0] : "");
  const line = cart.find(
    (entry) =>
      entry.productId === productId &&
      entry.size === size &&
      entry.color === color,
  );
  const currentQuantity = line?.quantity ?? 0;
  if (currentQuantity + quantity > product.stock) {
    showToast(
      `Only ${product.stock} available. Your cart already has ${currentQuantity}.`,
    );
    return false;
  }
  if (line) line.quantity += quantity;
  else cart.push({ productId, quantity, size, color });
  persistState();
  updateHeaderCounts();
  if ($("#product-dialog").open) $("#product-dialog").close();
  showToast(`${product.name} added to your cart.`);
  openDrawer("cart");
  if (options.buyNow) {
    closeDrawer();
    renderCheckout();
  }
  return true;
}

function renderDrawer() {
  const title = activePanel === "cart" ? "Your cart" : "Saved for later";
  $("#drawer-title").textContent = title;
  const lines =
    activePanel === "cart"
      ? cart
      : wishlist.map((productId) => ({
          productId,
          quantity: 1,
          color: "",
          size: "",
          isWishlist: true,
        }));
  if (lines.length === 0) {
    $("#drawer-body").innerHTML =
      `      <div class="drawer-empty"><span>✳</span><h3>${activePanel === "cart" ? "A good find is out there." : "Your wishlist is waiting."}</h3><p>${activePanel === "cart" ? "Your cart is taking a breather. Find something worth bringing home." : "Keep your favourite pieces close. Save something you love and it’ll be right here."}</p><button class="button button-dark" data-close-drawer>Explore the edit <span>↗</span></button></div>`;
    $("#drawer-footer").innerHTML = "";
    return;
  }
  $("#drawer-body").innerHTML = lines
    .map((line) => {
      const product = products.find(({ id }) => id === line.productId);
      if (!product) return "";
      return `<article class="drawer-line"><img src="${image(product.images[0], 200)}" alt="${product.name}"><div class="drawer-line-info"><span class="product-brand">${product.brand}</span><h3>${product.name}</h3><span>${line.color || product.colors[0]}${line.size ? ` · ${line.size}` : ""}</span><strong>${formatNaira(product.price)}</strong>
      ${line.isWishlist ?       `<div class="drawer-line-actions"><button data-move-to-cart="${product.id}">${product.sizes.length > 1 ? "Choose size" : "Move to cart"}</button><button data-wishlist="${product.id}" aria-label="Remove ${product.name} from wishlist">Remove</button></div>` : `<div class="drawer-line-actions"><div class="bag-quantity"><button data-cart-change="${product.id}" data-size="${line.size}" data-color="${line.color}" data-delta="-1" aria-label="Decrease quantity">−</button><span>${line.quantity}</span><button data-cart-change="${product.id}" data-size="${line.size}" data-color="${line.color}" data-delta="1" aria-label="Increase quantity" ${line.quantity >= product.stock ? "disabled" : ""}>+</button></div><button data-remove-cart="${product.id}" data-size="${line.size}" data-color="${line.color}">Remove</button></div>`}</div></article>`;
    })
    .join("");
  if (activePanel === "cart") {
    const subtotal = cart.reduce(
      (sum, line) =>
        sum +
        (products.find(({ id }) => id === line.productId)?.price ?? 0) *
          line.quantity,
      0,
    );
    const delivery = subtotal === 0 || subtotal >= 150000 ? 0 : 4500;
    $("#drawer-footer").innerHTML =
      `<div class="subtotal-row"><span>Subtotal</span><strong>${formatNaira(subtotal)}</strong></div><div class="subtotal-row delivery-row"><span>Delivery <small>${subtotal >= 150000 ? "Complimentary" : "Estimated within Nigeria"}</small></span><strong>${delivery ? formatNaira(delivery) : "Free"}</strong></div><div class="subtotal-row total-row"><span>Estimated total</span><strong>${formatNaira(subtotal + delivery)}</strong></div><button class="button button-dark checkout-button" data-checkout>Continue to checkout <span>↗</span></button><p>Secure checkout · Nigerian Naira</p>`;
  } else {
    $("#drawer-footer").innerHTML =
      `<button class="button button-dark checkout-button" data-close-drawer>Continue exploring <span>↗</span></button>`;
  }
}

function openDrawer(panel) {
  if ($("#product-dialog").open) closeProductDialog();
  activePanel = panel;
  lastFocusedElement = document.activeElement;
  renderDrawer();
  $("#drawer-backdrop").hidden = false;
  $("#side-drawer").hidden = false;
  document.body.classList.add("has-overlay");
  $("#drawer-close").focus();
}

function closeMobileNavigation() {
  $("#mobile-menu").hidden = true;
  $("#mobile-menu-button").setAttribute("aria-expanded", "false");
  $("#mobile-menu-button").setAttribute("aria-label", "Open navigation");
}

function closeDrawer() {
  $("#side-drawer").hidden = true;
  $("#drawer-backdrop").hidden = true;
  $("#filter-sidebar").classList.remove("is-open");
  $("#filter-toggle").setAttribute("aria-expanded", "false");
  document.body.classList.remove("has-overlay");
  lastFocusedElement?.focus?.();
}

function changeCart(productId, size, color, delta) {
  const line = cart.find(
    (entry) =>
      entry.productId === productId &&
      entry.size === size &&
      entry.color === color,
  );
  if (!line) return;
  const product = products.find(({ id }) => id === productId);
  if (delta > 0 && line.quantity + delta > (product?.stock ?? 0)) {
    showToast(`Only ${product.stock} available.`);
    return;
  }
  line.quantity += delta;
  if (line.quantity <= 0) cart = cart.filter((entry) => entry !== line);
  persistState();
  updateHeaderCounts();
  renderDrawer();
}

function renderCheckout() {
  if (!requireCustomerForCheckout()) return false;
  if (cart.length === 0) {
    showToast("Your cart is empty. Add something before checkout.");
    return false;
  }
  const subtotal = cart.reduce(
    (sum, line) =>
      sum +
      (products.find(({ id }) => id === line.productId)?.price ?? 0) *
        line.quantity,
    0,
  );
  const delivery = subtotal >= 150000 ? 0 : 4500;
  const stateOptions = locationService
    .getStates()
    .map((state) => `<option>${state}</option>`)
    .join("");
  $("#checkout-content").innerHTML =
    `<p class="eyebrow">Almost yours</p><h2 id="checkout-title">Checkout, <em>made simple.</em></h2><p class="checkout-disclaimer">Demo checkout — no payment will be taken. Your details stay on this device. The location list is a sample; connect a maintained Nigerian LGA data source before launch.</p><form id="checkout-form">
    <fieldset><legend>1. Your details</legend><div class="checkout-fields"><label>Full name<input name="name" type="text" autocomplete="name" required placeholder="e.g. Amara Okafor"></label><label>Email address<input name="email" type="email" autocomplete="email" required placeholder="you@example.com"></label><label>Phone number<input name="phone" type="tel" autocomplete="tel" inputmode="tel" minlength="7" maxlength="25" required placeholder="+234 800 000 0000"></label></div></fieldset>
    <fieldset><legend>2. Where should we send it?</legend><label class="checkout-label">Country<select disabled aria-label="Country"> <option>Nigeria</option></select></label><div class="checkout-fields location-fields"><label>State / FCT<select id="checkout-state" name="state" required><option value="">Choose state</option>${stateOptions}</select></label><label>City / LGA<select id="checkout-city" name="city" required disabled><option value="">Select a state first</option></select></label></div><label class="checkout-label">Street address<input name="address" autocomplete="street-address" required placeholder="House number, street, area"></label><label class="checkout-label">Postal code <span class="optional-label">Optional</span><input name="postal" inputmode="numeric" autocomplete="postal-code" placeholder="e.g. 100001"></label><p class="location-note" id="location-note">Delivery available across all 36 Nigerian states and the FCT.</p></fieldset>
    <fieldset><legend>3. How would you like to pay?</legend><div class="payment-options"><label><input type="radio" name="payment" value="paystack" checked><span><strong>Card</strong><small>Secure card payment via Paystack</small></span></label><label><input type="radio" name="payment" value="flutterwave"><span><strong>Flutterwave</strong><small>Card, bank or mobile money</small></span></label><label><input type="radio" name="payment" value="transfer"><span><strong>Bank transfer</strong><small>Instructions shown after order</small></span></label><label class="is-disabled"><input type="radio" name="payment" value="cod" disabled><span><strong>Cash on delivery</strong><small>Currently available in Lagos only</small></span></label></div><p class="payment-disclaimer">Payment integrations are not configured in this demo. No payment details are collected or processed.</p></fieldset>
    <aside class="checkout-summary"><div class="subtotal-row"><span>${cart.reduce((sum, line) => sum + line.quantity, 0)} items · Subtotal</span><strong>${formatNaira(subtotal)}</strong></div><div class="subtotal-row"><span>Delivery</span><strong>${delivery ? formatNaira(delivery) : "Free"}</strong></div><div class="subtotal-row total-row"><span>Total</span><strong>${formatNaira(subtotal + delivery)}</strong></div></aside><button class="button button-dark place-order" type="submit">Place demo order <span>↗</span></button><p class="secure-note">🔒 Secure checkout · All prices in NGN</p></form>`;
  lastFocusedElement = document.activeElement;
  $("#checkout-dialog").showModal();
  $("#checkout-content input:not([type=radio]), #checkout-content select")?.focus();
  return true;
}

function showToast(message) {
  const region = $("#toast-region");
  region.textContent = message;
  region.classList.add("is-visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(
    () => region.classList.remove("is-visible"),
    2600,
  );
}

function renderAll() {
  renderCategories();
  renderSearchSuggestions();
  renderCatalog();
  renderFeatured();
  updateHeaderCounts();
}

async function initializeStorefront() {
  try {
    const catalog = await productService.list();
    if (!Array.isArray(catalog)) {
      throw new TypeError("The product service did not return a product list.");
    }
    products = catalog;
    renderAll();
    const directProductSlug = window.location.pathname.match(
      /^\/products\/([^/]+)$/,
    )?.[1];
    const directProduct = products.find(
      (product) => productSlug(product) === directProductSlug,
    );
    if (directProduct) {
      history.replaceState(
        { productId: directProduct.id, directProduct: true },
        "",
        window.location.pathname,
      );
      openProduct(directProduct.id, { updateUrl: false });
    }
  } catch (error) {
    console.error("Could not load the product catalog.", error);
    products = [];
    $("#category-grid").replaceChildren();
    $("#new-products").replaceChildren();
    $("#product-grid").replaceChildren();
    $("#product-grid").hidden = true;
    $("#empty-products").hidden = true;
    $("#catalog-error").hidden = false;
  }
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button, a");
  if (!target) return;
  if (target.matches("#categories-trigger")) {
    const open = target.getAttribute("aria-expanded") !== "true";
    target.setAttribute("aria-expanded", String(open));
    $("#mega-menu").hidden = !open;
  }
  if (target.matches("[data-category-filter]"))
    setCategoryFilter(target.dataset.categoryFilter ?? "");
  if (target.matches("[data-subcategory-filter]"))
    setCategoryFilter(
      target.dataset.parentCategory,
      target.dataset.subcategoryFilter,
    );
  if (target.matches("[data-gender-link]")) {
    event.preventDefault();
    clearFilters();
    selectedGender = target.dataset.genderLink;
    $("#filter-gender").value = selectedGender;
    renderCatalog();
    $("#products").scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (target.matches("[data-category-link]")) {
    event.preventDefault();
    setCategoryFilter(target.dataset.categoryLink);
  }
  if (target.matches("[data-new-link]")) {
    clearFilters();
    $("#filter-new").checked = true;
    renderCatalog();
  }
  if (target.matches("[data-sale-link]")) {
    clearFilters();
    $("#filter-sale").checked = true;
    renderCatalog();
  }
  if (target.matches("[data-popular-link]")) {
    clearFilters();
    $("#sort-select").value = "popular";
    renderCatalog();
  }
  if (target.matches("[data-open-product]"))
    openProduct(target.dataset.openProduct);
  if (target.matches("[data-info]")) {
    event.preventDefault();
    openInfoPage(target.dataset.info);
  }
  if (target.matches("[data-wishlist]"))
    toggleWishlist(target.dataset.wishlist);
  if (target.matches("#cart-trigger, #mobile-cart")) {
    if (target.matches("#mobile-cart")) closeMobileNavigation();
    openDrawer("cart");
  }
  if (target.matches("#wishlist-trigger, #mobile-wishlist")) {
    if (target.matches("#mobile-wishlist")) closeMobileNavigation();
    openDrawer("wishlist");
  }
  if (target.matches("#account-trigger, #mobile-account")) {
    closeMobileNavigation();
    pendingCheckout = false;
    openAccountDialog({
      mode: "login",
    });
  }
  if (target.matches("#account-signout")) {
    try {
      sessionStorage.removeItem("leno-demo-session");
      localStorage.removeItem("leno-demo-remembered-session");
      authenticatedCustomer = null;
      pendingCheckout = false;
      updateAccountTrigger();
      $("#account-dialog").close();
      showToast("You’ve been signed out. Your cart is still saved.");
    } catch (error) {
      console.error("Could not end the local demo account session.", error);
      accountMessage("We couldn’t sign you out in this browser. Please try again.", true);
    }
  }
  if (target.matches("[data-account-mode]")) {
    accountMode = target.dataset.accountMode;
    renderAccountDialog();
    $('input[name="email"]', $("#account-content"))?.focus();
  }
  if (target.matches("#google-auth-btn")) {
    handleGoogleAuth();
  }
  if (target.matches("#forgot-password")) {
    accountMessage(
      "Password reset is not available for local demo accounts. Create a new account to continue.",
      true,
    );
  }
  if (target.matches("#drawer-close, #drawer-backdrop, [data-close-drawer]"))
    closeDrawer();
  if (target.matches("[data-remove-cart]")) {
    cart = cart.filter(
      (line) =>
        !(
          line.productId === target.dataset.removeCart &&
          line.size === (target.dataset.size ?? "") &&
          line.color === (target.dataset.color ?? "")
        ),
    );
    persistState();
    updateHeaderCounts();
    renderDrawer();
  }
  if (target.matches("[data-move-to-cart]")) {
    const product = products.find(({ id }) => id === target.dataset.moveToCart);
    if (product?.sizes.length > 1) {
      openProduct(product.id);
      showToast("Choose a size to move this piece to your cart.");
    } else if (product && addToCart(product.id)) {
      wishlist = wishlist.filter((id) => id !== product.id);
      persistState();
      updateHeaderCounts();
      renderCatalog();
      renderFeatured();
    }
  }
  if (target.matches("[data-cart-change]"))
    changeCart(
      target.dataset.cartChange,
      target.dataset.size ?? "",
      target.dataset.color ?? "",
      Number(target.dataset.delta),
    );
  if (target.matches("[data-checkout]")) {
    closeDrawer();
    renderCheckout();
    $(
      "#checkout-content input:not([type=radio]), #checkout-content select",
    )?.focus();
  }
  if (target.matches("#filter-toggle")) {
    const opening = !$("#filter-sidebar").classList.contains("is-open");
    $("#filter-sidebar").classList.toggle("is-open", opening);
    target.setAttribute("aria-expanded", String(opening));
    if (window.matchMedia("(max-width: 790px)").matches && opening) {
      $("#drawer-backdrop").hidden = false;
      document.body.classList.add("has-overlay");
    } else {
      $("#drawer-backdrop").hidden = true;
      document.body.classList.remove("has-overlay");
    }
  }
  if (target.matches("#filter-close, #apply-filters")) {
    $("#filter-sidebar").classList.remove("is-open");
    $("#filter-toggle").setAttribute("aria-expanded", "false");
    $("#drawer-backdrop").hidden = true;
    document.body.classList.remove("has-overlay");
    if (target.matches("#apply-filters"))
      $("#products").scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (target.matches("#mobile-menu-button")) {
    const open = target.getAttribute("aria-expanded") !== "true";
    target.setAttribute("aria-expanded", String(open));
    target.setAttribute(
      "aria-label",
      open ? "Close navigation" : "Open navigation",
    );
    $("#mobile-menu").hidden = !open;
  }
  if (target.matches("[data-open-categories]")) {
    const list = $("#mobile-category-list");
    list.hidden = !list.hidden;
    target.setAttribute("aria-expanded", String(!list.hidden));
  }
  if (target.matches("#search-trigger")) {
    $("#products").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => $("#product-search").focus(), 450);
  }
  if (target.matches("#retry-catalog")) initializeStorefront();
  if (target.matches("[data-detail-image]")) {
    $(".detail-main-image").src = image(target.dataset.detailImage, 1000);
    $$(".detail-thumb").forEach((button) =>
      button.classList.toggle("is-active", button === target),
    );
  }
  if (target.matches("[data-color]")) {
    $$(".color-chip").forEach((button) => {
      button.classList.toggle("is-selected", button === target);
      button.setAttribute("aria-pressed", String(button === target));
    });
    $("#selected-color-label").textContent = target.dataset.color;
  }
  if (target.matches("[data-size]") && target.classList.contains("size-chip")) {
    $$(".size-chip").forEach((button) => {
      button.classList.toggle("is-selected", button === target);
      button.setAttribute("aria-pressed", String(button === target));
    });
  }
  if (target.matches("[data-detail-quantity]")) {
    const productId = $(".detail-add").dataset.addCart;
    const product = products.find(({ id }) => id === productId);
    const quantity = Number(
      $("#detail-quantity").value ?? $("#detail-quantity").textContent,
    );
    $("#detail-quantity").textContent = Math.max(
      1,
      Math.min(product.stock, quantity + Number(target.dataset.detailQuantity)),
    );
  }
  if (target.matches(".detail-add")) {
    const selectedSize = $(".size-chip.is-selected")?.dataset.size;
    const selectedColor = $(".color-chip.is-selected")?.dataset.color;
    const quantity = Number($("#detail-quantity").textContent);
    addToCart(target.dataset.addCart, {
      size: selectedSize,
      color: selectedColor,
      quantity,
    });
  }
  if (target.matches(".detail-buy")) {
    const selectedSize = $(".size-chip.is-selected")?.dataset.size;
    const selectedColor = $(".color-chip.is-selected")?.dataset.color;
    addToCart(target.dataset.buyNow, {
      size: selectedSize,
      color: selectedColor,
      quantity: Number($("#detail-quantity").textContent),
      buyNow: true,
    });
  }
  if (target.matches("[data-size-guide]"))
    showToast("Choose your usual size. Contact hello@leno.ng for fit advice.");
  if (target.matches("[data-close-dialog]")) {
    const dialog = target.closest("dialog");
    if (dialog.id === "product-dialog") closeProductDialog();
    else dialog.close();
  }
  if (target.matches("#mobile-menu a")) {
    closeMobileNavigation();
  }
});

function clearFilters() {
  selectedCategory = "";
  selectedSubcategory = "";
  selectedGender = "";
  $("#filter-category").value = "";
  $("#filter-subcategory").innerHTML =
    '<option value="">All subcategories</option>';
  $("#filter-subcategory").disabled = true;
  $("#filter-gender").value = "";
  $("#filter-brand").value = "";
  $("#filter-size").value = "";
  $("#filter-color").value = "";
  $("#filter-rating").value = "0";
  $("#price-min").value = "";
  $("#price-max").value = "";
  $("#filter-stock").checked = false;
  $("#filter-sale").checked = false;
  $("#filter-new").checked = false;
  $("#sort-select").value = "featured";
  $("#sort-select").value = "featured";
  $("#product-search").value = "";
  renderCatalog();
}

$("#product-search").addEventListener("input", renderCatalog);
$("#sort-select").addEventListener("change", renderCatalog);
$("#clear-search").addEventListener("click", () => {
  $("#product-search").value = "";
  renderCatalog();
  $("#product-search").focus();
});
$("#filter-category").addEventListener("change", (event) => {
  selectedCategory = event.target.value;
  selectedSubcategory = "";
  selectedGender = "";
  $("#filter-gender").value = "";
  $("#filter-subcategory").disabled = !selectedCategory;
  $("#filter-subcategory").innerHTML =
    `<option value="">All subcategories</option>${(categories.find(({ name }) => name === selectedCategory)?.subcategories ?? []).map((name) => `<option>${name}</option>`).join("")}`;
  renderCatalog();
});
$("#filter-subcategory").addEventListener("change", (event) => {
  selectedSubcategory = event.target.value;
  renderCatalog();
});
[
  "#filter-gender",
  "#filter-brand",
  "#filter-size",
  "#filter-color",
  "#filter-rating",
  "#price-min",
  "#price-max",
  "#filter-stock",
  "#filter-sale",
  "#filter-new",
].forEach((selector) => {
  $(selector).addEventListener("change", (event) => {
    if (selector === "#filter-gender") selectedGender = event.target.value;
    renderCatalog();
  });
  if (selector === "#price-min" || selector === "#price-max")
    $(selector).addEventListener("input", renderCatalog);
});
$("#clear-filters").addEventListener("click", clearFilters);
$("#empty-reset").addEventListener("click", clearFilters);
$("#drawer-close").addEventListener("click", closeDrawer);
$("#drawer-backdrop").addEventListener("click", closeDrawer);

$("#checkout-content").addEventListener("change", (event) => {
  if (event.target.matches("#checkout-state")) {
    const state = event.target.value;
    const citySelect = $("#checkout-city");
    citySelect.innerHTML = `<option value="">Choose city / LGA</option>${locationService.getCities(state).map((city) => `<option>${city}</option>`).join("")}`;
    citySelect.disabled = !state;
    const codOption = $('input[value="cod"]', $("#checkout-content"));
    codOption.disabled = state !== "Lagos";
    codOption
      .closest("label")
      .classList.toggle("is-disabled", codOption.disabled);
    if (codOption.disabled && codOption.checked)
      $('input[value="paystack"]', $("#checkout-content")).checked = true;
    $("#location-note").textContent = state
      ? `Showing available LGAs for ${state}. Delivery estimates confirmed after the order.`
      : "Delivery available across all 36 Nigerian states and the FCT.";
  }
});

$("#checkout-content").addEventListener("submit", (event) => {
  if (event.target.id !== "checkout-form") return;
  event.preventDefault();
  if (!authenticatedCustomer) {
    $("#checkout-dialog").close();
    requireCustomerForCheckout();
    return;
  }
  if (!event.target.reportValidity()) return;
  const formData = new FormData(event.target);
  const phoneDigits = String(formData.get("phone")).replace(/\D/g, "");
  if (phoneDigits.length < 7 || phoneDigits.length > 15) {
    const phoneInput = event.target.elements.namedItem("phone");
    phoneInput.setCustomValidity("Enter a valid phone number with 7 to 15 digits.");
    phoneInput.reportValidity();
    phoneInput.addEventListener("input", () => phoneInput.setCustomValidity(""), { once: true });
    return;
  }
  const orderReference = `LNO-${Date.now().toString().slice(-7)}`;
  $("#checkout-content").innerHTML =
    `<div class="order-success"><span>✳</span><p class="eyebrow">Order received</p><h2>Thank you, ${escapeHtml(String(formData.get("name")).trim().split(/\s+/)[0])}.</h2><p>Your demo order <strong>${orderReference}</strong> is confirmed for ${escapeHtml(formData.get("city"))}, ${escapeHtml(formData.get("state"))}. No payment has been made.</p><p>In a live store, you’d receive confirmation at ${escapeHtml(formData.get("email"))}.</p><button class="button button-dark" id="finish-order">Back to LENO <span>↗</span></button></div>`;
  cart = [];
  persistState();
  updateHeaderCounts();
  $("#drawer-title").textContent = "Your cart";
});

$("#checkout-content").addEventListener("click", (event) => {
  if (event.target.closest("#finish-order")) $("#checkout-dialog").close();
});

$("#newsletter-form").addEventListener("submit", (event) => {
  event.preventDefault();
  $("#newsletter-feedback").textContent =
    "Thanks for your interest. Newsletter sign-up will be available when LENO launches.";
  event.target.reset();
});
$("#account-dialog").addEventListener("submit", (event) => {
  if (event.target.id !== "account-form") return;
  event.preventDefault();
  handleAccountSubmit(event.target);
});
["#checkout-dialog", "#info-dialog"].forEach(
  (selector) => {
    $(selector).addEventListener("close", () => lastFocusedElement?.focus?.());
  },
);
$("#account-dialog").addEventListener("close", () => {
  if (!authenticatedCustomer) pendingCheckout = false;
  lastFocusedElement?.focus?.();
});

$("#product-dialog").addEventListener("close", () => {
  finishProductDialogClose(!closingProductFromHistory);
});
$("#product-dialog").addEventListener("cancel", (event) => {
  event.preventDefault();
  closeProductDialog();
});
updateAccountTrigger();

window.addEventListener("popstate", () => {
  const slug = window.location.pathname.match(/^\/products\/([^/]+)$/)?.[1];
  const product = products.find((item) => productSlug(item) === slug);
  if (product) {
    openProduct(product.id, { updateUrl: false });
    return;
  }
  if ($("#product-dialog").open) {
    closingProductFromHistory = true;
    closeProductDialog(false);
    closingProductFromHistory = false;
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header") && !$("#mega-menu").hidden) {
    $("#mega-menu").hidden = true;
    $("#categories-trigger").setAttribute("aria-expanded", "false");
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if ($("#product-dialog").open) {
      event.preventDefault();
      closeProductDialog();
    }
    $("#mega-menu").hidden = true;
    $("#categories-trigger").setAttribute("aria-expanded", "false");
    $("#mobile-menu").hidden = true;
    $("#mobile-menu-button").setAttribute("aria-expanded", "false");
    $("#mobile-menu-button").setAttribute("aria-label", "Open navigation");
    closeDrawer();
  }
  if (
    event.key === "/" &&
    !(event.target instanceof HTMLInputElement) &&
    !(event.target instanceof HTMLTextAreaElement)
  ) {
    event.preventDefault();
    $("#products").scrollIntoView({ behavior: "smooth" });
    $("#product-search").focus();
  }
});

initializeStorefront();
