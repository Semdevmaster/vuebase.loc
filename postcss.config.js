module.exports = ({ env }) => ({
  plugins: [
    require('postcss-import')({}),
    require('postcss-preset-env')({
      stage: 2,
      features: {
        'nesting-rules': true,
        'custom-media-queries': true
      },
      autoprefixer: { cascade: false }
    }),
    env === 'production' ? require('@fullhuman/postcss-purgecss')({
      content: ['./src/**/*.vue', './src/components/**/*.vue'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    }) : false
  ]
})
