import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  jwt: {}
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {
        const { code } = req.query;

        let grant: string = (typeof(code) == "string")?code:"";

        let body = builderBody(grant);

        // res.status(200).json({jwt : body})

        debugger;
        fetch('https://api.mercadolibre.com/oauth/token', {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'accept': 'application/json',
            },
            body: body

        })
        .then((result) => result.json())
        .then((json) => res.status(200).json(json))
        .catch((err) => res.status(500).json(err))

    } catch (e) {
        res.status(500).json({jwt : JSON.stringify(e)})
    }
}

function builderBody(code:string): string {

    let map = new Map<string,string>();
    map.set('client_secret', 'gAGwCH0cQhlpCxvAh7CiJjSYwNZpjrKX');
    map.set('client_id', '5342048874344752');
    map.set('grant_type', 'authorization_code');
    map.set('code', code);
    map.set('redirect_uri', 'http://localhost:3000/addproduct');

    let formBody:string[] = [];
    map.forEach((e:string, key:string) => {
        let encodedKey = encodeURIComponent(key);
        let encodedValue = encodeURIComponent(e);
        formBody.push(encodedKey + "=" + encodedValue);
    });

    return formBody.join("&");

}