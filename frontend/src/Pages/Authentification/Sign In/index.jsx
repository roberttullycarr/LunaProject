import styled from "styled-components";
import { BaseInput } from "../../../Components/Generic/Fields/index.js";
import { BaseButton } from "../../../Components/Generic/Buttons";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
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
    width: 25%;
    font-size: ${props => props.theme.textSizeM};
    padding: 23px;
`;

const SignIn = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    console.log(email, password);
    const OnEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const OnPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const url = "auth/token/";
        const body = {
            email: email,
            password: password,
        };
        try {
            const response = await Axios.post(url, body);

            if (response.status === 200) {
                setEmail("");
                setPassword("");

                dispatch({
                    type: "SIGNIN",
                    payload: response.data,
                });
                localStorage.setItem("token", response.data.access);
                history.push("/");
            }
        }
        catch(err) {
            if (err.reponse.status === 400) {
                console.log(err.reponse);
            }
        }
    }

    return (
        <>
            <MenuBar />
            <Wrapper onSubmit={onSubmitHandler} >
                <Title>LOGIN</Title>
                <RegistrationInput name="E-Mail address" onChange={OnEmailChange} type="text" placeholder="E-Mail address" />
                <RegistrationInput name="Password" onChange={OnPasswordChange} type="password" placeholder="Password" />
                <BaseButton action="Login" ></BaseButton>
            </Wrapper>
            <Footer />
        </>
    )
}

export default SignIn;
