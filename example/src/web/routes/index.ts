

import { Route as PageRoute } from "@sweetlikepete/scotch/lib/components/route";


import HomePageRoute from "./home";
import PageNotFoundRoute from "./pageNotFound";
import XPageRoute from "./x";


export const routes: typeof PageRoute[] = [
    HomePageRoute,
    XPageRoute,
    PageNotFoundRoute
];
