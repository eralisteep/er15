import {COUNTRIES_ROUTE,DISCIPLINES_ROUTE,SHOP_ROUTE} from "./utils/consts";
import Shop from "./pages/Welcome";
import CounrtyPage from "./pages/CountryPage";
import Countries from "./pages/Countries";
import MedalPage from "./pages/MedalPage";
import Disciplines from "./pages/Disciplines";
import DisciplinePage from "./pages/DisciplinePage";
import DesciplineCountry from "./pages/DisciplineCountry";


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
    {
        path: DISCIPLINES_ROUTE,
        Component: Disciplines
    },
    {
        path: DISCIPLINES_ROUTE + '/:name',
        Component: DisciplinePage
    },
    {
        path: DISCIPLINES_ROUTE + '/:disciplineName/:countryName',
        Component: DesciplineCountry
    },
]