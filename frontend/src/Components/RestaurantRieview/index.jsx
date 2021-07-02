import styled from "styled-components"
import UserInfo from "./User";
import CommentTitle from "./Comment";
import like from "../../Assets/SVG/like.svg"
import Axios from "../../Store/Axios";
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchReviewsOfRestaurant} from "../../Store/fetches";

const Container = styled.div`
    width: 650px;
    min-height: 188px;
    background-color: ${props => props.theme.backgroundWhite};
    margin-bottom: 15px;
`

const Text = styled.p`
    font-size: ${props => props.theme.textSizeS};
    color: ${props => props.theme.textDarkGrey};
    font-weight: ${props => props.theme.textWeightBold};
    min-height: 66px;
    height: auto;
    width: 637px;
    overflow-wrap: break-word;
    margin: 8.5px 0 1px 9px;
`;

const ButtonWrapper = styled.div`
position: relative;
display: flex;
width: 100%;
height: 32px;
margin: 11px 0 11px 0;
img {
    height: 21px;
    margin: 5px 0 0 25px;
    position: absolute;
    z-index: 10;
}
`

const SplitButton = styled.button`
border: none;
height: 32px;
color: ${(props) => props.theme.textWhite};
background-color: ${(props) => props.theme.splitButtonRestColor};
font-size: ${(props) => props.theme.textSizeDefault};
font-weight: ${props => props.theme.textWeightThin};
flex-shrink: 0;
:hover {
    cursor: pointer;
}
position: absolute;
`

const LikeButton =  styled(SplitButton)`
border-radius: 28px 0px 0px 28px;
margin-left: 10px;
margin-right: 1px;
height: 32px;
width: 124px;
span{
    margin-left: 25px;
}
`;

const CommentButton =  styled(SplitButton)`
border-radius: 0px 28px 28px 0px;
width: 122px;
margin-left: 135px;
`;

const Top = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 68px;
border-bottom: 1px solid ${(props) => props.theme.DetailsLightGrey};
`

const Date = styled.p`
align-self: flex-start;
font-size: ${props => props.theme.textSizeS};
font-weight: ${props => props.theme.textWeightThin};
margin-top: 13px;
`

const AllComments = styled.button`
border: none;
color: ${(props) => props.theme.orange};
background-color: ${(props) => props.theme.textWhite};
font-size: ${(props) => props.theme.textSizeDefault};
font-weight: ${props => props.theme.textWeightRegular};
align-self: center;
margin-left: 498px;
:hover {
    cursor: pointer;
}
`

const dateTimeFormatter = (dateTime) => {
    const newDateTime = `${dateTime.substring(8, 10)}.${dateTime.substring(5, 7)}.${dateTime.substring(0, 4)} ${dateTime.substring(11, 16)}`
    return newDateTime
}



const Review = ({ data }) => {
    const dispatch = useDispatch();
    let reviews = useSelector(state => state.reviewsOfRestaurant);

    const toggleLikeReview = async action => {
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        };
        const body = {
        };
        const url = `reviews/like/${data.id}/`;
        if (action === 'like'){
             const response = await Axios.post(url, body, config);
             console.log(response)
        }
        else{
            const response = await Axios.delete(url, config);
            console.log(response)
        }
    };


    const likeHandler = async (event) => {
        // event.preventDefault();
        toggleLikeReview('like');
        const index = reviews.indexOf(data);
        data['likes'].push(data.user.id);
        data['amount_of_likes_in_review'] += 1;
        reviews[index] = data;
        dispatch({type: 'REVIEWSOFRESTAURANT', payload: reviews});
        console.log(reviews);
    };
    const unLikeHandler = async (event) => {
        // event.preventDefault();
        toggleLikeReview();
        // const newData = [...reviews.delete(data)];
        // console.log(reviews.data);
    };

    // console.log(reviews[data])
    return (
        <Container>
            <Top>
                <UserInfo data={data.user}/>
                <p>*****</p>
                <Date>{dateTimeFormatter(data['created'])}</Date>
            </Top>
            <Text>{data.text}</Text>
            <ButtonWrapper>
                <img src={like}/>
                <LikeButton onClick={(data.likes.includes(data.user.id)) ? unLikeHandler: likeHandler}><span>Like {data['amount_of_likes_in_review']}</span></LikeButton>
                <CommentButton>Comment {data['amount_of_comments_in_review']}</CommentButton>
                <AllComments>View all comments</AllComments>
            </ButtonWrapper>
            <CommentTitle data={data.user}/>
        </Container>
    )
}

export default Review;