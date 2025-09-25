/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./@plus-ui/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: "Nunito_400Regular",
        semibold: "Nunito_600SemiBold",
        bold: "Nunito_700Bold",
        black: " Nunito_900Black",
      },
      colors: {
        brand_blue_dark: {
          50: "#E7E7EB",
          100: "#B3B4C2",
          200: "#8E90A4",
          300: "#5B5E7A",
          400: "#3B3E61",
          500: "#0A0E39",
          600: "#090D34",
          700: " #090D34",
          800: "#06081F",
          900: "#040618",
        },
        brand_blue_light: {
          50: "#EEFAFF",
          100: "#C9F0FF",
          200: "#AFE9FF",
          300: "#8ADFFF",
          400: "#73D9FF",
          500: "#50CFFF",
          600: "#49BCE8",
          700: " #3993B5",
          800: "#2C728C",
          900: "#22576B",
        },
        brand_black: "#222222",
        brand_red: "#EB3D3D",
        brand_green: "#32D957",
        brand_yellow: "#FFCE52",
        brand_texts: "#8A8A8A",
        brand_white: "#F4F4F4",
      },
    },
  },
  plugins: [],
};
