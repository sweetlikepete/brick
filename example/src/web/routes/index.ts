

import { Route as PageRoute } from "@sweetlikepete/scotch";


import HomePageRoute from "./home";
import PageNotFoundRoute from "./pageNotFound";
import XPageRoute from "./x";


export const routes: PageRoute[] = [
    new HomePageRoute(),
    new XPageRoute(),
    new PageNotFoundRoute()
];
