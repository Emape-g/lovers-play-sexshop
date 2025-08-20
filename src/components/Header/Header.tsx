import { useState, useEffect } from 'react';
import { FaHeart, FaUser, FaShoppingCart, FaBars, FaSearch, FaStore, FaTruck, FaCreditCard, FaBook, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/loversplay-isologotipo-izquierda_1-loversplay-isologotipo-izquierda_1.png.png';
import LoginForm from './../LoginForm/LoginForm'; // Import the new LoginForm component

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false); // New state for the modal

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
        <>
            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <div className="header-top">
                        <div className="header-top-content">
                            <Link to="/" className="logo-link">
                                <img src={logo} alt="Lovers Play" className="logo" />
                            </Link>
                            <div className="search-bar">
                                <input type="text" placeholder="Buscar productos, marcas y más..." />
                                <button className="search-icon" aria-label="Buscar"><FaSearch /></button>
                            </div>
                            <div className="header-icons">
                                <Link to="/favoritos" className="icon-link" aria-label="Favoritos">
                                    <FaHeart />
                                </Link>
                                <div
                                    className="profile-dropdown-container"
                                    onMouseEnter={() => setProfileDropdownOpen(true)}
                                    onMouseLeave={() => setProfileDropdownOpen(false)}
                                >
                                    <Link to="/acceder" className="icon-link" aria-label="Mi cuenta">
                                        <FaUser />
                                    </Link>
                                    <div className={`profile-dropdown-menu ${profileDropdownOpen ? 'active' : ''}`}>
                                        {}
                                        <div className="dropdown-item" onClick={() => { setShowLoginModal(true); setProfileDropdownOpen(false);  }}>Iniciar sesión</div>
                                        <Link to="/registrarse">Registrarse</Link>
                                    </div>
                                </div>
                                <Link to="/carrito" className="icon-link" aria-label="Carrito">
                                    <FaShoppingCart />
                                    <span className="cart-count">2</span>
                                </Link>
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
                                        <Link to={item.link} className="nav-button">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            {showLoginModal && <LoginForm onClose={() => setShowLoginModal(false)} />}
        </>
    );
};

export default Header;



