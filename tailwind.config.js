/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        tree: 'url("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg")',
        mountain:
          'url("https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_960_720.jpg")',
        sea: 'url("https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg")',
      },
    },
  },
  plugins: [],
};
