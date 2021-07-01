import styled from 'styled-components'
import {ReviewBody, Text, TopBorderReview} from "../Review";
import UserInfo from "../Review/User";

const UTMain = styled.div`
width: 271px;
height: 192px;
display: flex;
flex-direction: column;
border: 1px solid ${props => props.theme.DetailsLightGrey};
border-radius: 3px;
background-color: ${props => props.theme.backgroundWhite};
position: relative;
`
const UserBody = styled(ReviewBody)`
`

const UserTile = ({ data }) => {
    return (
        <UTMain>
            <TopBorderReview/>
            <UserInfo user={data}/>
            <UserBody>
                <Text>{data.description}</Text>
            </UserBody>
        </UTMain>
    )
}

export default UserTile;
