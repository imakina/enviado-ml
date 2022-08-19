interface AppProviderInteface {
    children: JSX.Element;
}

export interface AppContextInterface {
    user: UserInterface | null,
    loading: boolean,
    meli: string | null,
    setMeli: (token:string) => void
}

export interface UserInterface  {
    uid: string,
    name: string,
    email: string,
}

 