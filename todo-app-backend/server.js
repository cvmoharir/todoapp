const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aaipapam@gmail.com',
    pass: 'your-app-specific-password'
  }
});

app.post('/send-email', (req, res) => {
  const { recipients, body } = req.body;

  if (!recipients || !Array.isArray(recipients) || recipients.length === 0 || !body) {
    return res.status(400).json({ error: 'Invalid request data' });
  }

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: recipients.join(', '),
    subject: 'Todo List Summary',
    text: body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
