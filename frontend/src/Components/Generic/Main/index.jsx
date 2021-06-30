import styled from "styled-components";

const Main = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.backgroundLightGrey};
`;

export default Main;
