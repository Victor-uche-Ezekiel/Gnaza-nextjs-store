import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      fSize1: "var(--font-size-1)",
      fSize2: "var(--font-size-2)",
      fSize3: "var(--font-size-3)",
      fSize4: "var(--font-size-4)",
      logo: "var(--logo-size-1)",
    },

    colors: {
      clr1: "var(--clr-pry-1)",

      clr2: "#2b2620",
      clr3: "#413a31",

      clr7: "rgba(43, 39, 33, 0.5)",
      clr8: "rgba(44, 39, 33, 0.8)",

      clr9: "rgb(212, 210, 207)",
      clr10: "rgba(34, 34, 34, 0.5)",

      clr4: "#fbf9f6",

      clr5: "#f7f2ec",
      clr6: "#f4ece3",
    },

    screens: {
      // Home Screens
      hmXl: { max: "950px" },
      hmLg: { max: "600px" },
      hmMd: { max: "500px" },
      hmsm: { max: "400px" },

      // Products screens
      prXl: { max: "680px" },
      prLg: { max: "580px" },
      prMd: { max: "388px" },
      prSm: { max: "307px" },

      // footer screens
      ftXl: { max: "950px" },
      ftLg: { max: "800px" },

      // footer screens
      ctXl: { max: "950px" },
      ctLg: { max: "600px" },
      ctMd: { max: "400px" },
      ctSm: { max: "300px" },
    },

    fontFamily: {
      pdisplay: "Playfair Display",
      meddon: "Meddon",
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      height: {
        logo: "var(--logo-size-1)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
export default config;
