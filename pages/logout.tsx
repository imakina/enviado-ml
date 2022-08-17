import { auth } from "firebase-admin";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import Link from "next/link";
import { useEffect, useState } from "react"

export default function Login() {

    const [log, setLog] = useState("")

    function authenticate() {

        setLog("");
        const auth = getAuth();

        signOut(auth)
            .then(() => {
                setLog(" Logout ");
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
                        <div>{log}</div>
                        <Link href={'/'}>Volver a EML</Link>
                    </div>
                </div>
            </div>
        </>
    )
}