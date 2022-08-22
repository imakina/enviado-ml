
// import { auth } from '../auth/FirebaseConfig';
import { getAuth, signOut } from "firebase/auth";
import Link from "next/link";
import { useEffect, useState } from "react"

export default function Login() {

    const [log, setLog] = useState("")

    function authenticate() {

        setLog("");
        const auth = getAuth();
        //debugger;
        signOut(auth)
            .then((data) => {
                setLog(" Logout Successfull");
            })
            .catch((error) => {
                setLog(error.message);
            });
    }

    useEffect(() => {
      authenticate();
    }, [])

    return (
        <>
            <div className="login">
                <div className="form">
                    <div className="log">
                        <p>{log}</p>
                        <Link href={'/'}>Volver a EML</Link>
                    </div>
                </div>
            </div>
        </>
    )
}