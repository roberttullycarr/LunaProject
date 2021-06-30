import styled from "styled-components";
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

const Text = styled.p`
    font-size: ${props => props.theme.textSizeM};
    color: ${props => props.theme.textDarkGrey};
    flex-wrap: wrap;
    text-align: center;
    max-width: 510px;
`;

const Congratulations = () => {
    return (
        <>
            <MenuBar />
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
            <Footer />
        </>
    )
}

export default Congratulations;
