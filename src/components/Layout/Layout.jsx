import { Suspense } from "react";
import { Outlet, Link } from "react-router-dom";
import Loader from '../Loader/Loader.jsx'

const Layout = () => {
    return (
        <div>
            <header>
                <nav>
                    <Link to='/' end>
                    Home
                    </Link>
                    <Link to='/movies'>Movies</Link>
                </nav>
            </header>
            <Suspense fallback={<Loader/>}>
                <Outlet/>
            </Suspense>
        </div>
    )
}

export default Layout