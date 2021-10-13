import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import MovieDetailsPage from "../../pages/MovieDetailsPage";

import { mainRoutes } from "../routes/mainRoutes";
import { MainContainer } from "./MainStyled";

const Main = () => {
  return (
    <MainContainer>
      <Suspense fallback={<h2>.....loading</h2>}>
        <Switch>
          <Route
            path="/movies/:movieId"
            component={MovieDetailsPage}
            exact={false}
          />
          {mainRoutes.map((route) => (
            <Route
              path={route.path}
              component={route.component}
              exact={route.exact}
              key={route.path}
            />
          ))}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </MainContainer>
  );
};

export default Main;
