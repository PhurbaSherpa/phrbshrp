import React from "react";
import { Route, Switch } from "react-router-dom";
import {
    Home,
    AboutStockapp,
    AboutCalsTracker,
    AboutEztextbooks,
    Aboutme,
    AboutVisuo,
    Works,
} from "./components";

export default function Routes() {
    return (
        <Switch>
            <Route path="/Stockapp" component={AboutStockapp} />
            <Route path="/CalsTracker" component={AboutCalsTracker} />
            <Route path="/Eztextbook" component={AboutEztextbooks} />
            <Route path="/Visuo" component={AboutVisuo} />
            <Route path="/Aboutme" component={Aboutme} />
            <Route path="/Works" component={Works} />
            <Route path="/" component={Home} />
        </Switch>
    );
}
