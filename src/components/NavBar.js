import React,{useContext} from "react"
import {Context} from "../index"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { NavLink } from "react-router-dom"
import { SHOP_ROUTE } from "../utils/const"
import { Button } from "react-bootstrap"

const NavBar = () =>{
    const {user} = useContext(Context)
    return(
        <Navbar bg="dark" variant="dark">
           <NavLink style={{color: "white"}} to={SHOP_ROUTE}>Shop</NavLink>
           {user.isAuth 
            ?
                <Nav className="ml-auto" style={{color: "white"}}>
                    <Button>Sign in</Button>
                    <Button>Admin menu</Button>
                </Nav>
            :
                <Nav className="ml-auto" style={{color: "white"}}>
                    <Button>Auth</Button>
                </Nav>
            }       
        </Navbar>
    )
}

export default NavBar