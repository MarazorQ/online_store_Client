import Admin from "./pages/Admin"
import Basket from "./pages/Basket"
import Shop from "./pages/Shop"
import Device from "./pages/Device"
import Auth from "./pages/Auth"
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/const"

export const authRoutes = [
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: DEVICE_ROUTE + '/:id',
        Component: Device
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    }
]