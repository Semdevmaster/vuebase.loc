const { src, dest, watch } = require('gulp')
const imagemin = require('gulp-imagemin')
const webp = require('gulp-webp')
const ImageminMozjpeg = require('imagemin-mozjpeg')
const svgSprite = require('gulp-svg-sprite')
const paths = { img: 'src/assets/img' }
/****************************************************************************************************/
// IMG MINIFY
/****************************************************************************************************/
const minifyImage = (file) =>
  src(file, { base: 'src/assets/img/' })
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      ImageminMozjpeg({ quality: 75, progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 })
    ]))
    .pipe(dest(paths.img))
/****************************************************************************************************/
// IMG TO WEBP
/****************************************************************************************************/
const convertToWebp = (file) => {
  src(file, { base: 'src/assets/img/' })
    .pipe(webp())
    .pipe(dest(paths.img))
}
/****************************************************************************************************/
// SVG SPRITE ICONS TASK
/****************************************************************************************************/
const config = {
  shape: {
    dimension: {
      maxWidth: 50,
      maxHeight: 50
    },
    spacing: {
      padding: 0,
      box: 'icon'
    },
    transform: [
      {
        svgo: {
          plugins: [
            { removeXMLNS: true },
            { cleanupListOfValues: true },
            { convertShapeToPath: false },
            { removeAttrs: { attrs: ['data-name', 'version'] } },
            { removeStyleElement: true },
            { removeScriptElement: true }
          ],
          floatPrecision: 1
        }
      }
    ]
  },
  svg: {
    xmlDeclaration: false,
    doctypeDeclaration: false,
    dimensionAttributes: false
  },
  mode: {
    stack: {
      dest: '.',
      sprite: 'img/sprite.svg',
      render: {
        css: {
          template: 'src/templates/icon_template.html',
          dest: 'css/modules/sprite.css'
        }
      }
    }
  }
}
const svgicons = () =>
  src('src/assets/icons/*.svg')
    .pipe(svgSprite(config))
    .pipe(dest('src/assets'))
exports.svgicons = svgicons
/****************************************************************************************************/
// WATCHERS
/****************************************************************************************************/
exports.watchers = cb => {
  watch(['src/assets/img/**/*.{jpg,png,gif}'])
    .on('add', (path) => {
      console.log('Добавлена картинка')
      console.log(path)
      convertToWebp(path)
      console.log('Картинка сконвертирована в формат webp')
      minifyImage(path)
      console.log('Картинка минифицирована')
    })
  watch('src/assets/icons/*.svg', svgicons)
  cb()
}
