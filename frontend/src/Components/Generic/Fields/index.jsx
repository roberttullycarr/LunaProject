import styled from "styled-components";

export const Input = styled.input`
    color: ${props => props.theme.TextDarkGrey};
    outline: none;
    height: 52px;
    margin-bottom: 15px;
    border: solid 1px ${props => props.theme.DetailsGrey};

    ::placeholder {
        color: ${props => props.theme.TextGrey};
    }
`

export const BaseInput = ({type, id, name, onChange}) => {
    const onChangeHandler = (event) => {
        onChange(event);
    };

    return (
        <Input type={type} placeholder={name} id={id} onChange={onChangeHandler} />
    )
}