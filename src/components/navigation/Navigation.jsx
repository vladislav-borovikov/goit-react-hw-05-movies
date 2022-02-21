import { NavLink } from "react-router-dom";
import styled from "./Navigation.module.css"

 const Navigation = () => {
     return(
            <nav className={styled.navigationBar}>
                <NavLink exact to="/" className={styled.link} activeClassName={styled.activLink}> Home </NavLink>
                <NavLink to="/movies" className={styled.link} activeClassName={styled.activLink}> Movies </NavLink>

            </nav>
     )


}

export default Navigation;