import React, { Suspense } from 'react';
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history"
import Loading from './components/Loading';
import { AppProvider } from './context/AppContext';
import BootstrapProvider from '@bootstrap-styled/provider';
import themes from './themes';
import GlobalStyle from './globalStyle';

const routes = [
  {
    path: "/",
    component: React.lazy(() => import('./pages/Home'))
  },
  {
    path: "/detail/:id",
    component: React.lazy(() => import('./pages/Detail'))
  }
];

function RouteWithSubRoutes(route) {
  return (
    <Route
      exact
      path={route.path}
      render={props => (
        <AppProvider>
          <BootstrapProvider theme={themes}>
            <route.component {...props} routes={route.routes} />
          </BootstrapProvider>
        </AppProvider>
      )}
    />
  );
}

const history = createBrowserHistory()
function App() {

  return (
    <Router history={history}>
      <GlobalStyle />
      <Suspense fallback={<Loading />}>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Suspense>
    </Router>
  );
}

export default App;
