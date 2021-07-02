import styled from "styled-components";

export const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: calc(100vh - 88px - 71px);
    /* height: 100%; */
    width: 100%;
    margin-top: 71px;
    background-color: ${props => props.theme.backgroundLightGrey};
`