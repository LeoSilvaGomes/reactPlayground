import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  margin-top: 110px;
  diplay: flex;
  flex-direction: column;
  color: white;
`;

export const Title = styled.h1`
  font-size: 48px;
`;

export const List = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Playlist = styled.a`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 250px;
  text-decoration: none;

  img {
    height: 250px;

    &:hover {
      opacity: 0.4;
    }
  }

  strong {
    font-size: 13px;
    margin-top: 10px;
    color: #fff;
  }

  p {
    line-height: 22px;
    margin-top: 5px;
    font-size: 13px;
    color: #b3b3b3;
  }

  &:first-child {
    margin: 0;
  }
`;
