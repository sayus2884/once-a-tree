import styled from "styled-components";

interface Theme {
  imageUrl: string;
}

export const Background = styled.div`
  background: url(${({ imageUrl }: Theme) => imageUrl}) no-repeat center;
  background-size: cover;
  width: 100%;
`;
