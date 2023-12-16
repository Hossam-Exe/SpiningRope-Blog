import type { Config } from 'tailwindcss'

const config: Config = {
  
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'translateX(-10%)' },
        '50%': { transform:'translateX(10%)' },
      }
    },
    animation: {
      wiggle: 'wiggle 1s 500ms ease-in-out infinite',
    },
    extend: {
      backgroundImage: (theme) => ({
        'gradient-pink':"linear-gradient(180deg,rgba(45,3,99,.932) 48%,rgba(88,32,179,.829) 100%)"
        ,
        'gradient-black':"radial-gradient( circle at 80%,rgb(34, 34, 34) 2%,rgb(0, 0, 0) 100%);"
        ,
      }),
      
      colors: {
        background: "rgba(var(--background))",
        border: "rgba(var(--border))",
      
        "copy-primary": "rgba(var(--copy-primary))",
        "copy-secondary": "rgba(var(--copy-secondary))",
        cta: "rgba(var(--cta))",
        "cta-active": "rgba(var(--cta-active))",
        "cta-text": "rgba(var(--cta-text))",
        "cta-text-active":" rgba(var(--cta-text-active))",
        grape: "rgba(var(--grape))",
       
      },
      boxShadow: {
        'leftCorner': '  -20px -15px 0 0 #000000;',
        'rightCorner': '  20px -15px 0 0  #000000;',
        'BleftCorner': '  -20px 15px 0 0  #000000;',
        'BrightCorner': '  20px 15px 0 0  #000000;',
      },
      fontFamily: {
        'MoonGet': ['moon-get'],
        'Louis':['louis']
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
export default config


