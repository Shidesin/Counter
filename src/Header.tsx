import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.module.css'


function Header() {
    return (
        <nav className={styles.header_block}>
            <div>
                <span className={styles.header_block_button}>
                    <NavLink to={'/Counter'} activeClassName={styles.activeLink}>Counter</NavLink>
                </span>
                <span className={styles.header_block_button}>
                    <NavLink  to={'/Counter_2/displayCounter'} activeClassName={styles.activeLink}>Counter 2</NavLink>
                </span>
            </div>
        </nav>

    );
}

export default Header;