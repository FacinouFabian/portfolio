import { NextApiRequest, NextApiResponse } from 'next'
import sendMail from '@/core/lib/sendMail'

const handler = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
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

    await sendMail(options).then((message) => {
      res.status(200).json({ statusCode: 200, message })
    })
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
