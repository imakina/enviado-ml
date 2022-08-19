import { useEffect, useState } from "react";
import { getGrant } from "../helper/Helpers";
import { useContextApp } from "../lib/AppProvider";

export default function Publish() {

    const [data, setData] = useState('');
    const code = getGrant();
    const {setMeli} = useContextApp();

    function getToken() {

        fetch('/api/meli/token/' + code)
            .then((res) => res.json())
            .then((data) => {
                console.log('get jwt')
                setMeli(data);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <div className="publish">
                <div className="form">
                    <h2>Publish a Product </h2>
                    <input type="text"></input>
                    <input type="text"></input>
                    <input type="text"></input>
                    <button onClick={getToken}>Publish</button>
                </div>
            </div>
        </>

    )
}