/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "afghan-blue": "#1460aa",
        "afghan-green": "#007749",
        "afghan-red": "#ce1126",
        "afghan-gold": "#d4af37",
        "afghan-black": "#1a1a1a",
        "afghan-white": "#faf7f2",
        "afghan-light-grey": "#e8e8e0",
        "afghan-medium-grey": "#767670",
        "afghan-dark-grey": "#333333",
      },
      boxShadow: {
        card: "0 2px 8px rgba(0, 0, 0, 0.1)",
        "card-hover": "0 6px 12px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
