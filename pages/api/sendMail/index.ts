import { NextApiRequest, NextApiResponse } from 'next'
import sendMail from '@/core/lib/sendMail'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!_req) {
      throw new Error('Cannot find data')
    }

    const { email, name, type, subject, content } = _req.body

    const options = {
      email,
      name,
      type,
      subject,
      content,
    }

    sendMail(options)
    res.status(200).json(_req.body)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
