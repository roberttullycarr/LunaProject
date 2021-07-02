import styled from "styled-components"
import UserInfo from "./User";
import thumb from '../../Assets/SVG/thumb.svg'
import ReviewTileComment from "./Comment";

const Container = styled.div`
    width: 271px;
    height: 400px;
    border: 1px solid ${props => props.theme.DetailsLightGrey};
    border-radius: 3px;
    background-color: ${props => props.theme.backgroundWhite};
    position: relative;
    display: flex;
    flex-direction: column;
`

export const TopBorderReview = styled.div`
height: 8px;
width: 100%;
position: absolute;
margin-bottom: 5px;
top: 0;
left: 0;
background-color: ${props => props.theme.orange};
border-radius: 3px 3px 0px 0px;
`

export const ReviewBody = styled.div`
display: flex;
flex-direction: column;
padding: 11px;
align-items: flex-start;
`

const RestaurantName = styled.h3`
    font-size: ${props => props.theme.textSizeM};
    color: ${props => props.theme.orange};
    font-weight: ${props => props.theme.textWeightBold};
    margin-bottom: 8px;
    
    :hover {
    cursor: pointer;
    text-decoration: underline;    
}
`;

export const Text = styled.p`
    font-size: ${props => props.theme.textSizeS};
    color: ${props => props.theme.textDarkGrey};
    font-weight: ${props => props.theme.textWeightBold};
    margin-bottom: 22px;
    white-space: wrap;
    overflow: hidden;
    height: 80px;
    position: relative;
    overflow: hidden;
    padding-right: 1rem;
    text-overflow: ellipsis;
`;

const CommentTitle = styled.h3`
    font-size: ${props => props.theme.textSizeM};
    color: ${props => props.theme.textBlack};
    font-weight: ${props => props.theme.textWeightThin};
    margin-bottom: 11px;
`;

const SplitButtonMain = styled.div`
display: flex;
width: 100%;
height auto;
justify-content: center;
margin-bottom: 17px;
`

const LCButton = styled.button`
border: none;
width: 125px;
height: 33px;
color: #FFFFFF;
background-color: rgba(145, 145, 145, 0.6);
font-size: ${(props) => props.theme.textSizeDefault};
flex-shrink: 0;
:hover {
    cursor: pointer;
}
`

const LikesButton =  styled(LCButton)`
border-radius: 16.5px 0px 0px 16.5px;
margin-right: 1px;
display: flex;
align-items: center;
justify-content: space-around;
`
const CommentButton =  styled(LCButton)`
border-radius: 0px 16.5px 16.5px 0px;
`


const Review = ({ data }) => {
    return (
        <Container>
            <TopBorderReview />
            <UserInfo user={data.user}/>
            <ReviewBody>
                <RestaurantName>{data.restaurant_name}</RestaurantName>
                <Text>{data.text}</Text>
                <SplitButtonMain>
                    <LikesButton><img src={thumb}/>{`Likes ${data.amount_of_likes_in_review}`}</LikesButton>
                    <CommentButton>{`Comments ${data.amount_of_comments_in_review}`}</CommentButton>
                </SplitButtonMain>
                <CommentTitle>Latest Comments</CommentTitle>
                {data.two_recent_comments[0] ? <ReviewTileComment author={`${data.two_recent_comments[0].first_name} 
                ${data.two_recent_comments[0].last_name}`} text={data.two_recent_comments[0].text}/> : null}
                {data.two_recent_comments[1] ? <ReviewTileComment author={`${data.two_recent_comments[1].first_name} 
                ${data.two_recent_comments[1].last_name}`} text={data.two_recent_comments[1].text}/> : null}
            </ReviewBody>
        </Container>
    )
}

export default Review;