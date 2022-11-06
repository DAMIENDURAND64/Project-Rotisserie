/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/src/Images/Bg-header-footer.jpg')",
        body: "url('/src/Images/Bg-body.jpg')",
      },
    },
  },
  plugins: [],
};
