import Main from "../../Components/Generic/Main";
import MenuBar from "../../Components/Menu Bar";
import Footer from "../../Components/Footer";
import profilebanner from "../../Assets/PNG/profilebanner.png";
import profile from "../../Assets/PNG/profile.png";
import star from "../../Assets/SVG/star.svg";
import comment from "../../Assets/SVG/comment.svg";
import restaurant from "../../Assets/SVG/restaurant.svg";
import edit from "../../Assets/SVG/edit.svg";
import { BaseButton } from "../../Components/Generic/Buttons";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Review from "../../Components/Profile/Review";
import Restaurant from "../../Components/Profile/Restaurant";
import Comment from "../../Components/Profile/Comment";
import {Wrapper, Banner, LeftColumn, MiddleColumn, RightColumn, 
    Image, LinkTab, Summary, Name, Details, MiddleWrapper, 
    ColumnTitle, ButtonContainer, ChapterTitle, Text} from "./";
import styled from "styled-components";
import { BaseInput } from "../../Components/Generic/Fields";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserComments, fetchUserMe } from "../../Store/fetches";
import Axios from "../../Store/Axios";


const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    h2 {
        font-family: Karla, sans-serif;
        font-size: ${props => props.theme.textSizeM};
        font-weight: ${props => props.theme.textWeightBold};
        color: ${props => props.theme.textDarkGrey};
    }

    h3 {
        font-size: ${props => props.theme.textSizeM};
        font-weight: ${props => props.theme.textWeightBold};
        color: ${props => props.theme.textGrey};
        padding-bottom: 4px;
    }
`;

const TextInput = styled(BaseInput)`
    min-width: 200px;
    width: 100%;
    height: 49px;
    font-size: ${props => props.theme.textSizeStandardInput};
    font-weight: ${props => props.theme.textWeightRegular};
    padding-left: 23px;
