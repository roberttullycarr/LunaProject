import styled from "styled-components";

const Main = styled.div`
  display: flex;
  height: auto;
  // min-height: 100vh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.backgroundLightGrey};
`;

export default Main;

export const Body = styled.div`
min-height: 50%;
`
