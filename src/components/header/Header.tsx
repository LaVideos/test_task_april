import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.scss';

const cn = classNames.bind(styles);

const Header = () => {
    return (
        <header className={cn('header')}>
            <nav className={cn('navbar')}>
                    <div className={cn('nav-item')}>
                        <NavLink  to="/" className={cn('nav-link')}>
                            Home
                        </NavLink>
                    </div>
                    <div className={cn('nav-item')}>
                        <NavLink to="/news" className={cn('nav-link')}>
                            News
                        </NavLink>
                    </div>
            </nav>
        </header>
    );
};

export default Header;
