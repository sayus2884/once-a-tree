type PriceOption = {
  name: string;
  price: string;
  priceUrl: string;
  imageUrl: string;
};

export type Furniture = {
  name: string;
  description: string;
  details: string[];
  price: string;
  options: PriceOption[];
};

export const sampleFurniture: Furniture = {
  name: "COOPER SWIVEL CHAIR (OPTIONS)",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  details: [
    "Made in Canada",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  ],
  price: "1650.00",
  options: [
    {
      name: "Copper Swivel Chair",
      price: "1650.00",
      priceUrl: "https://example.com",
      imageUrl: "/images/chair_sample-black.jpg",
    },
    {
      name: "Copper Swivel Chair With Skirt",
      price: "2850.00",
      priceUrl: "https://example.com",
      imageUrl: "/images/chair_sample-grey.jpg",
    },
    {
      name: "Copper Tufted Channel Swivel Chair",
      price: "4900.00",
      priceUrl: "https://example.com",
      imageUrl: "/images/chair_sample-white.jpg",
    },
    {
      name: "Copper Tufted Channel Swivel Chair With Skirt",
      price: "5500.00",
      priceUrl: "https://example.com",
      imageUrl: "/images/chair_sample-white.jpg",
    },
  ],
};

export const mainRoutes = [
  { name: "Custom Furniture", route: "/landing" },
  { name: "Design Tips", route: "/blog/feed" },
  { name: "Care Instructions", route: "/how-to-care" },
  { name: "Contact Us", route: "/" },
];

export const categories = [
  { name: "Sale", route: "/sale" },
  { name: "Living Spaces", route: "/living spaces" },
  { name: "Dining", route: "/dining" },
  { name: "Work Space", route: "/work space" },
  { name: "Bedroom", route: "/bedroom" },
  { name: "Lighting", route: "/lighting" },
  { name: "Accessories", route: "/accesories" },
  { name: "Rugs", route: "/rugs" },
  { name: "Outdoor", route: "/outdoor" },
];

export const careInstructions = [
  {
    type: "wood",
    todos: [
      "Dust with dry, soft cloth or untreated dusting cloth.",
      "Avoid alcohol or petroleum-based products on lacquer finishes.",
      "Felt pads should be used on items placed on wood surfaces to avoid scratches.",
      "Irregularities such as sapwood, knots and uneven colouration should be expected in natural wood and enhance the inherent beauty of the material.",
      "Over time, air and sunlight will change the colour of natural wood. You can occasionally rotate items placed on your wood furniture to allow a more uniform colour to develop.",
      "To ensure even colouration of extension table leaves, expose them to the same light as your table. Once the leaves have reached mature coloration, they may be stored flat and top down.",
    ],
  },
  {
    type: "upholstery",
    todos: [
      "While all fabric will fade over time, direct sunlight can dramatically fade dark colours. We recommend placing your upholstered pieces where they won’t be exposed to direct sunlight.",
      "An annual professional cleaning will keep your sofa or chair looking its best.",
      "Cushions will compress over time. Comfort wrinkles and creases occur naturally as upholstered furniture adjusts to normal use. Fluff and rotate cushions weekly to keep them looking fresh and to help them wear evenly.",
      "Vacuum weekly with an upholstery attachment. Although you may not see it, dust settles on your upholstery and can soil or cause wearing.",
    ],
  },
  {
    type: "fabric",
    todos: [
      "Prompt attention to your stain is advisable. Clean up as much of the spill as possible with a clean, dry, white cloth. Blot - don’t rub.",
      "Please call a Design Associate for the fabric cleaning code of your piece before using anything.",
      "If the stain has dried, remove excess by gently using a soft nylon brush.",
      "Never use a cleaning solvent containing bleaching agents. Test a mild upholstery cleaning solution in an inconspicuous area. Begin with a few drops of the solution on a cloth, hold it against the colour and wait a few seconds. Look to see if any of the other colour has transferred to the cloth or if there has been a change in the colour of the fabric. If so, contact an upholstery cleaning specialist.",
      "Apply a small amount of a mild cleaning solution to the cloth. Over saturation may affect the upholstery materials (backing, foam, etc.) under the fabric.",
    ],
  },
  {
    type: "leather",
    todos: [
      "To prevent fading and cracking, avoid exposure to direct sunlight or heat.",
      "Fluff seat and back cushions to help them wear more evenly.",
      "Dust and vacuum regularly.",
      "For spills, we recommend using distilled water and a light coloured cloth.",
      "Do not use water to wash out butter, oil or grease stains. Wipe dry with cloth. The spot will dissipate into the leather over time.",
      "To protect and maintain leather we recommend purchasing a leather conditioner.",
    ],
  },
];
