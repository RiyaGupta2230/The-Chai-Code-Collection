import colors from 'tailwindcss/colors'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      rose: colors.rose,
      emerald: colors.emerald,
      pink: colors.pink,
      violet: colors.violet,
      // ...plus DEFAULT Tailwind colors if needed
    },
    extend: {},
  },
  plugins: [],
}
