import type { NextApiRequest, NextApiResponse } from 'next'
import { unsetAuthCookies } from 'next-firebase-auth'
// import initAuth from '../../auth/InitAuth' // the module you created above

// initAuth()

type Data = {
  message: string
  success: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    try {
        await unsetAuthCookies(req, res)
    } catch (e) {
        return res.status(500).json({ success: false, message: 'Unexpected error.' })
    }
    return res.status(200).json({ success: true, message : '' })
}
