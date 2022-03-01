import styled from "styled-components";

interface Theme {
  iamgeUrl: string;
}

export const Background = styled.div`
  background: url(${({ iamgeUrl }: Theme) => iamgeUrl}) no-repeat center;
  background-size: cover;
  width: 100%;
`;
