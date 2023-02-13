import Express from 'express'

const port = 5000

const app = Express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
