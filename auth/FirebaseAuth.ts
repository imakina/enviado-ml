import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./FirebaseConfig"
import { useState } from 'react'

const currentUser:UserInterface = {
    uid : '',
    name: '',
    email: ''
}

export default function useFirebaseAuth() {

    const [user, setUser] = useState<UserInterface>(currentUser);
    const [loading, setLoading] = useState(true);

    const auth = getAuth(app);

    onAuthStateChanged(auth, (user) => {
        setLoading(true);

        if (user) {
            setUser({
                uid: user.uid,
                email: user.email ?? '',
                name: user.displayName ?? ''
            });
            setLoading(false);
        } else {
            setLoading(false);
        }
    });

    return {
        user,
        loading
    };
}