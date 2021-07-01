import styled from "styled-components"
import default_avatar from '../../../Assets/PNG/avatar_square_grey_512dp.png'
import {useHistory} from "react-router-dom";

const UserSummary = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
    border-bottom: 1px solid ${props => props.theme.DetailsGrey};

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const Image = styled.img`
    width: 26%;
    height: 66px;
    object-fit: cover;
`

const UserItems = styled.div`
margin-left 6px;
`

const UserName = styled.button`
    background: none;
    border: none;
    font-size: ${props => props.theme.textSizeM};
    color: ${props => props.theme.orange};
    font-weight: ${props => props.theme.textWeightBold};
    border-bottom: 1px solid transparent;
    
    :hover {
    cursor: pointer;
    border-bottom: 1px solid ${props => props.theme.orange};
    }
`

const NbReviews = styled.p`
    display: flex;
    justify-content: flex-start;
    font-size: ${props => props.theme.textSizeS};
    color: ${props => props.theme.textDarkGrey};
    font-weight: ${props => props.theme.textWeightBold};
`

const UserInfo = ({ user }) => {
    const amount_reviews = user.total_user_reviews;
    const history = useHistory();
    return (
        <>
            <UserSummary>
                <Image src={user.profile_picture  === null ? default_avatar : user.profile_picture}/>
                <UserItems>
                    <UserName onClick={() => history.push(`/user/${user.id}`)}>{`${user.first_name} ${user.last_name}`}</UserName>
                    <NbReviews>{`${amount_reviews} ${amount_reviews > 1 || amount_reviews === 0 ? 
                        'reviews' : 'review'} in total`}</NbReviews>
                </UserItems>
            </UserSummary>
            
        </>
    )
}

export default UserInfo;