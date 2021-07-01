import Main from "../../Components/Generic/Main";
import MenuBar from "../../Components/Menu Bar";
import Footer from "../../Components/Footer";
import RestaurantHeader from "../../Components/RestaurantHeader";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchSingleRestaurant} from "../../Store/fetches";
import styled from "styled-components";
import clock from "../../Assets/SVG/clock.svg"
import money from "../../Assets/SVG/money.svg"
import {Button} from "../../Components/Generic/Buttons";

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
`

const Right = styled.div`
margin-top: 18px;
width: 508px;
background-color: ${props => props.theme.RestaurantGrey};
min-height: calc(100vh - 88px - 71px);
`

const InfoField = styled.div`
display: flex;
flex-direction: row;
align-items: center;
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

const Restaurant = () => {
    const dispatch = useDispatch();
    const restaurant = useSelector(state => state.singleRestaurant);

    useEffect(() => {
        dispatch(fetchSingleRestaurant);
    }, [])

    console.log(restaurant)

    return (
        <Main>
            <MenuBar/>
            <Wrapper>
                <TopSection>
                    <RestaurantHeader data={restaurant}/>
                </TopSection>
                <BottomSection>
                    <Left>
                        <p>left</p>
                    </Left>
                    <Right>
                        <InfoField>
                            <Symbol src={clock}/>
                            <Text>{restaurant.opening_hours}</Text>
                        </InfoField>
                        <Line></Line>
                        <InfoField>
                            <Symbol src={money}/>
                            <Text>{restaurant.price_level}</Text>
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