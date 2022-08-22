import { getAuth, onAuthStateChanged, User } from "firebase/auth";
// import { app } from "./FirebaseConfig"
import { useState } from 'react'
import { UserInterface } from "../interfaces/core";

export default function useFirebaseAuth() {

    // const currentUser:UserInterface = { uid : '', name: '', email: '' }
    
    // const [user, setUser] = useState<UserInterface>(currentUser);
    // const [loading, setLoading] = useState(true);

    // const auth = getAuth(app);

    // onAuthStateChanged(auth, (_user) => {
    //     //setLoading(true);
    //     debugger;
    //     if (_user)
    //         if (_user.uid !== user.uid) {
    //             console.log('updating user');
    //             setUser({
    //                 uid: _user.uid,
    //                 email: _user.email ?? '',
    //                 name: _user.displayName ?? ''
    //             });
    //         }

    // });

    // return {
    //     user,
    //     loading
    // };
}