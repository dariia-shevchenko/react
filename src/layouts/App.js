import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import Header from '../modules/Header';
import Loading from '../components/Loading/Loading';
import HomePage from '../page/HomePage';

import routers from '../config/routers';
import AuthContextProvider from '../contexts/AuthContext';

// style
import '../assets/css/normalize.css';
import '../assets/css/App.css';

const AsyncMenuPage = lazy(() =>
  import('../page/MenuPage' /* webpackChunkName: "menu-page" */),
);
const AsyncMenuItemPage = lazy(() =>
  import('../page/MenuItemPage' /* webpackChunkName: "menuitem-page" */),
);
const AsyncOrderHistoryPage = lazy(() =>
  import('../page/OrderHistoryPage' /* webpackChunkName: "order_history-page" */),
);
const AsyncAboutPage = lazy(() =>
  import('../page/AboutPage' /* webpackChunkName: "about-page" */),
);
const AsyncContactPage = lazy(() =>
  import('../page/ContactPage' /* webpackChunkName: "contact-page" */),
);
const AsyncDeliveryPage = lazy(() =>
  import('../page/DeliveryPage' /* webpackChunkName: "delivery-page" */),
);
const AsyncAccountPage = lazy(() =>
  import('../page/AccountPage' /* webpackChunkName: "account-page" */),
);
const AsyncPlannerPage = lazy(() =>
  import('../page/PlannerPage' /* webpackChunkName: "planner-page" */),
);
const NotFound = () => <h1>Page Not Found</h1>;

const App = () => (
  <div className="app">
    <AuthContextProvider>
      <Header />
    </AuthContextProvider>

    <Suspense fallback={Loading}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path={routers.ABOUT} component={AsyncAboutPage} />
        <Route path={routers.CONTACT} component={AsyncContactPage} />
        <Route path={routers.DELIVERY} component={AsyncDeliveryPage} />
        <Route path={routers.ACCOUNT} component={AsyncAccountPage} />
        <Route path={routers.PLANNER} component={AsyncPlannerPage} />
        <Route exact path={routers.MENU.root} component={AsyncMenuPage} />
        <Route path={routers.MENU.item} component={AsyncMenuItemPage} />
        <Route path={routers.ORDER_HISTORY} component={AsyncOrderHistoryPage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </div>
);

export default App;
