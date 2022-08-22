import type { NextApiRequest, NextApiResponse } from 'next'
import { parseGrant } from '../../../../helper/Helpers';

type Data = {
  jwt: {}
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {
    
        const { code } = req.query;

        let body = builderBody(parseGrant(code));

        fetch('https://api.mercadolibre.com/oauth/token', {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'accept': 'application/json',
            },
            body: body

        })
        .then((result) => result.json())
        .then((json) => {
            if (json.access_token)
                res.status(200).json(json);
            else {
                res.status(400).json({...json, grant:body})
            }
                
        })
        .catch((err) => res.status(500).json(err))

    } catch (e) {
        res.status(500).json({jwt : JSON.stringify(e)})
    }
}

function builderBody(code:string): string {

    let map = new Map<string,string>();
    map.set('client_secret', process.env.NEXT_PUBLIC_ML_CLIENT_SECRET ?? '');
    map.set('client_id', process.env.NEXT_PUBLIC_ML_CLIENT_ID ?? '');
    map.set('grant_type', 'authorization_code');
    map.set('code', code);
    map.set('redirect_uri', process.env.NEXT_PUBLIC_ML_CLIENT_REDIRECT_URI ?? '');

    let formBody:string[] = [];
    map.forEach((e:string, key:string) => {
        let encodedKey = encodeURIComponent(key);
        let encodedValue = encodeURIComponent(e);
        formBody.push(encodedKey + "=" + encodedValue);
    });

    return formBody.join("&");

}
