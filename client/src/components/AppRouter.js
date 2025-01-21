import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    return (
        <Switch>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
    );
});

export default AppRouter;