import styled from "styled-components";

export const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    width: 100%;
    position: fixed;
    margin-top: 71px;
    background-color: ${props => props.theme.backgroundLightGrey};
`