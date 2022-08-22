import type { NextApiRequest, NextApiResponse } from 'next'
import { parseParam } from '../../../../helper/Helpers';

type NextRequestMe = NextApiRequest & {
    token: string
}

type Profile = {
    profile:string
}

export default function handler(
  req: NextRequestMe,
  res: NextApiResponse<Profile>
) {
    const token : string = parseParam(req.query.token);

    try {

        fetch('https://api.mercadolibre.com/users/me', {
            method: 'GET',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        .then((result) => result.json())
        .then((json) => res.status(200).json({profile:json}))
        .catch((err) => res.status(500).json({profile:err}))

    } catch (e) {
        res.status(500).json({profile:JSON.stringify(e)})
    }

}