import styled from "styled-components"
import UserInfo from "./User";

const Container = styled.div`
    width: 271px;
    height: 400px;
`

const RestaurantName = styled.h3`
    font-size: ${props => props.theme.textSizeM};
    color: ${props => props.theme.orange};
    font-weight: ${props => props.theme.textWeightBold};
`;

const Text = styled.p`
    font-size: ${props => props.theme.textSizeS};
    color: ${props => props.theme.textDarkGrey};
    font-weight: ${props => props.theme.textWeightBold};
`;

const CommentTitle = styled.h3`
    font-size: ${props => props.theme.textSizeM};
    color: ${props => props.theme.textBlack};
    font-weight: ${props => props.theme.textWeightThin};
`;

const SplitButton = styled.button`
border: none;
width: 250px;
height: 32px;
color: #FFFFFF;
background-color: ${(props) => props.theme.DetailsLightGrey};
font-size: ${(props) => props.theme.textSizeDefault};
flex-shrink: 0;
:hover {
    cursor: pointer;
}
`

const LikeButton =  styled(SplitButton)`
border-radius: 28px 0px 0px 28px;
margin-right: 1px;
`;
const CommentButton =  styled(SplitButton)`
border-radius: 0px 28px 28px 0px;
margin-right: 5%;
`;

const Review = () => {
    return (
        <Container>
            <UserInfo></UserInfo>
            <RestaurantName>Colinz Bar</RestaurantName>
            <Text>This is a review containing text.</Text>
            <div>
                <LikeButton></LikeButton>
                <CommentButton></CommentButton>
            </div>
            <CommentTitle></CommentTitle>
            {/* {comments[0] ? : "There is no comment to display."} */}
            {/* {comments[1] ? : null} */}
        </Container>
    )
}

export default Review;