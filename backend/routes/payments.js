const express  = require('express')
const router   = express.Router()
const axios    = require('axios')
const { Resend } = require('resend')

const resend     = new Resend(process.env.RESEND_API_KEY)
const FLW_SECRET = process.env.FLW_SECRET_KEY
const FLW_BASE   = 'https://api.flutterwave.com/v3'

const PACKAGES = {
  starter: {
    name:     'Starter Shopify',
    amount:   250,
    currency: 'USD',
  },
  standard: {
    name:     'Standard Shopify',
    amount:   350,
    currency: 'USD',
  },
  'yt-starter': {
    name:     'YouTube Starter Growth',
    amount:   500,
    currency: 'USD',
  },
  'yt-scale': {
    name:     'YouTube Scale Up',
    amount:   1200,
    currency: 'USD',
  },
  'yt-domination': {
    name:     'YouTube Domination',
    amount:   2500,
    currency: 'USD',
  },
}

// ── POST /api/payments/initiate ───────────────────────────────
router.post('/initiate', async (req, res) => {
  try {
    const { packageId, customerName, customerEmail, businessName } = req.body

    const pkg = PACKAGES[packageId]
    if (!pkg) return res.status(400).json({ error: 'Invalid package selected' })
    if (!customerName || !customerEmail) return res.status(400).json({ error: 'Name and email are required' })

    const txRef = `MAXPROFIT-${packageId.toUpperCase()}-${Date.now()}`

    const payload = {
      tx_ref:       txRef,
      amount:       pkg.amount,
      currency:     pkg.currency,
      redirect_url: `${process.env.FRONTEND_URL}/thank-you`,
      customer: {
        email: customerEmail,
        name:  customerName,
      },
      customizations: {
        title:       'MaxProfit',
        description: `${pkg.name} Package`,
      },
      meta: {
        packageId,
        packageName:  pkg.name,
        businessName: businessName || '',
      },
    }

    const response = await axios.post(`${FLW_BASE}/payments`, payload, {
      headers: {
        Authorization: `Bearer ${FLW_SECRET}`,
        'Content-Type': 'application/json',
      },
    })

    if (response.data.status === 'success') {
      res.json({ paymentLink: response.data.data.link, txRef })
    } else {
      throw new Error('Failed to create payment link')
    }

  } catch (err) {
    console.error('Initiate error:', err.response?.data || err.message)
    res.status(500).json({ error: err.response?.data?.message || err.message })
  }
})

// ── POST /api/payments/webhook ────────────────────────────────
router.post('/webhook', async (req, res) => {
  try {
    const signature = req.headers['verif-hash']
    if (!signature || signature !== process.env.FLW_WEBHOOK_SECRET) {
      return res.status(401).json({ error: 'Invalid signature' })
    }

    const event = req.body

    if (event.event === 'charge.completed' && event.data.status === 'successful') {
      const { customer, meta, amount, currency } = event.data
      const { packageName, businessName } = meta || {}
      console.log(`✅ Payment successful: ${packageName} — ${customer.email}`)
      await sendClientEmail({ customerName: customer.name, customerEmail: customer.email, packageName: packageName || 'Package', businessName: businessName || '', amount, currency })
      await sendOwnerEmail({ customerName: customer.name, customerEmail: customer.email, packageName: packageName || 'Package', businessName: businessName || '', amount, currency })
    }

    res.json({ status: 'success' })
  } catch (err) {
    console.error('Webhook error:', err.message)
    res.status(500).json({ error: err.message })
  }
})

// ── GET /api/payments/verify ──────────────────────────────────
router.get('/verify', async (req, res) => {
  try {
    const { transaction_id } = req.query
    if (!transaction_id) return res.status(400).json({ error: 'Transaction ID required' })

    const response = await axios.get(`${FLW_BASE}/transactions/${transaction_id}/verify`, {
      headers: { Authorization: `Bearer ${FLW_SECRET}` },
    })

    const data = response.data.data
    if (data.status === 'successful') {
      res.json({ success: true, amount: data.amount, currency: data.currency, customer: data.customer, packageName: data.meta?.packageName || '', txRef: data.tx_ref })
    } else {
      res.json({ success: false, status: data.status })
    }
  } catch (err) {
    console.error('Verify error:', err.response?.data || err.message)
    res.status(500).json({ error: err.message })
  }
})

