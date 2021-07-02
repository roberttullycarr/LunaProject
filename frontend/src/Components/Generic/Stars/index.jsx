import styled from "styled-components"
import Star from "./Star";

const RatingsMain = styled.div`
display: flex;
width 100%;
justify-content: space-between;
height: auto;
`

const StarsMain = styled.div`
height: auto;
display: flex;
justify-content: flex-start;
align-items: center;
`

const RatingCount = styled.p`
font-size: ${props => props.theme.textSizeM};
font-weight: 300;
display: flex;
justify-content: center;
align-items: center;
`


const Stars = ({ amount_reviews, avg_rating }) => {
    return (
        <RatingsMain>
            <StarsMain>
                <Star color={avg_rating >= 1 ? '#F8E71C' : '#FFFFFF'}/>
                <Star color={avg_rating >= 2 ? '#F8E71C' : '#FFFFFF'}/>
                <Star color={avg_rating >= 3 ? '#F8E71C' : '#FFFFFF'}/>
                <Star color={avg_rating >= 4 ? '#F8E71C' : '#FFFFFF'}/>
                <Star color={avg_rating >= 5 ? '#F8E71C' : '#FFFFFF'}/>
            </StarsMain>
            <RatingCount>{amount_reviews}</RatingCount>
        </RatingsMain>
    )
}

export default Stars;
