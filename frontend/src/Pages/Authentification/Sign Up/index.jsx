import styled from "styled-components";
import { BaseInput } from "../../../Components/Generic/Fields/index.js";
import { BaseButton } from "../../../Components/Generic/Buttons";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Axios from "../../../Store/Axios";
import { Wrapper } from "../../../Components/Generic/PageWrapper";
import MenuBar from "../../../Components/Menu Bar";
import Footer from "../../../Components/Footer";

const Title = styled.h1`
    color: ${props => props.theme.textDarkGrey};
    font-size: ${props => props.theme.textSizeSecondTitle};
    margin-top: 3%;
    margin-bottom: 4%;
    padding-bottom: 15px;
    border-bottom: solid 3px ${props => props.theme.orange};
`;

export const RegistrationInput = styled(BaseInput)`
    min-width: 200px;
    width: 20%;
    font-size: ${props => props.theme.textSizeM};
    padding: 23px;
`;

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
        <>
            <MenuBar />
            <Wrapper onSubmit={onSubmitHandler} >
                <Title>REGISTRATION</Title>
                <RegistrationInput name="E-Mail address" onChange={OnEmailChange} placeholder="E-Mail address" />
                <BaseButton action="Register" ></BaseButton>
            </Wrapper>
            <Footer />
        </>
    )
}

export default SignUp;

