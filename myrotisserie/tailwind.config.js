/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/src/Images/wood-g4d96bb5fe_1280.jpg')",
        body: "url('/src/Images/Bg-body.jpg')",
        test: "url('/src/Images/pexels-aleksander-pedosk-10748211 (1).jpg') ",
      },
    },
  },
  plugins: [],
};
