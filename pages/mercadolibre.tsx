
import { useRouter } from "next/router";
import { useContext,  useState } from "react";
import { parseGrant } from "../helper/Helpers";
import { AppContext } from "../lib/AppContext";

import Grant from "../components/Grant";
import Profile from "../components/Profile";
import Orders from "../components/Orders";
import Publish from "../components/Publish";
import Token from "../components/Token";
import Item from "../components/Item";


const MercadoLibre = () => {

    enum OPTIONS {
        none,
        profile,
        orders,
        publish,
        item
    }

    const [option, setOption] = useState(OPTIONS.none)
    const [item, setItem] = useState('')

    const {authz} = useContext(AppContext);

    const router = useRouter()
    const { code } = router.query
    const grant = parseGrant(code);

    console.log('mercadolibre grant=' + grant);

    const selectItem = (id:string) => {
        console.log('item selected='+id)
        setItem(id);
        setOption(OPTIONS.item)
    }
    
    return (
        <>
            <div className="mercadolibre">

                <div className="menu">
                <h2>MercadoLibre Envios </h2>
                    <div className="form">
                        <h3>Autenticacion</h3>
                        <Grant grant={grant} getGrant={()=>{}} />
                        <Token grant={grant} />
                    </div>
                    <div className="form second">
                        <h3>Operations </h3>
                        <button onClick={() => setOption(OPTIONS.profile)}>Profile</button>
                        <button onClick={() => setOption(OPTIONS.orders)}>Orders</button>
                        <button onClick={() => setOption(OPTIONS.publish)}>Publish</button>
                    </div>
                </div>
                <div className="options">
                { 
                    (authz?.access_token !== '') &&
                        <>
                            {option == OPTIONS.publish && <Publish /> }
                            {option == OPTIONS.orders && <Orders select={selectItem} />}
                            {option == OPTIONS.profile && <Profile />}
                            {option == OPTIONS.item && <Item item_id={item}/>}
                        </>  
                }
                </div>

            </div>
        </>

    )
}

export default MercadoLibre