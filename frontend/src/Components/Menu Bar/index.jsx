import styled from 'styled-components'
import logo from "../../Assets/SVG/logo.svg"
import {useHistory, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchUserProfileData} from "../../Store/fetches";

const MBMain = styled.div`
width: 100%;
height: 71px;
display: flex;
justify-content: space-between;
align-items: center;
position: fixed; 
top: 0; 
z-index: 10;
border-bottom: 1px solid ${props => props.theme.DetailsGrey};
background-color: ${props => props.theme.backgroundWhite};
z-index: 2;
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

border-bottom: ${props => props.borderBottom || "none"};
`

const MenuBar = () => {
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUserProfileData)
    }, [])


    const LogHandler = () => {
        if (localStorage.token) {
            console.log('in log handler')
            localStorage.clear();
            history.push('/signin');
        }
        else {
            history.push('/signin');
        }
    }

    const GoToProfile = () => {
        history.push('/user/me');
    }

    return (
     <MBMain>
        <Logo src={logo}/>
         <MBRight>
             <NavButton onClick={() => location.pathname !== "/" ? history.push("/") : null}
                          borderBottom={location.pathname === "/" ? "3px solid #E47D31" : "3px solid transparent"}>Home</NavButton>
             <NavButton onClick={() => !location.pathname.includes("/search") ? history.push("/search/restaurants") : null}
                          borderBottom={location.pathname.includes("/search") ? "3px solid #E47D31" : "3px solid transparent"}>Search</NavButton>
             <NavButton onClick={() => !location.pathname.includes("/me") ? history.push(`/me`) : null}
                          borderBottom={location.pathname.includes("/me") ? "3px solid #E47D31" : "3px solid transparent"}>Profile</NavButton>
             <SignUpButton>SIGN UP</SignUpButton>
             <LoginButton onClick={LogHandler}>{localStorage.token ? "LOG OUT" : "LOG IN"}</LoginButton>
         </MBRight>
     </MBMain>
    )
}

export default MenuBar;