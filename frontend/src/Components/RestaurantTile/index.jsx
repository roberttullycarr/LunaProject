import styled from "styled-components"
import restaurant1 from '../../Assets/PNG/restaurant1.png'
import Stars from "../Generic/Stars";
import {useHistory} from "react-router-dom";

const RestaurantTileMain = styled.div`
width: 271px;
height: 410px;
border: 1px solid ${props => props.theme.DetailsLightGrey};
border-radius: 3px;
display: flex;
position: relative;
flex-direction: column;
background-color: ${props => props.theme.backgroundWhite};
`
const TopBorder = styled.div`
height: 8px;
width: 100%;
position: absolute;
top: 0;
left: 0;
background-color: ${props => props.theme.orange};
border-radius: 3px 3px 0px 0px;
`

const RestBody = styled.div`
margin-top: 8px;
width: 100%;
display: flex;
flex-direction: column;
position: relative;
padding: 13px;
`
const RestTitle = styled.p`
width: auto;
font-size: ${props => props.theme.textSizeM};
margin-bottom: 6px;

:hover {
cursor: pointer;
text-decoration: underline;
}
`

const RestAddress = styled.p`
width: 100%;
font-size: ${props => props.theme.textSizeDefault};
margin-bottom: 5px;
`

const RestImg = styled.img`
position: absolute;
bottom: 0px;
width: 100%;
border-radius: 0px 0px 3px 3px;
`

const RestaurantTile = ({ data }) => {
    const history = useHistory();

    return (
        <RestaurantTileMain>
            <TopBorder />
            <RestBody>
                <RestTitle onClick={() => history.push(`/restaurant/${data.id}`)}>{data.name}</RestTitle>
                <RestAddress>{data.street}</RestAddress>
                <Stars/>
            </RestBody>
            <RestImg src={data.image}/>
        </RestaurantTileMain>
    )
}

export default RestaurantTile