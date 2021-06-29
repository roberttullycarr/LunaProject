import styled from "styled-components";
import {BaseInput} from "../../../Components/Generic/Fields";
import {BaseButton} from "../../../Components/Generic/Buttons";
import {useHistory} from "react-router-dom";
import { useState } from "react";
import Axios from "../../../Store/Axios";

const Wrapper = styled.form`
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
    font-size: ${props => props.theme.textSizeSecondTitle};
    margin-top: 3%;
    margin-bottom: 4%;
`

const RegistrationInput = styled(BaseInput)`
    width: 20%;
    min-width: 200px;
    font-size: ${props => props.theme.textSizeM};
    padding: 23px;
    margin-bottom: 5%;
`

const SignUp = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");

    const OnEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const url = "auth/registration/";
        const body = {
            email
        };

        try {
            const response = await Axios.post(url, body);

            if (response.status === 200) {
                history.push("/signup/success");
            }
        }
        catch(err) {
            if (err.reponse.status === 400) {
                console.log("This email is taken");
            }
        }
    }

    return (
        <Wrapper onSubmit={onSubmitHandler} >
            <Title>REGISTRATION</Title>
            <RegistrationInput name="E-Mail address" onChange={OnEmailChange} />
            <BaseButton action="Register" ></BaseButton>
        </Wrapper>
    )
}

export default SignUp;

