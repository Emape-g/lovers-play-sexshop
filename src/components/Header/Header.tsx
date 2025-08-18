import { useState, useEffect } from 'react';
import { FaHeart, FaUser, FaShoppingCart, FaBars, FaSearch, FaStore, FaTruck, FaCreditCard, FaBook, FaEnvelope } from 'react-icons/fa';
import './Header.css';
import logo from '../../assets/loversplay-isologotipo-izquierda_1-loversplay-isologotipo-izquierda_1.png.png';
const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const navItems = [
        { name: "Catálogo", link: "/catalogo", icon: FaStore },
        { name: "Envíos", link: "/envios", icon: FaTruck },
        { name: "Medios de Pago", link: "/medios-de-pago", icon: FaCreditCard },
        { name: "Blog", link: "/blog", icon: FaBook },
        { name: "Contacto", link: "/contacto", icon: FaEnvelope }
    ];

     return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="header-top">
                    <div className="header-top-content">
                        <a href="/" className="logo-link">
                            <img src={logo} alt="Lovers Play" className="logo" />
                        </a>
                        <div className="search-bar">
                            <input type="text" placeholder="Buscar productos, marcas y más..." />
                            <button className="search-icon" aria-label="Buscar"><FaSearch /></button>
                        </div>
                        <div className="header-icons">
                            <a href="/favoritos" className="icon-link" aria-label="Favoritos">
                                <FaHeart />
                            </a>
                            <div
                                className="profile-dropdown-container"
                                onMouseEnter={() => setProfileDropdownOpen(true)}
                                onMouseLeave={() => setProfileDropdownOpen(false)}
                            >
                                <a href="/acceder" className="icon-link" aria-label="Mi cuenta">
                                    <FaUser />
                                </a>
                                <div className={`profile-dropdown-menu ${profileDropdownOpen ? 'active' : ''}`}>
                                    <a href="/iniciar-sesion">Iniciar sesión</a>
                                    <a href="/registrarse">Registrarse</a>
                                </div>
                            </div>
                            <a href="/carrito" className="icon-link" aria-label="Carrito">
                                <FaShoppingCart />
                                <span className="cart-count">2</span>
                            </a>
                        </div>
                        <button className="hamburger" onClick={toggleDropdown} aria-label="Menú">
                            <FaBars />
                        </button>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="container">
                    <nav className="nav-links">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="nav-item">
                                    <a href={item.link} className="nav-button">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;


