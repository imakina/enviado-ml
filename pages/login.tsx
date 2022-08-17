import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useState } from "react"

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [log, setLog] = useState("")

    function authenticate() {

        setLog("");
        const auth = getAuth();

        signInWithEmailAndPassword(auth, username, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setLog(user.email + " authenticated !!");
            })
            .catch((error) => {
                setLog(error.message);
            });

    }

    return (
        <>
            <div className="login">
                <div className="form">
                    <div className="title">Enviado-ML</div>
                    <input type="text" placeholder="username" onChange={(e) => setUsername(e.currentTarget.value)}></input>
                    <input type="text" placeholder="password" onChange={(e) => setPassword(e.currentTarget.value)}></input>
                    <div className="log">{log}</div>
                    <button onClick={authenticate}>Log In</button>
                    <div className="link"><Link href={'/'}>Home</Link></div>
                </div>
            </div>
        </>
    )
}