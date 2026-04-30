require('dotenv').config()
const express = require('express')
const cors    = require('cors')

const paymentsRouter = require('./routes/payments')

const app  = express()
const PORT = process.env.PORT || 4000

app.use(cors({
  origin: [
    process.env.FRONTEND_URL,
    'http://localhost:5173',
    'http://localhost:5174',
  ],
  methods: ['GET', 'POST'],
  credentials: true,
}))

app.use('/api/payments/webhook', express.raw({ type: 'application/json' }))
app.use(express.json())

app.use('/api/payments', paymentsRouter)

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

app.use((err, req, res, next) => {
  console.error('Server error:', err.message)
  res.status(500).json({ error: 'Internal server error' })
})

app.listen(PORT, () => {
  console.log(`✅ MaxProfit backend running on port ${PORT}`)
  console.log(`   Health: http://localhost:${PORT}/health`)
})