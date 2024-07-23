/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#014d4e",
        secondary: "#ff9408",
        secondarym: "#ff94088e",
        tertiary: "#017374",
      },
    },
  },
  plugins: [],
};
