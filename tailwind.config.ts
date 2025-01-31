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
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        absolute: {
          white: "#FFFFFF",
          black: "#000000",
        },
        orange: {
          45: "#E68500",
          50: "#FF9500",
          70: "#FFBF66",
          75: "#FFCA80",
          80: "#FFD499",
          90: "#FFEACC",
          95: "#FFF4E5",
          97: "#FFF9F0",
          99: "#FFFDFA",
        },
        white: {
          90: "#E4E4E7",
          95: "#F1F1F3",
          97: "#F7F7F8",
          99: "#FCFCFD",
        },
        grey: {
          10: "#191919",
          15: "#262626",
          20: "#333333",
          30: "#4C4C4D",
          35: "#59595A",
          40: "#656567",
          60: "#98989A",
          70: "#B3B3B3",
        },
      },
      fontFamily: {
        "be-vietnam-pro": ["Be Vietnam Pro", "sans-serif"],
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
  ],
} satisfies Config;