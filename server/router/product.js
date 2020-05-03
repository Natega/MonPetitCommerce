const mongoose = require('mongoose')
const { product } = require('../schema/schema')
module.exports = {
  productRouter(app) {
    app.get('/products', async function(req, res) {
      const Product = mongoose.model('product', product)
      const products = await Product.find({})
      res.send(products)
    })

    app.post('/product', function(req, res) {
      const { myText, colorText, colorBase, shape, id } = req.body
      const Product = mongoose.model('product', product)
      const base64Data = req.body.image.replace(
        /^data:image\/octet-stream;base64,/,
        ''
      )

      const addedProduct = new Product({
        myText,
        colorText,
        colorBase,
        shape,
        image: id,
        imageSrc: base64Data
      })

      require('fs').writeFile(
        './static/products/' + id + '.jpg',
        base64Data,
        'base64',
        function(err) {
          console.log(err)
        }
      )

      // save model to database
      addedProduct.save(function(err, book) {
        if (err) return console.error(err)
        console.log(err)
      })

      res.send({ hw: true })
    })
  }
}
