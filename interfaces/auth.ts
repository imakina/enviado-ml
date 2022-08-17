interface AppContextInterface {
    user:UserInterface,
    loading: boolean
}

interface UserInterface  {
    uid: string,
    name: string,
    email: string,
}