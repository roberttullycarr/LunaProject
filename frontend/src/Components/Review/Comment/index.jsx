import styled from "styled-components"

const RTCMain = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
align-items: flex-start;
margin-bottom: 10px;
`

const CommentUser = styled.p`
font-size: ${props => props.theme.textSizeS};
color: ${props => props.theme.orange};
font-weight: 700;
margin-bottom: 2px;
`
const CommentText = styled.p`
font-size: ${props => props.theme.textSizeS};
font-weight: 300;
`

const ReviewTileComment = ({ author, text }) => {
    return (
        <RTCMain>
            <CommentUser>{author}</CommentUser>
            <CommentText>{text}</CommentText>
        </RTCMain>
    )
}

export default ReviewTileComment;