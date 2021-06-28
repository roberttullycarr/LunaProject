import styled from "styled-components";

export const BaseInput = styled.input`
    color: ${props => props.theme.TextDarkGrey};
    outline: none;
    height: 52px;
    margin-bottom: 15px;
    border: solid 1px ${props => props.theme.DetailsGrey};

    ::placeholder {
        color: ${props => props.theme.TextGrey};
    }
`

const Input = ({type, id, name, onChange}) => {
    const onChangeHandler = (event) => {
        onChange(event);
    };

    return (
        <BaseInput type={type} placeholder={name} id ={id} onChange={onChangeHandler} />
    )
}

export default Input;