import { jwt } from "./meli";

interface AppProviderInteface {
    children: JSX.Element;
}

export interface AppContextInterface {
    user: UserInterface | null,
    loading: boolean,
    meli: jwt | null,
    setMeli: (token:jwt) => void
}

export interface UserInterface  {
    uid: string,
    name: string,
    email: string,
}

 