import type { NextApiRequest, NextApiResponse } from 'next'
import { parseParam } from '../../../../helper/Helpers';

type NextRequestMe = NextApiRequest & {
    token: string,
    id:string
}

type Response = {
    data:string
}

export default function handler(
  req: NextRequestMe,
  res: NextApiResponse<Response>
) {
    const token : string = parseParam(req.query.token);
    const id : string = parseParam(req.query.id);

    try {

        fetch(`https://api.mercadolibre.com/users/${id}/items/search`, {
            method: 'GET',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        .then((result) => result.json())
        .then((json) => {
            console.log(json);
            res.status(200).json(json)
        })
        .catch((err) => res.status(500).json({data:err}))

    } catch (e) {
        res.status(500).json({data:JSON.stringify(e)})
    }

}