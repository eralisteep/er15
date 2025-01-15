import {COUNTRIES_ROUTE, COUNTRY_ROUTE,SHOP_ROUTE} from "./utils/consts";
import Shop from "./pages/Shop";
import CounrtyPage from "./pages/CountryPage";
import Countries from "./pages/Countries";

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: COUNTRIES_ROUTE + '/:id',
        Component: CounrtyPage
    },
    {
        path: COUNTRIES_ROUTE,
        Component: Countries
    },
]
