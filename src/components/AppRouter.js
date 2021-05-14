import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {authRoutes, publicRoutes} from '../route'
import { SHOP_ROUTE } from '../utils/const'

const AppRouter = () =>{
    const isAuth = true
    return (
        <Switch>
            {isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} exact path={path} component={Component}/>
            )}
             {publicRoutes.map(({path, Component}) =>
                <Route key={path} exact path={path} component={Component}/>
            )}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
    )
}

export default AppRouter