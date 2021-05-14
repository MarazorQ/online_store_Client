import React, { useContext } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {authRoutes, publicRoutes} from '../route'
import { SHOP_ROUTE } from '../utils/const'
import {Context} from '../index'

const AppRouter = () =>{
    const {user} = useContext(Context)
    console.log(user)
    return (
        <Switch>
            {user.isAuth && authRoutes.map(({path, Component}) =>
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