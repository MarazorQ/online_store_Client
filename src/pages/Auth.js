import React from 'react'
import { Container, Form, Button, Row} from 'react-bootstrap'
import Card from "react-bootstrap/Card"
import { NavLink, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/const'

const Auth = () =>{
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location.pathname)

    return (
        <Container 
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: "600px"}} className="p-5">
                <h2 className="m-auto">{isLogin? 'Sign in': 'Sign up' }</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        placeholder="example@gmail.com"
                        className="mt-3"
                    />
                    <Form.Control
                        placeholder="password"
                        className="mt-3"
                        style={{marginBottom: "10px"}}
                    />
                    <Row className="d-flex justify-content-between pl-3 pr-3">
                        {isLogin
                            ?
                                <div>Don't have an account? <NavLink to={REGISTRATION_ROUTE}> Sign Up!</NavLink></div>
                            :
                                <div>Do you have an account? <NavLink to={LOGIN_ROUTE}> Sign In!</NavLink></div>
                        }
                        <Button  className="mt-3 align-self-end">
                            {isLogin? 'Sign in': 'Sign up'}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
}

export default Auth