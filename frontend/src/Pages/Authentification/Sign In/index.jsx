import styled from "styled-components";
import { BaseInput } from "../../../Components/Generic/Fields";
import {BaseButton} from "../../../Components/Generic/Buttons";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
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

const SignIn = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

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
            email,
            password
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
                history.push("/feed");
            }
        }
        catch(err) {
            if (err.reponse.status === 400) {
                console.log(err.reponse);
            }
        }
    }

    return (
        <Wrapper onSubmit={onSubmitHandler} >
            <Title>LOGIN</Title>
            <RegistrationInput name="E-Mail address" onChange={OnEmailChange} type="text" />
            <RegistrationInput name="Password" onChange={OnPasswordChange} type="password" />
            <BaseButton action="Login" ></BaseButton>
        </Wrapper>
    )
}

export default SignIn;
