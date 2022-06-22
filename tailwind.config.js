/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}", "./routes/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Georgia", "serif"]
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#FB7299",
      secondary: "#ffed4a",
      danger: "#e3342f"
    })
  },
  variants: { extend: { typography: ["dark"] } },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")]
}
