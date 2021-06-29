import styled from "styled-components"

const RestaurantTileMain = styled.div`
width: 271px;
height: 410px;
border: 1px solid ${props => props.theme.DetailsLightGrey};
border-radius: 3px;
display: flex;
position: relative;
flex-direction: column;
`
const TopBorder = styled.div`
height: 8px;
width: 100%;
position: absolute;
top: 0;
left: 0;
background-color: ${props => props.theme.orange}
`

const RestBody = styled.div`
margin-top: 8px;
width: 100%;
display: flex;
flex-direction: column;
`
const RestTitle = styled.p`
width: 100%;
margin-top: 11px;
padding-left: 13px;
font-size: ${props => props.theme.textSizeM};
`

const RestAddress = styled.p`
width: 100%;
margin-top: 6px;
padding-left: 13px;
font-size: ${props => props.theme.textSizeDefault};
`

const RestImg = styled.img`

`

const RestaurantTile = () => {
    return (
        <RestaurantTileMain>
            <TopBorder />
            <RestBody>
                <RestTitle>Guido's Pizza</RestTitle>
                <RestAddress>Rodenberg 19 Tessenderlo</RestAddress>
                <RestImg />
            </RestBody>
        </RestaurantTileMain>
    )
}

export default RestaurantTile