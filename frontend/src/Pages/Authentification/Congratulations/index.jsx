import styled from "styled-components";

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

const Text = styled.p`
    font-size: ${props => props.theme.textSizeM};
    color: ${props => props.theme.textDarkGrey};
    flex-wrap: wrap;
    text-align: center;
    max-width: 510px;
`

const Congratulations = () => {
    return (
        <Wrapper>
            <Title>REGISTRATION</Title>
            <Text>Thanks for your registration. <br />
                Our hard working mokeys are preparing a digital message 
                called E-Mail that will be sent to you soon. 
                Since monkeys aren't good in writing, 
                the message could end up in your junk folder.
                Our apologies for any inconvenience.
            </Text>
        </Wrapper>
    )
}

export default Congratulations;
