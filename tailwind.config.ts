
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        // Make these available as Tailwind utilities, eg bg-background
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        primary: {
          DEFAULT: "#1EAEDB",
          light: "#33C3F0",
          dark: "#097fab",
          ...{
            foreground: "hsl(var(--primary-foreground))",
          }
        },
        secondary: {
          DEFAULT: "#F1F0FB",
          ...{
            foreground: "hsl(var(--secondary-foreground))",
          }
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          ...{
            foreground: "hsl(var(--muted-foreground))",
          }
        },
        accent: {
          DEFAULT: "#F1F0FB",
          ...{
            foreground: "hsl(var(--accent-foreground))",
          }
        },
        destructive: {
          DEFAULT: "#ea384c",
          ...{
            foreground: "hsl(var(--destructive-foreground))",
          }
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // Skyblue and softgray as before
        skyblue: '#33C3F0',
        softgray: '#F1F0FB',
        // Sidebar/other custom palette entries
        "sidebar-background": "hsl(var(--sidebar-background))",
        "sidebar-foreground": "hsl(var(--sidebar-foreground))",
        "sidebar-primary": "hsl(var(--sidebar-primary))",
        "sidebar-primary-foreground": "hsl(var(--sidebar-primary-foreground))",
        "sidebar-accent": "hsl(var(--sidebar-accent))",
        "sidebar-accent-foreground": "hsl(var(--sidebar-accent-foreground))",
        "sidebar-border": "hsl(var(--sidebar-border))",
        "sidebar-ring": "hsl(var(--sidebar-ring))",
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

