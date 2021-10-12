import React from "react";
import { NavLink } from "react-router-dom";
// import { mainRoutes } from "../routes/mainRoutes";
import { NavigationContainer } from "./NavigationStyled";

const Navigation = ({ routes, match = "" }) => {
  return (
    <NavigationContainer>
      <ul className="navigationList">
        {routes.map((route) => (
          <li key={route.path}>
            <NavLink
              to={match + route.path}
              className="navigationListItemLink"
              activeClassName="navigationListItemLinkActive"
              exact={route.exact}
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
