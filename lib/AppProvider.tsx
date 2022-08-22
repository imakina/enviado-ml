import { createContext, useContext, useState } from "react";
import useFirebaseAuth from "../auth/FirebaseAuth";
import { AppContextInterface } from "../interfaces/core";

// const builderContext = (ctx: AppContextInterface) : AppContextInterface => {
//   return {
//     user : ctx.user,
//     loading : ctx.loading,
//     meli: ctx.meli,
//     setMeli: ctx.setMeli
//   }
// }

// // Initial Context
// const AppContextDefault = builderContext({user : null, loading :false, meli: null, setMeli: () => {} });

// export const AppContext = createContext<AppContextInterface>(AppContextDefault);

// export function useContextApp() {
//   return useContext(AppContext);
// }
// interface AppProviderInteface {
//   children: JSX.Element;
// }

// // export function AppProvider(props: AppProviderInteface) {

// //   const {user,loading} = useFirebaseAuth();
// //   const [meli, setMeli]= useState({})
// //   const appContextDefault = builderContext({user:user, loading:loading, meli:meli, setMeli: setMeli});

// //   return (
// //     <AppContext.Provider value={appContextDefault}>
// //       {props.children}
// //     </AppContext.Provider>
// //   );
// // }
// // custom hook to use the authUserContext and access authUser and loading
// // export const useAuth = () => useContext(authUserContext);