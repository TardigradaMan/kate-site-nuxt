const imagemin = require('imagemin')
const imageminWebp = require('imagemin-webp')

;(async () => {
  await imagemin(['assets/img/*.{jpg,png}'], {
    destination: 'assets/img',
    plugins: [imageminWebp({ quality: 70 })]
  })

  console.log('Images optimized')
})()
