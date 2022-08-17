import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    try {

        const { code } = req.query
        let cleanCode: string = (typeof(code) == "string")?code:"";

        fetch('https://api.mercadolibre.com/oauth/token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': 'application/json',
            },
            body: JSON.stringify(builderBody(cleanCode))

        }).then((result) => {
            debugger;
            console.log(result);
            res.status(200).json({ name: 'John Doe' })
        }).catch((err) => {
            debugger;
            console.log(err);
        })

    } catch (e) {
        debugger;
        console.log(e);
    }
}

function builderBody(code:string): string {

    let map = new Map<string,string>();
    map.set('client_secret',process.env.ML_CLIENT_SECRET ?? '');
    map.set('client_id', process.env.ML_CLIENT_ID ?? '' ?? '');
    map.set('grant_type', 'authorization_code');
    map.set('code', code);
    map.set('redirect_uri',process.env.ML_REDIRECT_URI ?? '');

    debugger;
    let formBody:string[] = [];
    map.forEach((e:string, key:string) => {
        let encodedKey = encodeURIComponent(e);
        let encodedValue = encodeURIComponent(key);
        formBody.push(encodedKey + "=" + encodedValue);
    });

    return formBody.join("&");

}
