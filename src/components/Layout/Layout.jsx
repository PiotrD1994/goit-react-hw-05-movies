import { Suspense } from "react";
import { Outlet, Link } from "react-router-dom";
import Loader from '../Loader/Loader.jsx';
import css from './Layout.module.css'

const Layout = () => {
    return (
        <div className={css.container}>
            <header className={css.header}>
                <nav className={css.nav}>
                    <Link to='/' >Home</Link>{' '}
                    <Link to='/movies'>Movies</Link>
                </nav>
            </header>
            <Suspense fallback={<Loader/>}>
                <Outlet/>
            </Suspense>
        </div>
    );
}


export default Layout;