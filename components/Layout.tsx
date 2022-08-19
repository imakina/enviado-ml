
import Header from "./Header"

interface LayoutInterface {
   children: JSX.Element;
}

const Layout = (prop:LayoutInterface) => {
    return (
        <div className="container">
            <Header />
            <main>
                {prop.children}
            </main>
        </div>
    )
}
export default Layout