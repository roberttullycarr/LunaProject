import styled from "styled-components"

const UserSummary = styled.div`
display: flex;
align-items: center;
div {
     display: flex;
     flex-direction: column;
     margin-left: 7px
}
`

const Image = styled.img`
width: 66px;
height: 67px;
object-fit: cover;
object-position: center center;
`

const Name = styled.h1`
font-size: ${props => props.theme.textSizeM};
color: ${props => props.theme.orange};
font-weight: ${props => props.theme.textWeightBold};
`

const Reviews = styled.p`
font-size: ${props => props.theme.textSizeS};
font-weight: ${props => props.theme.textWeightBold};
margin-top: 5px;
`

const UserInfo = ({ data }) => {
    return (
        <UserSummary>
            <Image src={data['profile_picture']}/>
            <div>
                <Name>{data['first_name']} {data['last_name'][0]}.</Name>
                <Reviews>{data['total_user_reviews']} Reviews in total</Reviews>
            </div>
        </UserSummary>
    )
}

export default UserInfo;