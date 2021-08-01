import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import { isEmpty } from 'lodash'

type Props = {
  email: string
  name?: string
  type?: string
  subject?: string
  content: string
}

dotenv.config()

export default ({ email, name, type, subject, content }: Props) => {
  const isCollab = !isEmpty(name) && !isEmpty(type)

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
    tls: {
      rejectUnauthorized: false,
    },
  })

  const html = `
  ${
    name && type
      ? `
      <div>
        <div>Nom du projet: ${name}</div>
        <div>Type: ${type}</div>
      </div>
      <p>${content}</p>
    `
      : `
      <p>${content}</p>
    `
  }
  `

  const message = {
    from: process.env.MAIL_USERNAME, // Sender address
    to: 'fabianfacinou02@gmail.com', // List of recipients
    subject: isCollab ? `Collaboration request for ${type} (${name})` : subject,
    html: `
    <html>
      <body>
        <div>Contact: ${email}</div>
          ${html}
        </body>
    </html>
    `,
  }

  transporter.sendMail(message, function (err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info)
    }
  })
}
