/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        'base': '1rem', // 16px
        'lg': '1.125rem', // 18px
        'xl': '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
      },
      colors: {
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
      },
      backgroundImage: {
        'app-pattern': "linear-gradient(to right bottom, rgba(2, 6, 23, 0.97), rgba(15, 23, 42, 0.95)), url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264.988-.402l1.004.602c.322.193.648.395.973.602.214.126.428.258.642.394.214.136.424.273.64.404.215.134.427.275.64.412v.198c-.313.183-.632.35-.957.5-.232.148-.473.287-.718.417-.245.13-.491.261-.741.391-.25.13-.508.261-.77.389-.262.128-.531.256-.804.382-.273.126-.55.25-.827.374-.276.126-.555.252-.832.372-.278.12-.564.241-.85.361-.288.12-.576.236-.864.356-.288.12-.59.244-.879.36-.288.117-.591.24-.883.36-.292.12-.596.24-.9.361-.303.12-.618.25-.93.369-.313.12-.64.25-.958.374-.319.125-.658.254-.998.374-.34.12-.695.258-1.052.382-.358.125-.73.254-1.107.378-.377.123-.768.255-1.166.378-.398.123-.813.26-1.242.379-.429.12-.876.254-1.342.376-.466.123-.952.254-1.457.377-.506.123-1.034.252-1.587.373-.552.123-1.129.252-1.733.371-.604.12-1.246.255-1.924.368-.678.114-1.396.246-2.159.364-.762.118-1.568.25-2.423.364-.855.115-1.764.25-2.734.364l-.746.188-.292-.16C14.39 25.104 7.708 22.927 0 20.51v-1.023c7.702-2.416 14.376-4.59 19.473-7.42.98-.153 2.086-.286 3.142-.416.161-.018.32-.039.479-.058-.041-.15-.09-.3-.149-.451-.089-.238-.193-.474-.318-.693a4.062 4.062 0 0 0-.661-.848 3.22 3.22 0 0 0-.455-.331 2.995 2.995 0 0 0-.69-.307 4.357 4.357 0 0 0-.706-.14c-.354-.042-.688-.042-1.001-.001a3.76 3.76 0 0 0-.886.198c-.354.13-.671.32-.95.565-.278.245-.514.553-.695.92-.18.368-.303.797-.356 1.29-.053.494-.033.988.062 1.494a4.29 4.29 0 0 0 .56 1.403c-.684.117-1.331.219-1.932.311-.57.088-1.105.167-1.599.239-.494.072-.948.133-1.354.187-.406.054-.774.096-1.098.132-.324.036-.609.066-.853.091-.167.016-.267.025-.25.028.017.004.155.002.405-.007a27.11 27.11 0 0 0 1.298-.149c.427-.06.89-.128 1.39-.201.5-.073 1.035-.151 1.605-.239l.68-.104c-.44.597-.78 1.28-.94 2.05-.161.771-.165 1.587.007 2.449.172.862.515 1.723 1.036 2.562.522.839 1.201 1.624 2.037 2.35.997.866 2.13 1.55 3.295 2.066 1.167.516 2.371.863 3.518 1.08 1.147.216 2.235.299 3.233.293.999-.006 1.906-.103 2.7-.267.794-.166 1.47-.396 2.01-.689.541-.292.947-.642 1.229-1.06.282-.418.416-.897.409-1.438a2.132 2.132 0 0 0-.198-.887 2.235 2.235 0 0 0-.547-.689 2.894 2.894 0 0 0-.798-.444 4.166 4.166 0 0 0-.95-.243c-.338-.046-.656-.048-.95-.008-.294.04-.565.123-.806.245-.241.122-.45.282-.626.477-.125.138-.225.295-.298.465-.074.17-.12.34-.138.512-.019.17-.006.326.044.462.05.136.131.252.243.348.113.097.258.17.402.192.145.022.289-.005.429-.096a.55.55 0 0 0 .224-.333.704.704 0 0 0-.015-.344.906.906 0 0 0-.134-.335.784.784 0 0 0-.232-.279.675.675 0 0 0-.345-.15c.028-.297.231-.536.543-.698.312-.162.71-.206 1.124-.148.414.058.836.214 1.229.465.392.25.743.575 1.008.944.266.37.44.78.517 1.207.077.427.057.86-.047 1.273-.104.413-.293.785-.555 1.119a3.209 3.209 0 0 1-.919.814c-.361.222-.75.388-1.148.503a5.648 5.648 0 0 1-1.356.198 7.053 7.053 0 0 1-1.465-.056 9.14 9.14 0 0 1-1.476-.292c-.492-.131-.964-.296-1.409-.492a8.626 8.626 0 0 1-1.252-.633c-.394-.235-.76-.494-1.095-.77-.334-.28-.629-.57-.876-.879a5.34 5.34 0 0 1-.62-.935 4.83 4.83 0 0 1-.335-.956 5.209 5.209 0 0 1-.121-.956c-.007-.328.024-.65.09-.956.065-.306.176-.598.33-.858.155-.26.35-.49.585-.683.235-.193.511-.339.827-.437.253-.079.514-.123.785-.131.271-.008.545.018.818.076l.097.024a5.152 5.152 0 0 1 .184-.678 5.315 5.315 0 0 1 .28-.665c.109-.215.24-.425.387-.621.147-.197.314-.375.498-.538.183-.162.387-.305.606-.417.22-.112.457-.2.708-.254a4.01 4.01 0 0 1 .802-.074c.277.006.544.042.798.111.254.069.494.166.715.29.222.124.42.276.595.45.175.176.325.37.444.58.12.21.207.434.264.665a3.15 3.15 0 0 1 .072.75 3.392 3.392 0 0 1-.108.75 4.038 4.038 0 0 1-.675 1.43c-.323.441-.742.841-1.24 1.185l-.192.129.475.154c.573.193 1.142.393 1.69.599.548.206 1.081.425 1.594.651.513.225 1.001.458 1.462.695.461.238.895.482 1.293.729.398.247.761.499 1.085.748.325.25.617.5.866.745v.16c-.429.293-.856.574-1.299.85-.442.277-.9.55-1.379.825-.479.275-.976.554-1.497.83-.52.28-1.065.56-1.638.835-.572.275-1.174.553-1.807.827-.634.274-1.298.55-1.99.82-.693.271-1.422.546-2.18.814a44.677 44.677 0 0 1-2.415.789c-.829.25-1.705.508-2.614.77L21.184 20z' fill='%23ffffff' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'neural-pattern': "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Ccircle cx='10' cy='10' r='2' fill='%23FFFFFF' fill-opacity='0.03'/%3E%3Ccircle cx='30' cy='10' r='2' fill='%23FFFFFF' fill-opacity='0.03'/%3E%3Ccircle cx='50' cy='10' r='2' fill='%23FFFFFF' fill-opacity='0.03'/%3E%3Ccircle cx='70' cy='10' r='2' fill='%23FFFFFF' fill-opacity='0.03'/%3E%3Ccircle cx='90' cy='10' r='2' fill='%23FFFFFF' fill-opacity='0.03'/%3E%3Ccircle cx='10' cy='30' r='2' fill='%23FFFFFF' fill-opacity='0.03'/%3E%3Ccircle cx='30' cy='30' r='2' fill='%23FFFFFF' fill-opacity='0.03'/%3E%3Ccircle cx='50' cy='30' r='2' fill='%23FFFFFF' fill-opacity='0.03'/%3E%3Ccircle cx='70' cy='30' r='2' fill='%23FFFFFF' fill-opacity='0.03'/%3E%3Ccircle cx='90' cy='30' r='2' fill='%23FFFFFF' fill-opacity='0.03'/%3E%3Cpath d='M10 10L30 30' stroke='%23FFFFFF' stroke-opacity='0.02' stroke-width='1'/%3E%3Cpath d='M30 10L50 30' stroke='%23FFFFFF' stroke-opacity='0.02' stroke-width='1'/%3E%3Cpath d='M50 10L30 30' stroke='%23FFFFFF' stroke-opacity='0.02' stroke-width='1'/%3E%3Cpath d='M70 10L50 30' stroke='%23FFFFFF' stroke-opacity='0.02' stroke-width='1'/%3E%3Cpath d='M90 10L70 30' stroke='%23FFFFFF' stroke-opacity='0.02' stroke-width='1'/%3E%3Cpath d='M10 30L30 10' stroke='%23FFFFFF' stroke-opacity='0.02' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E\")",
        'subtle-pattern': "url(\"data:image/svg+xml,%3Csvg width='150' height='150' viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.03'%3E%3Cpath d='M0 0h150v150H0z' fill='%23FFFFFF' fill-opacity='0.02'/%3E%3Cpath d='M75 75a50 50 0 1 0 0-1z' stroke='%23FFFFFF' stroke-opacity='0.1' stroke-width='0.5' fill='none'/%3E%3Cpath d='M75 25a50 50 0 1 0 0 100 50 50 0 1 0 0-100z' stroke='%23FFFFFF' stroke-opacity='0.05' stroke-width='0.5' fill='none'/%3E%3Cpath d='M75 32.5a42.5 42.5 0 1 0 0 85 42.5 42.5 0 1 0 0-85z' stroke='%23FFFFFF' stroke-opacity='0.05' stroke-width='0.5' fill='none'/%3E%3Cpath d='M75 40a35 35 0 1 0 0 70 35 35 0 1 0 0-70z' stroke='%23FFFFFF' stroke-opacity='0.05' stroke-width='0.5' fill='none'/%3E%3Cpath d='M75 47.5a27.5 27.5 0 1 0 0 55 27.5 27.5 0 1 0 0-55z' stroke='%23FFFFFF' stroke-opacity='0.05' stroke-width='0.5' fill='none'/%3E%3Cpath d='M75 55a20 20 0 1 0 0 40 20 20 0 1 0 0-40z' stroke='%23FFFFFF' stroke-opacity='0.05' stroke-width='0.5' fill='none'/%3E%3Cpath d='M75 62.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 1 0 0-25z' stroke='%23FFFFFF' stroke-opacity='0.05' stroke-width='0.5' fill='none'/%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'gradient-x': 'gradient-x 10s ease infinite',
        'gradient-y': 'gradient-y 10s ease infinite',
        'gradient-xy': 'gradient-xy 10s ease infinite',
        'pulse-subtle': 'pulse-subtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-position': '50% 0%',
          },
          '50%': {
            'background-position': '50% 100%',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-position': '0% 0%',
          },
          '50%': {
            'background-position': '100% 100%',
          },
        },
        'pulse-subtle': {
          '0%, 100%': {
            opacity: 1,
          },
          '50%': {
            opacity: 0.85,
          },
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'width': 'width',
        'border': 'border-width, border-color',
        'transform-opacity': 'transform, opacity',
      },
      boxShadow: {
        'glow': '0 0 15px 2px rgba(14, 165, 233, 0.3)',
        'glow-lg': '0 0 25px 5px rgba(14, 165, 233, 0.4)',
        'inner-glow': 'inset 0 0 15px 2px rgba(14, 165, 233, 0.2)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 8px 30px -4px rgba(0, 0, 0, 0.25), 0 0 1px rgba(14, 165, 233, 0.3)',
        'nav': '0 4px 10px -1px rgba(0, 0, 0, 0.3)',
        'button': '0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'button-hover': '0 4px 8px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(14, 165, 233, 0.1)',
      },
    },
  },
  plugins: [],
}

