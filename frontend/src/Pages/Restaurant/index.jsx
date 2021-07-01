import Main from "../../Components/Generic/Main";
import MenuBar from "../../Components/Menu Bar";
import Footer from "../../Components/Footer";
import RestaurantHeader from "../../Components/RestaurantHeader";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchReviewsOfRestaurant, fetchSingleRestaurant} from "../../Store/fetches";
import styled from "styled-components";
import clock from "../../Assets/SVG/clock.svg"
import money from "../../Assets/SVG/money.svg"
import {Button} from "../../Components/Generic/Buttons";
import {BaseInput} from "../../Components/Generic/Fields";
import Review from "../../Components/RestaurantRieview";

const Wrapper = styled.div`
width: 100%;
margin-top: 71px;
min-height: calc(100vh - 88px - 71px);
display: flex;
flex-direction: column;
background-color: ${props => props.theme.backgroundLightGrey};
`

const TopSection = styled.div`
height: 496px;
`

const BottomSection = styled.div`
width: fit-content;
align-self: center;
display: flex;
justify-content: center;
`

const Left = styled.div`
width: 694px;
display: flex;
flex-direction: column;
justify-content: flex-start;
`

const Right = styled.div`
width: 508px;
background-color: ${props => props.theme.RestaurantGrey};
min-height: calc(100vh - 88px - 71px);
`

const InfoField = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`

const InfoFieldTop = styled(InfoField)`
margin-top: 18px;
`

const ButtonField = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`

const Symbol = styled.img`
width: 28px;
margin: 0 25px 0 17px

`

const Text = styled.p`
font-size: ${props => props.theme.textSizeM};
font-weight: ${props => props.theme.textWeightThin};
`

const Line = styled.div`
border: 1px solid ${props => props.theme.DetailsGrey};
margin-top: 14px;
margin-bottom: 11px;
`

const Buttons = styled(Button)`
height: 39px;
font-size: ${props => props.theme.textSizeDefault};
font-weight: ${props => props.theme.textWeightRegular};
margin: 31px 17px 0 16px
`

const FilterDiv = styled.div`
display: flex;
margin: 20px 0 27px 0;
`

const FilterInput = styled(BaseInput)`
width: 510px;
height: 40px;
padding: 11px;
font-size: ${props => props.theme.textSizeDefault};
font-weight: ${props => props.theme.textWeightRegular};
&::placeholder {
    color: ${props => props.theme.textGrey}
}
`

const FilterButton = styled(Buttons)`
height: 40px;
width: 120px;
margin: 0 0 0 20px;
`

const Reviews = styled.div`

`

const Restaurant = () => {
    const dispatch = useDispatch();
    const restaurant = useSelector(state => state.singleRestaurant);
    const reviews = useSelector(state => state.reviewsOfRestaurant);

    useEffect(() => {
        dispatch(fetchSingleRestaurant);
    }, [])

    useEffect(() => {
        dispatch(fetchReviewsOfRestaurant);
    }, [])

    return (
        <Main>
            <MenuBar/>
            <Wrapper>
                <TopSection>
                    <RestaurantHeader data={restaurant}/>
                </TopSection>
                <BottomSection>
                    <Left>
                        <FilterDiv>
                            <FilterInput placeholder='Filter list...'/>
                            <FilterButton>FILTER</FilterButton>
                        </FilterDiv>
                        <Reviews>
                            {reviews.length > 0 ? reviews.map((review) => {
                                return (
                                    <Review data={review}/>
                                );
                            }) : null}
                        </Reviews>
                    </Left>
                    <Right>
                        <InfoFieldTop>
                            <Symbol src={clock}/>
                            <Text>{restaurant['opening_hours']}</Text>
                        </InfoFieldTop>
                        <Line></Line>
                        <InfoField>
                            <Symbol src={money}/>
                            <Text>{restaurant['price_level']}</Text>
                        </InfoField>
                        <ButtonField>
                            <Buttons>WRITE A REVIEW</Buttons>
                            <Buttons>EDIT DATA</Buttons>
                        </ButtonField>
                    </Right>
                </BottomSection>
            </Wrapper>
            <Footer/>
        </Main>
    )
}

export default Restaurant;