import React from 'react';
import { renderWithSSR } from 'meteor/communitypackages:react-router-ssr';

export const App = () => {
  // @ts-ignore
  import { Route, Switch } from 'react-router-dom';
  // @ts-ignore
  import LandingPage from './pages/Landing';

  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
    </Switch>
  );
};

renderWithSSR(<App />);
