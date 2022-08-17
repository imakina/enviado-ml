import Header from "../components/Header";
import { useRouter } from 'next/router'
import { useState } from "react";
import Link from "next/link";
import { randomInt } from "crypto";

export default function AddProduct() {

    const ml = 'https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=5342048874344752&redirect_uri=http://localhost:3000/addproduct&state='+(new Date).getTimezoneOffset();
    const [data, setData] = useState('');

    const router = useRouter()

    const { code } = router.query
    const grant: string = (typeof(code) == "string")?code:"";

    function getToken() {

        const url:string = '/api/token/' + code ;

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data)
            })
            .catch((e)=>{
                console.log(e);
            });
    }

    return (
        <>
            <Header></Header>
            <div className="addproduct">
                <div className="form">
                    <h2>Add Product </h2>
                    <div className="legend">
                        <div><Link href={ml}>Grant</Link></div><button disabled={(grant == "")} onClick={getToken}>Token</button>
                    </div>
                    {/* <h4>{code}</h4> */}
                    <input type="text"></input>
                    <input type="text"></input>
                    <input type="text"></input>
                    <button>Add Product</button>
                </div>
            </div>
        </>

    )
}