`; 


export const UserProfile = () => {
    const [activePage, setActivePage] = useState("reviews");
    const me = useSelector(state => state.me);
    const [userTemplate, setUserTemplate] = useState(me);
    const history = useHistory();
    const dispatch = useDispatch();

    const switchActivePage = (origin) => {
        setActivePage(origin);
    }

    const formatDate = (sourceDate) => {
        const date = new Date(sourceDate);
        const month = date.getMonth();
        const year = date.getFullYear();

        const months = {
            0 : 'January',
            1 : 'February',
            2 : 'March',
            3 : 'April',
            4 : 'May',
            5 : 'June',
            6 : 'July',
            7 : 'August',
            8 : 'September',
            9 : 'October',
            10 : 'November',
            11 : 'December'
        }
        return `${months[month]}, ${year}`;
    }

    const navigateToCreateRestaurant = () => {
        history.push("/create/newrestaurant");
    }

    const OnChangeHandler = (event) => {
        const value = event.target.value;
        const input = event.target.id;
        setUserTemplate({...userTemplate, [input]: value });
    }

    useEffect(() => {
        dispatch(fetchUserMe);
        // setUserTemplate({...userTemplate, [input]: value });
        dispatch(fetchUserComments(me.id));
        setUserTemplate({...userTemplate, me });
        // fillUserTemplate(me);
    }, [])

    /* const fillUserTemplate = async (me) => {
        setUserTemplate({...userTemplate, ['username']: me.username });
        setUserTemplate({...userTemplate, ['first_name']: me.first_name });
        setUserTemplate({...userTemplate, ['last_name']: me.last_name });
        setUserTemplate({...userTemplate, ['email']: me.email });
        setUserTemplate({...userTemplate, ['location']: me.location });
        setUserTemplate({...userTemplate, ['phone']: me.phone });
        setUserTemplate({...userTemplate, ['things_i_love']: me.things_i_love });
        setUserTemplate({...userTemplate, ['description']: me.description });
        console.log(userTemplate);
    } */

    const patchUserMe = async () => {
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        };
        const url = 'me/';
        const data = userTemplate;
        console.log("data", data);
        const response = await Axios.patch(url, data, config);
        console.log("response", response);
        dispatch(fetchUserMe);
    } 


    return (
        <Main>
            <MenuBar/>
        <Banner src={profilebanner}></Banner>
        <Wrapper>
            <LeftColumn>
                <div>
                    <Image src={profile}></Image>
                    <h3>{me.first_name}'s profile</h3>
                    <LinkTab onClick={() => {switchActivePage('reviews');
                                            }} background={activePage === "reviews" ? "rgba(0,0,0,0,0.083)": "#FFF"} >
                        <img src={star} alt="star" />
                        <span>Reviews</span>
                    </LinkTab>
                    <LinkTab onClick={() => switchActivePage('comments')} background={activePage === "comments" ? "rgba(0,0,0,0,0.083)": "#FFF"}>
                        <img src={comment} alt="comment" />
                        <span>Comments</span>
                    </LinkTab>
                    <LinkTab onClick={() => switchActivePage('restaurants')} background={activePage === "restaurants" ? "rgba(0,0,0,0,0.083)": "#FFF"}>
                        <img src={restaurant} alt="restaurant" />
                        <span>Restaurants</span>
                    </LinkTab>
                    <LinkTab onClick={() => switchActivePage('edit')} background={activePage === "edit" ? "rgba(0,0,0,0,0.083)": "#FFF"}>
                        <img src={edit} alt="edit" />
                        <span>Edit Profile</span>
                    </LinkTab>
                </div>
            </LeftColumn>
            <MiddleColumn>
                <Summary>
                    <Name>{me.first_name ? me.first_name : "User"} {me.last_name ? me.last_name : ""}</Name>
                    <Details>{me.location ? me.location : ""}</Details>
                    <Details>6 reviews</Details>
                    <Details>210 comments</Details>
                </Summary>
                {activePage === 'reviews' ? 
                    <MiddleWrapper>
                        <ColumnTitle>REVIEWS</ColumnTitle>
                        <Review />
                    </MiddleWrapper> : null}
                {activePage === 'comments' ?
                    <MiddleWrapper>
                        <ColumnTitle>COMMENTS</ColumnTitle>
                        <Comment />
                    </MiddleWrapper> : null }
                {activePage === 'restaurants' ?
                    <>
                        <MiddleWrapper>
                            <ColumnTitle>RESTAURANTS</ColumnTitle>
                            <Restaurant />
                        </MiddleWrapper>
                        <ButtonContainer>
                            <BaseButton action="Create restaurant" onClick={navigateToCreateRestaurant} />
                        </ButtonContainer>
                    </> : null }
                {activePage === 'edit' ?
                    <MiddleWrapper>
                        <ColumnTitle>EDIT USERPROFILE</ColumnTitle>
                        <InputWrapper>
                            <h3>Username</h3>
                            <TextInput type="text" id="username" onChange={OnChangeHandler} placeholder={me.username} ></TextInput>
                        </InputWrapper>
                        <InputWrapper>
                            <h3>First name</h3>
                            <TextInput type="text" id="first_name" onChange={OnChangeHandler} placeholder={me.first_name} ></TextInput>
                        </InputWrapper>
                        <InputWrapper>
                            <h3>Last name</h3>
                            <TextInput type="text" id="last_name" onChange={OnChangeHandler} placeholder={me.last_name} ></TextInput>
                        </InputWrapper>
                        <InputWrapper>
                            <h3>E-Mail</h3>
                            <TextInput type="text" id="email" onChange={OnChangeHandler} placeholder={me.email} ></TextInput>
                        </InputWrapper>
                        <InputWrapper>
                            <h3>Location</h3>
                            <TextInput type="text" id="location" onChange={OnChangeHandler} placeholder={me.location} ></TextInput>
                        </InputWrapper>
                        <InputWrapper>
                            <h3>Phone</h3>
                            <TextInput type="text" id="phone" onChange={OnChangeHandler} placeholder={me.phone} ></TextInput>
                        </InputWrapper>
                        <InputWrapper>
                            <h3>Things I love</h3>
                            <TextInput type="text" id="things_i_love" onChange={OnChangeHandler} placeholder={me.things_i_love} ></TextInput>
                        </InputWrapper>
                        <InputWrapper>
                            <h3>Description</h3>
                            <TextInput type="text" id="description" onChange={OnChangeHandler} placeholder={me.description} ></TextInput>
                        </InputWrapper>
                        <BaseButton action="Save" onClick={patchUserMe} />
                    </MiddleWrapper> : null }
            </MiddleColumn>
            <RightColumn>
                <ColumnTitle>ABOUT {me.first_name ? me.first_name.toUpperCase() : "USER"}</ColumnTitle>
                <ChapterTitle>Location</ChapterTitle>
                <Text>{me.location ? me.location : ""}</Text>
                <ChapterTitle>Luna member since</ChapterTitle>
                <Text>{me.date_joined ? formatDate(me.date_joined) : "" /* {Intl.DateTimeFormat('de-DE', {month: 'long', year: 'numeric'}).format(me.date_joined)} */}</Text>
                <ChapterTitle>Things I love</ChapterTitle>
                <Text>{me.things_i_love ? me.things_i_love : ""}</Text>
                <ChapterTitle>Description</ChapterTitle>
                <Text>{me.description ? me.description : ""}</Text>
            </RightColumn>
        </Wrapper>
        <Footer/> 
    </Main>
        
    );
}

export default UserProfile;



