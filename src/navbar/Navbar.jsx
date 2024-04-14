import styles from "./Navbar.module.css";

function Navbar() {

    return (
        <div className={styles.container}>
            <a href="" className={styles.navbarTitle}>Void's World</a>
            <nav className={styles.linkContainer}>
                <a href="" className={styles.navlink}>About Me</a>
                <a href="" className={styles.navlink}>Devlogs</a>
                <a href="" className={styles.navlink}>Contact</a>
            </nav>
        </div>

    );

}

export default Navbar;