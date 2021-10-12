import styled from "styled-components";
export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  .navigationList {
    display: flex;
    align-items: center;
    list-style: none;
  }
  .navigationListItemLink {
    margin: 10px;
    color: #32598b;
    text-decoration: none;
    cursor: pointer;
  }
  .navigationListItemLinkActive {
    color: #884040;
  }
`;
