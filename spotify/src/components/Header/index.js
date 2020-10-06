import React from "react";

import { Container, Search, User } from "./styles";

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>
    <User>
      <img
        alt="Avatar"
        src="https://avatars0.githubusercontent.com/u/61520601?v=4"
      />
      Leonardo Gomes
    </User>
  </Container>
);

export default Header;
