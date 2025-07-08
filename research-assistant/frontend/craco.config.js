module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      return webpackConfig;
    },
  },
  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false,
        // Disable runtime error overlays for unhandled promise rejections
        runtimeErrors: false,
      },
    },
  },
} 