import styled from 'styled-components'
import {useSelector} from "react-redux";

const Wrapper = styled.div`
position: relative;
`

const RestaurantInfo = styled.div`
position: absolute;
z-index: 2;
height: 171px;
margin-left: 130px;
margin-top: 33px;
color: ${props => props.theme.textWhite};
`

const Name = styled.h1`
font-size: ${props => props.theme.textSizeL};
font-weight: ${props => props.theme.textWeightBold};
`

const Category = styled.h2`
margin-top: 13px;
font-size: ${props => props.theme.textSizeSecondTitle};
font-weight: ${props => props.theme.textWeightThin};
`

const Background = styled.img`
position: absolute;
z-index: 1;
height: 204px;
width: 100%;
background-color: black;
opacity: 50%;
display: flex;
justify-content: center;
`

const RestaurantPicture = styled.img`
position: absolute;
z-index: 0;
width: 100%;
height: 496px;
object-fit: cover;
object-position: center top;
`

const Rating = styled.div`
display: flex;
margin-top: 14px;
`

const Stars = styled.div`

`

const ReviewsAmount = styled.p`
margin-left: 30px;
font-size: ${props => props.theme.textSizeM};
font-weight: ${props => props.theme.textWeightThin};
`

const RestaurantHeader = ({ data }) => {

    return (
        <Wrapper>
            <Background/>
            <RestaurantInfo>
                <Name>
                    {data.name}
                </Name>
                <Category>
                    {data.category}
                </Category>
                <Rating>
                    <Stars>*****</Stars>
                    <ReviewsAmount>{data['amount_of_reviews_in_restaurant']} reviews</ReviewsAmount>
                </Rating>
            </RestaurantInfo>
            <RestaurantPicture src={data.image}/>
            <p></p>
        </Wrapper>
    )
}

export default RestaurantHeader;