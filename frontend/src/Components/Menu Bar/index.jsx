import styled from 'styled-components'
import logo from "../../Assets/SVG/logo.svg"

const MBMain = styled.div`
width: 100%;
height: 71px;
display: flex;
justify-content: space-between;
align-items: center;
position: fixed; 
top: 0; 
`

const Logo = styled.img`
margin-left: 2%;
`

const MBRight = styled.div`
display: flex;
height: 100%;
width: 40%;
align-items: center;
justify-content: flex-end;
`

const SLButton = styled.button`
border: none;
width: 100px;
height: 41px;
color: #FFFFFF;
background-color: ${(props) => props.theme.orange};
font-size: ${(props) => props.theme.textSizeDefault};
flex-shrink: 0;
:hover {
    cursor: pointer;
}
`

const SignUpButton =  styled(SLButton)`
border-radius: 20.5px 0px 0px 20.5px;
margin-right: 1px;
`
const LoginButton =  styled(SLButton)`
border-radius: 0px 20.5px 20.5px 0px;
margin-right: 5%;
`

const NavButton = styled.button`
height: 100%;
box-sizing: border-box;
font-size: ${(props) => props.theme.textSizeM};
width: auto;
border: none;
background: none;
border-bottom: 3px solid transparent;
margin-right: 11%;
flex-shrink: 1;

    :hover {
    border-bottom: 3px solid ${(props) => props.theme.orange};
    cursor: pointer;
}
`

const MenuBar = () => {
    return (
     <MBMain>
        <Logo src={logo}/>
         <MBRight>
             <NavButton>Home</NavButton>
             <NavButton>Search</NavButton>
             <NavButton>Profile</NavButton>
             <SignUpButton>SIGN UP</SignUpButton>
             <LoginButton>LOGIN</LoginButton>
         </MBRight>
     </MBMain>
    )
}

export default MenuBar;