import styled from "styled-components"

const UserSummary = styled.div`
    display: flex;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const Image = styled.img`
    width: 66px;
    height: 66px;
`

const UserName = styled.h2`
    font-size: ${props => props.theme.textSizeM};
    color: ${props => props.theme.orange};
    font-weight: ${props => props.theme.textWeightBold};
`

const NbReviews = styled.h4`
    font-size: ${props => props.theme.textSizeS};
    color: ${props => props.theme.textDarkGrey};
    font-weight: ${props => props.theme.textWeightBold};
`

const UserInfo = () => {
    return (
        <>
            <UserSummary>
                <Image />
                <div>
                    <UserName />
                    <NbReviews />
                </div>
            </UserSummary>
            
        </>
    )
}

export default UserInfo;