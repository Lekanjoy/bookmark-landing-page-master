/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        SoftBlue: "hsl(231, 69%, 60%)",
        SoftRed: "hsl(0, 94%, 66%)",
        GrayishBlue: "hsl(229, 8%, 60%)",
        VeryDarkBlue: "hsl(229, 31%, 21%)",
      },
      screens: {
        mob: "468px",
      },
      fontFamily: {
        Rubik: "Rubik",
      },
      backgroundImage: {
        illustFeatures1: " url(/images/illustration-features-tab-1.svg)",
        illustFeatures2: "url(/images/illustration-features-tab-2.svg)",
        illustFeatures3: "url(/images/illustration-features-tab-3.svg)",
        illustHero: "url(/images/heroillustration-.svg)",
      },
    },
  },
  plugins: [],
};
