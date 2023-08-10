import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'light-bg-sub': 'var(--light-bg-sub, #F7F9FA)',
      },
      boxShadow: {
        'custom-light': '0px 0px 27px 0px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [],
}
export default config
