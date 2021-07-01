import styled from "styled-components"

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
    width: 66px;
    height: 66px;
    object-fit: cover;
`

const UserName = styled.h2`
    font-size: ${props => props.theme.textSizeM};
    color: ${props => props.theme.orange};
    font-weight: ${props => props.theme.textWeightBold};
    margin-left: 5px;
`

const NbReviews = styled.h4`
    font-size: ${props => props.theme.textSizeS};
    color: ${props => props.theme.textDarkGrey};
    font-weight: ${props => props.theme.textWeightBold};
    margin-left: 6px;
`

const UserInfo = ({ user }) => {
    return (
        <>
            <UserSummary>
                <Image src={user.profile_picture}/>
                <div>
                    <UserName>{`${user.first_name} ${user.last_name}`}</UserName>
                    <NbReviews>6 reviews in total</NbReviews>
                </div>
            </UserSummary>
            
        </>
    )
}

export default UserInfo;