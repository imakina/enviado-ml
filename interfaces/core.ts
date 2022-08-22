interface AppProviderInteface {
    children: JSX.Element;
}

// export interface AppContextInterface {
//     user: UserInterface | null,
//     loading: boolean,
//     authorization: AuthorizationInterface | null,
//     setMeli: (token:AuthorizationInterface) => void
// }

export interface UserInterface  {
    uid: string,
    name: string,
    email: string,
}

export interface AuthInterface {
    access_token: string
    expires_in: number
    scope: string
    token_type: string
    user_id: number
}
 