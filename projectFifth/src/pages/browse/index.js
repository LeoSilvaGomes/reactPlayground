import React from "react";

import { Container, Title, List, Playlist } from "./styles";

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlist/1">
        <img
          src="https://i.pinimg.com/originals/b4/75/00/b4750046d94fed05d00dd849aa5f0ab7.jpg"
          alt="Cover"
        />
        <strong>Pop da diva</strong>
        <p>Relaxe enquanto você programa ouvindo as melhores do pop mundial</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
