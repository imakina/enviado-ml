
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Grant from "../components/Grant";
import Publish from "../components/Publish";
import Token from "../components/Token";
import { parseGrant } from "../helper/Helpers";
import { AppContext } from "../lib/AppContext";


const MercadoLibre = () => {

    const [publish, setPublish] = useState(false)

    const ctx = useContext(AppContext);

    const router = useRouter()
    const { code } = router.query
    const grant = parseGrant(code);

    console.log('mercadolibre ' + grant);
    
    return (
        <>
            <div className="mercadolibre">
                <div className="menu">
                    <div className="form">
                        <h2>MercadoLibre Envios </h2>
                        <div className="states">
                            <Grant 
                                grant={grant} 
                                getGrant={()=>{}} />
                            <Token 
                                grant={grant} 
                                saveToken={ctx.setMeli} />
                        </div>
                    </div>
                    <div className="form second">
                        <button onClick={() => setPublish(!publish)}>Publish Product</button>
                        <button onClick={() => setPublish(!publish)}>Search Product</button>
                    </div>
                </div>
                <div className="options">
                    { publish && <Publish />} 
                </div>
            </div>
        </>

    )
}

export default MercadoLibre