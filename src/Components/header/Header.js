import React from "react";
import Navigation from "../navigation/Navigation";
import { HeaderContainer } from "./HeaderStyled";
import { mainRoutes } from "../routes/mainRoutes";
const Header = () => {
  return (
    <HeaderContainer>
      <Navigation routes={mainRoutes} />
    </HeaderContainer>
  );
};

export default Header;
