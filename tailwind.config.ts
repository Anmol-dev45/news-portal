import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    colors : {
      "dark":"#02111F",
      "primary":"#3185D4",
      "light":"#3185D4",
    }
    },
  },
  plugins: [],
}
export default config
