import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { BaseInput } from "../../../Components/Generic/Fields";
import {BaseButton} from "../../../Components/Generic/Buttons";
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

const Grid = styled.div`
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(2, 1fr);
  grid-gap: 30px;
  margin-top: 30px;
  width: 100%;
`;

const Title = styled.h1`
    color: ${props => props.theme.textDarkGrey};
    font-size: ${props => props.theme.textSizeSecondTitle};
    margin-top: 3%;
    margin-bottom: 4%;
`

const RegistrationInput = styled(BaseInput)`
    width: 20%;
    min-width: 260px;
    font-size: ${props => props.theme.textSizeM};
    padding: 23px;
    margin-bottom: 5%;
`

const Verification = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");
    const [password_repeat, setPasswordRepeat] = useState("");
    const [location, setLocation] = useState("");
    const history = useHistory();
    
    const onEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const onUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const onCodeChange = (event) => {
        setCode(event.target.value);
    };

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const onPasswordRepeatChange = (event) => {
        setPasswordRepeat(event.target.value);
    };

    const onLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const url = "auth/registration/validation/";
        const body = {
          email: email,
          username: username,
          code: code,
          password: password,
          password_repeat: password_repeat,
          location: location,
        };
    
        try {
          const resp = await Axios.patch(url, body);
          if (resp.status === 200) {
            history.push("/feed");
          }
        } catch (err) {
          console.log(err.response);
        }
    };

    return (
        <Wrapper onSubmit={onSubmitHandler} >
            <Title>LOGIN</Title>
            <Grid>
              <RegistrationInput name="Email" type="text" onChange={onEmailChange} />
              <RegistrationInput name="Validation code" type="text" onChange={onCodeChange} />
              <RegistrationInput name="Username" type="text" onChange={onUsernameChange} />
              <RegistrationInput name="Location" type="text" onChange={onLocationChange} />
              <RegistrationInput name="Password" type="password" onChange={onPasswordChange} />
              <RegistrationInput name="Password repeat" type="password" onChange={onPasswordRepeatChange} />
            </Grid>
            <BaseButton action="Finish registration" ></BaseButton>
        </Wrapper>
    )
}

export default Verification

