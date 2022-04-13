/**
 * !!!不要在主题配置中分配空对象
 */

const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  darkMode: 'class',
  content: [
    './public/index.html',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // important: "#root",
  theme: {
    screens: {
      xs: '475px', // 增加更小屏幕媒体查询
      ...defaultTheme.screens,
    },
    // colors: {
      // 'blue': '#1fb6ff',
      // 'purple': '#7e5bef',
      // 'pink': '#ff49db',
      // 'orange': '#ff7849',
      // 'green': '#13ce66',
      // 'yellow': '#ffc82c',
      // 'gray-dark': '#273444',
      // 'gray': '#8492a6',
      // 'gray-light': '#d3dce6',
    // },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        'gold': '#f8e605', // 使用方式： text-gold
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    lineClamp: ['responsive', 'hover']
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
  ],
}
