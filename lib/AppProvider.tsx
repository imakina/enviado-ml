import { createContext, useContext } from "react";
import useFirebaseAuth from "../auth/FirebaseAuth";


const builderContext = (user:UserInterface, loading: boolean) : AppContextInterface => {
  return {
    user : user,
    loading : loading
  }
}

const AppDefaultContext = builderContext({ uid: '', name: '', email: ''}, false);

export const AppContext = createContext<AppContextInterface>(AppDefaultContext);


// Provider in your app

// function EnthusasticGreeting() {
//   const currentUser = useContext(currentUserContext);
//   return <div>HELLO {currentUser.uid.toUpperCase()}!</div>;
// }

// function App() {
//   return (
//     <currentUserContext.Provider value="Anders">
//       <EnthusasticGreeting />
//     </currentUserContext.Provider>
//   );
// }

interface AppProviderInteface {
  children: JSX.Element;
}

export function AppProvider(props: AppProviderInteface) {
  const {user,loading} = useFirebaseAuth();
  return (
    <AppContext.Provider value={builderContext(user, loading)}>
      {props.children}
    </AppContext.Provider>
  );
}
// custom hook to use the authUserContext and access authUser and loading
// export const useAuth = () => useContext(authUserContext);