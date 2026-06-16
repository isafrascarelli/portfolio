import { Link, useLocation } from "react-router"
import styles from "./Menu.module.css"
import MenuLink from "../MenuLink/MenuLink"

const Menu = () => {

    return(
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to = "/">
                    Início
                </MenuLink>

                <MenuLink to = "/sobremim">
                    Sobre mim
                </MenuLink>
            </nav>
        </header>
    )
}

export default Menu