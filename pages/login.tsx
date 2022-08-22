import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useContext, useState } from "react"
import { AppContext } from "../lib/AppContext";

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [log, setLog] = useState("")

    const {user} = useContext(AppContext);

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
                    <h2>Enviado-ML</h2>
                    {
                        user?.email == '' &&
                        <>
                            <input type="text" placeholder="username" onChange={(e) => setUsername(e.currentTarget.value)}></input>
                            <input type="password" placeholder="password" onChange={(e) => setPassword(e.currentTarget.value)}></input>
                            <button onClick={authenticate}>Log In</button>
                        </>
                    }
                    <p className="log">{log}</p>
                    <div className="link"><Link href={'/'}>Home</Link></div>
                </div>
            </div>
        </>
    )
}