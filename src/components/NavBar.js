import React,{useContext} from "react"
import {Context} from "../index"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { NavLink } from "react-router-dom"
import { SHOP_ROUTE } from "../utils/const"
import { Button, Container } from "react-bootstrap"
import {observer} from "mobx-react-lite"

//чтобы mobx мог отслеживать изменения состояний, нужно обернуть компонент в функцию observer
const NavBar = observer(() =>{
    const {user} = useContext(Context)
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: "white"}} to={SHOP_ROUTE}>Shop</NavLink>
                {user.isAuth 
                    ?
                        <Nav className="ml-auto" style={{color: "white"}}>
                            <Button>Sign in</Button>
                            <Button className="ml-2">Admin menu</Button>
                        </Nav>
                    :
                        <Nav className="ml-auto" style={{color: "white"}}>
                            <Button onClick={() => user.setIsAuth(true)}>Auth</Button>
                        </Nav>
                }
            </Container>
        </Navbar>
        
    )
})

export default NavBar