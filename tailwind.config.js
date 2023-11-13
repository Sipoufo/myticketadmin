/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
          colors: {
            "primary": "#4547BF",
            "secondary": "#191919",
            "third": "#525256",
            "fourth": "#666666",
            "fifth": "#878787",
            "sixth": "#9F9F9F",
            "seventh": "#E8E8E8",
            "eighth": "#F3F3F3",
            "background": "#F4F5F7"
          }
        },
        fontFamily: {
          poppins: ['poppins', 'sans-serif'],
        }
    },
    plugins: [],
};
