import express from 'express'
import productsRouter from './modules/products/products.router'

const app = express()
const port = 8888

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/products', productsRouter)

app.get('/', (req, res) => {
    return res.send('Hi!')
})


app.listen(port, () => {
    console.log(`Store app listening on port ${port}`)
})