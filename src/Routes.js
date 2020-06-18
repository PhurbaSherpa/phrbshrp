import React from "react";
import { Route, Switch } from "react-router-dom";
import {
    Home,
    AboutStockapp,
    AboutCalsTracker,
    AboutEztextbooks,
    Aboutme,
} from "./components";

export default function Routes() {
    return (
        <Switch>
            <Route path="/Stockapp" component={AboutStockapp} />
            <Route path="/CalsTracker" component={AboutCalsTracker} />
            <Route path="/Eztextbooks" component={AboutEztextbooks} />
            <Route path="/Aboutme" component={Aboutme} />
            <Route path="/" component={Home} />
        </Switch>
    );
}
