const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 4000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => console.log(`Server started on ${PORT}`))

app.get('/', (req, res) => {
  res.json({ message: 'Hello' })
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)