// ── POST /api/payments/booking ────────────────────────────────
router.post('/booking', async (req, res) => {
  try {
    const { name, email, phone, business, service, budget, preferredTime, message } = req.body
    if (!name || !email || !service) return res.status(400).json({ error: 'Name, email and service are required' })

    await resend.emails.send({
      from:    process.env.EMAIL_FROM,
      to:      process.env.EMAIL_FROM,
      subject: `📞 New Call Booking — ${name}`,
      html: `
        <h2>New Discovery Call</h2>
        <table>
          <tr><td><b>Name</b></td><td>${name}</td></tr>
          <tr><td><b>Email</b></td><td>${email}</td></tr>
          <tr><td><b>Phone</b></td><td>${phone || 'Not provided'}</td></tr>
          <tr><td><b>Business</b></td><td>${business || 'Not provided'}</td></tr>
          <tr><td><b>Service</b></td><td>${service}</td></tr>
          <tr><td><b>Budget</b></td><td>${budget || 'Not specified'}</td></tr>
          <tr><td><b>Time</b></td><td>${preferredTime || 'Flexible'}</td></tr>
          <tr><td><b>Message</b></td><td>${message || '—'}</td></tr>
        </table>
      `,
    })

    await resend.emails.send({
      from:    process.env.EMAIL_FROM,
      to:      email,
      subject: `We got your request, ${name.split(' ')[0]}! 🎉`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:0 auto">
          <h2 style="color:#E8631A">You're booked in! 🎉</h2>
          <p>Hi ${name.split(' ')[0]},</p>
          <p>We've received your request for a <strong>${service}</strong> discovery call and will be in touch within <strong>24 hours</strong>.</p>
          <p>Follow us: <a href="https://www.instagram.com/maxprofit_150" style="color:#E8631A">@maxprofit_150</a></p>
          <p>Talk soon,<br/><strong>The MaxProfit Team</strong></p>
        </div>
      `,
    })

    res.json({ success: true })
  } catch (err) {
    console.error('Booking error:', err.message)
    res.status(500).json({ error: err.message })
  }
})

// ── Helpers ───────────────────────────────────────────────────
async function sendClientEmail({ customerName, customerEmail, packageName, businessName, amount, currency }) {
  try {
    await resend.emails.send({
      from:    process.env.EMAIL_FROM,
      to:      customerEmail,
      subject: `Order Confirmed — ${packageName} 🎉`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:0 auto">
          <div style="background:#E8631A;padding:32px;border-radius:12px 12px 0 0;text-align:center">
            <h1 style="color:#fff;margin:0">Payment Confirmed! 🎉</h1>
          </div>
          <div style="background:#fff;padding:32px;border:1px solid #eee;border-radius:0 0 12px 12px">
            <p>Hi ${customerName.split(' ')[0]},</p>
            <p>Your payment of <strong>${currency} ${amount}</strong> for <strong>${packageName}</strong> has been received.</p>
            ${businessName ? `<p>Building for: <strong>${businessName}</strong></p>` : ''}
            <div style="background:#fff8f5;border-left:4px solid #E8631A;padding:16px;margin:24px 0;border-radius:4px">
              <p style="margin:0"><strong>What happens next?</strong></p>
              <p style="margin:8px 0 0">We'll reach out within <strong>24 hours</strong> to kick off your project.</p>
            </div>
            <p>Follow us: <a href="https://www.instagram.com/maxprofit_150" style="color:#E8631A">@maxprofit_150</a></p>
            <p>Talk soon,<br/><strong>The MaxProfit Team</strong></p>
          </div>
        </div>
      `,
    })
  } catch (err) { console.error('Client email error:', err.message) }
}

async function sendOwnerEmail({ customerName, customerEmail, packageName, businessName, amount, currency }) {
  try {
    await resend.emails.send({
      from:    process.env.EMAIL_FROM,
      to:      process.env.EMAIL_FROM,
      subject: `💰 New Payment — ${packageName} (${currency} ${amount})`,
      html: `
        <h2>New Order 💰</h2>
        <table>
          <tr><td><b>Package</b></td><td>${packageName}</td></tr>
          <tr><td><b>Amount</b></td><td>${currency} ${amount}</td></tr>
          <tr><td><b>Customer</b></td><td>${customerName}</td></tr>
          <tr><td><b>Email</b></td><td>${customerEmail}</td></tr>
          <tr><td><b>Business</b></td><td>${businessName || 'Not provided'}</td></tr>
        </table>
        <p><a href="https://dashboard.flutterwave.com">View in Flutterwave Dashboard</a></p>
      `,
    })
  } catch (err) { console.error('Owner email error:', err.message) }
}

module.exports = router