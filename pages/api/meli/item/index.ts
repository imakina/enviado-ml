import type { NextApiRequest, NextApiResponse } from 'next'
import { parseParam } from '../../../../helper/Helpers';

type Response = {
    data:string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
    
    const token : string = parseParam(req.query.token);
    const item : string = parseParam(req.query.item);
    const body : string = req.body;
    
    try {
        
        let options = {}
        const headers = {
            'content-type': 'application/x-www-form-urlencoded',
            'accept': 'application/json',
            'Authorization': 'Bearer ' + token
        }
        
        switch (req.method) {
            case 'POST':
                options = {
                    method: 'PUT',
                    headers: headers,
                    body:JSON.stringify(JSON.parse(body))
                };
                break;
            case 'GET':
                options = {
                    method: 'GET',
                    headers: headers
                };
                break;
        }

        const response = await fetch('https://api.mercadolibre.com/items/' + item, options)

        if (response.ok) {
            //debugger;
            const result = await response.json();
            console.log(result);
            res.status(200).json(result)
        } else {
            debugger;
            const result = await response.json();
            res.status(500).json(result);
        }

    } catch (e) {
        console.log(e);
        res.status(500).json({data:"Error on item"})
    }

}

// body: JSON.stringify({
            //     title:'Item de test - No Ofertar',
            //     category_id:'MLA3530',
            //     price:350,
            //     currency_id:'ARS',
            //     available_quantity:10,
            //     buying_mode:'buy_it_now',
            //     condition:'new',
            //     listing_type_id:'gold_special',
            //     sale_terms:[
            //         {
            //             'id':'WARRANTY_TYPE',
            //             'value_name':'Garantía del vendedor'
            //         },
            //         {
            //             'id':'WARRANTY_TIME',
            //             'value_name':'90 días'
            //         }
            //     ],
            //     pictures:[
            //         {
            //             'source':'http://mla-s2-p.mlstatic.com/968521-MLA20805195516_072016-O.jpg'
            //         }
            //     ],
            //     attributes:[
            //         {
            //             'id':'BRAND',
            //             'value_name':'Marca del producto'
            //         },
            //         {
            //             'id':'EAN',
            //             'value_name':'7898095297749'
            //         }
            //     ]
            // })