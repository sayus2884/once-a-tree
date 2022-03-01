type PriceOption = {
  name: string;
  price: number;
  priceUrl: string;
};

export type Furniture = {
  name: string;
  description: string;
  details: string[];
  price: number;
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
  price: 1650.0,
  options: [
    { name: "Copper Swivel Chair", price: 1650.0, priceUrl: "https://example.com" },
    { name: "Copper Swivel Chair With Skirt", price: 2850.0, priceUrl: "https://example.com" },
    { name: "Copper Tufted Channel Swivel Chair", price: 4900.0, priceUrl: "https://example.com" },
    {
      name: "Copper Tufted Channel Swivel Chair With Skirt",
      price: 5500.0,
      priceUrl: "https://example.com",
    },
  ],
};
