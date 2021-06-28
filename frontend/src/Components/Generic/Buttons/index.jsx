import styled from "styled-components";

export const BaseButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    width: 200px;
    border-radius: 28px;
    border: none;
    color: ${(props) => props.theme.backgroundWhite};
    font-size: ${(props) => props.theme.textSizeM};
    background-color: ${(props) => props.theme.orange};
`

export const Button = ({action}) => {
    return (
        <BaseButton name={action}>
            {action}
        </BaseButton>
    )
}