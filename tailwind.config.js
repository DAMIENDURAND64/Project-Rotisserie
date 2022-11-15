/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/Images/wood-g4d96bb5fe_1280.jpg')",
        body: "url('/Images/Bg-body.jpg')",
        background: "url('/Images/pexels-aleksander-pedosk-10748211 (1).jpg') ",
      },
    },
  },
  plugins: [],
};
