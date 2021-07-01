import styled from "styled-components"
import UserInfo from "./User";
import like from "../../Assets/SVG/like.svg"

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

const CommentTitle = styled.h3`
    font-size: ${props => props.theme.textSizeM};
    color: ${props => props.theme.textBlack};
    font-weight: ${props => props.theme.textWeightThin};
`;

const ButtonWrapper = styled.div`
position: relative;
display: flex;
width: 100%;
height: 32px;
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
    // const dispatch = useDispatch();
    //
    // useEffect(() => {
    //     dispatch(fetchSingleUser(data.user.id));
    // }, [])
    // const user = useSelector(state => state.singleUser);

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
                <LikeButton><span>Like {data['amount_of_likes_in_review']}</span></LikeButton>
                <CommentButton>Comment {data['amount_of_comments_in_review']}</CommentButton>
                <AllComments>View all comments</AllComments>
            </ButtonWrapper>
            <CommentTitle></CommentTitle>
        </Container>
    )
}

export default Review;