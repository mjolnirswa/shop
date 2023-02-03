import { NavLink, Outlet } from "react-router-dom";
import './layout.css';
import {ReactComponent as ReactLogo} from './Logo.svg';
import {ReactComponent as CardLogo} from './visa-mastercard.svg';


const Layout: React.FC= () => {
    return <>
                <nav>
                    <div className="logo">
                        <ReactLogo className="logo-img"/>
                        <h2 className="logo-text">WOMAZING</h2>
                    </div>
                    <ul className="menu">
                        <li><NavLink to="/" className="link">Главная</NavLink></li>
                        <li><NavLink to="shop" className="link">Магазин</NavLink></li>
                        <li><NavLink to="brand" className="link">O бренде</NavLink></li>
                        <li><NavLink to="contacts" className="link">Контакты</NavLink></li>
                    </ul>
                    <ul className="basketUser">
                        <li><NavLink to="basket" className="link"><i className="gg-shopping-cart"></i></NavLink></li>
                        <li><NavLink to="user/:id" className="link"><i className="gg-user"></i></NavLink></li>
                    </ul>
                </nav>
                
                <div className="container">
                    <Outlet />
                </div>

                <footer>
                    <div className="logo footer-logo">
                        <ReactLogo className="logo-img footer-logo-img"/>
                        <h2 className="logo-text footer-logo-text">WOMAZING</h2>
                        <p>© Bce права защищены
                            <br></br>
                            <a href="#">Политика конфиденциальности</a>
                            <br></br>
                            <a href="#">Публичная оферта</a>
                        </p>
                    </div>
                    <ul className="menu footer-menu">
                        <li><NavLink to="/" className="link">Главная</NavLink></li>
                        <li><NavLink to="shop" className="link">Магазин</NavLink></li>
                        <li><NavLink to="brand" className="link">O бренде</NavLink></li>
                        <li><NavLink to="contacts" className="link">Контакты</NavLink></li>
                    </ul>
                    <div className="inf">
                        <p>hello@womazing.com</p>
                        <CardLogo className="visa"/>
                    </div>
                </footer>
            </>
};

export default Layout;