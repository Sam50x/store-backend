import express from 'express'

const app = express()
const port = 8888

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.listen(port, () => {
    console.log(`Store app listening on port ${port}`)
})