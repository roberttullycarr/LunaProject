import Main from "../../Components/Generic/Main";
import MenuBar from "../../Components/Menu Bar";
import Footer from "../../Components/Footer";
import styled from "styled-components";
import RestaurantHeader from "../../Components/RestaurantHeader";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchSingleRestaurant} from "../../Store/fetches";
import {Button} from "../../Components/Generic/Buttons";
import Axios from "../../Store/Axios";
import {useHistory} from "react-router-dom";

const Wrapper = styled.form`
width: 100%;
margin-top: 71px;
min-height: calc(100vh - 88px - 71px);
display: flex;
flex-direction: column;
background-color: ${props => props.theme.backgroundLightGrey};
`

const TopSection = styled.div`
height: 204px;
overflow: hidden;
`

const BottomSection = styled.div`
width: fit-content;
align-self: center;
display: flex;
flex-direction: column;
justify-content: center;
`

const InputField = styled.textarea`
height: 264.5px;
width: 832px;
margin-bottom: 8.5px;
padding: 18px;
border: 1px solid ${props => props.theme.textareaBorder};
border-radius: 3px;
resize: none;
font-size: ${props => props.theme.textSizeM};
font-weight: ${props => props.theme.textWeightRegular};
&::placeholder {
    color: ${props => props.theme.placeholderColor}
}
`

const SubmitButton = styled(Button)`
height: 57px;
color: ${props => props.theme.textBlack};
font-size: ${props => props.theme.textSizeM};
font-weight: ${props => props.theme.textWeightRegular};
margin-top: 6px; 
`

const Bottom = styled.div`
display: flex;
justify-content: space-between;
`
const Top = styled.div`
display: flex;
justify-content: space-between;
height: 44px; // delete when stars and rating added
margin: 57px 0 23px 0;
`

const Required = styled.p`
color: ${props => props.theme.textRed};
font-size: ${props => props.theme.textSizeDefault};
font-weight: ${props => props.theme.textWeightRegular};
`

const RatingText = styled.p`
color: ${props => props.theme.textRating};
font-size: ${props => props.theme.textSizeDefault};
font-weight: ${props => props.theme.textWeightThin};
margin-left: 33px
`

const NewReview = () => {

    const dispatch = useDispatch();
    const restaurant = useSelector(state => state.singleRestaurant);

    useEffect(() => {
        dispatch(fetchSingleRestaurant);
    }, [])

    const placeholderText = "Your review helps others learn about great local businesses. \n" +
        "\n" +
        "Please don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees."

    const [text, setText] = useState("");
    const onTextChange = (event) => {
        setText(event.target.value);
    };
    const history = useHistory();
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        // gets the url-ending from the window object
        const path = window.location.pathname
        // matches the url-ending for a number sequence
        const match = path.match(/(\d+)/)[0]

        const url = `reviews/new/${match}/`;
        const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        };
        const body = {
          text: text,
          rating: 3,
        };

        try {
          const resp = await Axios.post(url, body, config);
        } catch (err) {
          console.log(err.response);
        }

        history.push(`/restaurant/${match}/`)
    };

    return (
        <Main>
            <MenuBar/>
            <Wrapper onSubmit={onSubmitHandler}>
                <TopSection>
                    <RestaurantHeader data={restaurant}/>
                </TopSection>
                <BottomSection>
                    <Top>
                        <RatingText>Select your rating</RatingText>
                    </Top>
                    <InputField placeholder={placeholderText} onChange={onTextChange}/>
                    <Bottom>
                        <Required>This field is required</Required>
                        <SubmitButton type="submit">SUBMIT</SubmitButton>
                    </Bottom>
                </BottomSection>
            </Wrapper>
            <Footer/>
        </Main>
    )
}

export default NewReview;