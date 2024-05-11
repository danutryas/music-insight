import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors: {
        bgColor: "#0d1117",
        bgContent: "#1b1f23",
        textColor: "#ffffff",
        secondaryText: "#bdc1c6",
        accentColor: "#37b3b3",
        highlight: "#a1c4db",
        border: "#5f8fa5",
        error: "#e04e4e",
        textHover: "#e0e0e0",

        // bgColor: "#1A1A1A",
        // bgContent: "#2a2a2a",
        // textColor: "#6fa8dc",
        // secondaryText: "#d8d8d8",
        // accentColor: "#4dcfe0",
        // highlight: "#a4cbea",
        // border: "#4e86ab",
        // error: "#ff6161",
      },
      boxShadow: {
        content: "0px 2px 4px rgba(255, 255, 255, 0.3)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        ".blur-outline": {
          "box-shadow": "0 0 10px 5px rgba(255,255,255, 0.2)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
export default config;
