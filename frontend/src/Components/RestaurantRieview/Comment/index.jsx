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

const UserInfo = ({ data }) => {
    return (
        <UserSummary>
        </UserSummary>
    )
}

export default UserInfo;