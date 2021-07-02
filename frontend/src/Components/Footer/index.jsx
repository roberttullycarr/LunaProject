import styled from 'styled-components'
import facebook from "../../Assets/SVG/facebook.svg"
import twitter from "../../Assets/SVG/twitter.svg"
import googleplus from "../../Assets/SVG/googleplus.svg"
import instagram from "../../Assets/SVG/instagram.svg"
import { v4 as uuidv4 } from 'uuid';


const FooterMain = styled.div`
width: 100%;
height: 88px;
// height: 88px;
// max-height: 88px;
background-color: #FFFFFF;
`

const FooterTop = styled.div`
border-top: 1px solid ${props => props.theme.DetailsGrey};
width: 100%;
height: 52px;
display: flex;
padding: 0px 30px;
justify-content: space-between;
`
const FooterBottom = styled.div`
width: 100%;
height: 36px;
display: flex;
border-top: 1px solid ${props => props.theme.DetailsGrey};
padding: 0px 30px;
align-items: center;
`

const BaseFooterBtn = styled.button`
height: 100%;
border: none;
background: none;
font-size: ${props => props.theme.textSizeM};
color: ${props => props.theme.textGrey};

    :hover {
    cursor: pointer;
}
`

const NavSection = styled.div`
display: flex;
align-items: center;
width: 50%;
`

const FooterNav = styled(BaseFooterBtn)`
margin-right: 10%;
`

const PlatformSection = styled.div`
height: 100%;
display: flex;
width: 18%;
align-items: center;
justify-content: flex-end;
`

const PlatformBtn = styled(BaseFooterBtn)`
display: flex;
align-items: center;
margin-left: 8%;
`

const Copyright = styled.p`
font-size: ${props => props.theme.textSizeXS};
color: ${props => props.theme.textGrey};
`

const Footer = () => {
    return (
    <FooterMain>
        <FooterTop>
            <NavSection>
                <FooterNav>About</FooterNav>
                <FooterNav>Press</FooterNav>
                <FooterNav>Blog</FooterNav>
                <FooterNav>iOS</FooterNav>
                <FooterNav>Android</FooterNav>
            </NavSection>
            <PlatformSection>
                <PlatformBtn><img key={uuidv4()} alt={'facebook icon'} src={facebook}/></PlatformBtn>
                <PlatformBtn><img key={uuidv4()} alt={'twitter icon'} src={twitter}/></PlatformBtn>
                <PlatformBtn><img key={uuidv4()} alt={'Google Plus icon'} src={googleplus}/></PlatformBtn>
                <PlatformBtn><img key={uuidv4()} alt={'Instagram icon'} src={instagram}/></PlatformBtn>
            </PlatformSection>
        </FooterTop>
        <FooterBottom>
            <Copyright>© Copyright Luna 2018</Copyright>
        </FooterBottom>
    </FooterMain>
    )
}

export default Footer;