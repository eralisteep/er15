import {COUNTRIES_ROUTE,SHOP_ROUTE} from "./utils/consts";
import Shop from "./pages/Welcome";
import CounrtyPage from "./pages/CountryPage";
import Countries from "./pages/Countries";
import MedalPage from "./pages/MedalPage";

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: COUNTRIES_ROUTE + '/:name',
        Component: CounrtyPage
    },
    {
        path: COUNTRIES_ROUTE + '/:name/:medalType' ,
        Component: MedalPage
    },
    {
        path: COUNTRIES_ROUTE,
        Component: Countries
    },
]
