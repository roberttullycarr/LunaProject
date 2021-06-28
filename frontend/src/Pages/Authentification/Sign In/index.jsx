import styled from "styled-components";
import {BaseInput} from "../../../Components/Generic/Fields";
import {BaseButton} from "../../../Components/Generic/Buttons";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.backgroundLightGrey};
`

const Title = styled.h1`
    color: ${props => props.theme.textDarkGrey};
    margin-top: 5%;
    margin-bottom: 7%;
`

const RegistrationInput = styled(BaseInput)`
    width: 30%;
    min-width: 200px;
    font-size: ${props => props.theme.textSizeM};
    padding: 23px;
    margin-bottom: 5%;
`

const SignIn = () => {
    return (
        <Wrapper>
            <Title>REGISTRATION</Title>
            <RegistrationInput name={"E-Mail address"} />
            <BaseButton name="Register" >Register</BaseButton>
        </Wrapper>
    )
}

export default SignIn;
