const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const msg = {
    to: 'preston@techsc.org', // Change to your recipient
    from: 'preston@prestongrisham.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'This is a test --- I hope it is easy to use and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }

  const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email, // Change to your recipient
        from: 'preston@prestongrisham.com', // Change to your verified sender
        subject: 'Thanks for signing up for Tasks',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app! We are excited to have you.`
    })
  }

  const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email, // Change to your recipient
        from: 'preston@prestongrisham.com', // Change to your verified sender
        subject: 'We Hate to see you go',
        text: `We hate to see you go, ${name}. We would love any feedback that would help us improve our app.`
    })
  }

  module.exports = {
      sendWelcomeEmail,
      sendCancelEmail
  }