/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/src/Images/dirty-metal-texture.jpg')",
      },
    },
  },
  plugins: [],
};
