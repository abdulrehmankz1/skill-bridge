import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        absolute: {
          white: "#FFFFFF",
          black: "#000000",
        },
        orange: {
          "45": "#E68500",
          "50": "#FF9500",
          "70": "#FFBF66",
          "75": "#FFCA80",
          "80": "#FFD499",
          "90": "#FFEACC",
          "95": "#FFF4E5",
          "97": "#FFF9F0",
          "99": "#FFFDFA",
        },
        white: {
          "90": "#E4E4E7",
          "95": "#F1F1F3",
          "97": "#F7F7F8",
          "99": "#FCFCFD",
        },
        grey: {
          "10": "#191919",
          "15": "#262626",
          "20": "#333333",
          "30": "#4C4C4D",
          "35": "#59595A",
          "40": "#656567",
          "60": "#98989A",
          "70": "#B3B3B3",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        "be-vietnam-pro": ["Be Vietnam Pro", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    function ({ addBase }: PluginAPI) {
      addBase({
        body: { fontFamily: "Be Vietnam Pro, sans-serif" },
        h1: { fontSize: "60px" },
        h2: { fontSize: "40px" },
        h3: { fontSize: "38px" },
        h4: { fontSize: "36px" },
        h5: { fontSize: "28px" },
        h6: { fontSize: "20px" },
        p: { fontSize: "16px" },
        // span: { fontSize: "16px" },
        // div: { fontSize: "16px" },
      });
    },
    require("tailwindcss-animate"),
  ],
} satisfies Config;
