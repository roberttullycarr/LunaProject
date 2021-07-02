import styled from "styled-components";
import star from "../../../Assets/SVG/star.svg";

const RestaurantContainer = styled.div`
    background: ${props => props.theme.backgroundWhite};
    padding: 15px 0;
    border-bottom: 1px solid ${props => props.theme.DetailsLightGrey};

    h2 {
        font-size: ${props => props.theme.textSizeM};
        font-weight: ${props => props.theme.textWeightRegular};
        color: ${props => props.theme.textDarkGrey};
    }

    div {
        display: flex;
        justify-content: space-between;
    }

    span {
        display: flex;
        padding: 15px 0;

        img {
            width: 30px;
            height: 30px;
        }
    }
    

    p {
        font-size: ${props => props.theme.textSizeDefault};
        font-weight: ${props => props.theme.textWeightThin};
        color: ${props => props.theme.textProfileBlack};
    }
`;

const Restaurant = () => {
    return (
        <RestaurantContainer>
            <div>
                <h2>Laurentio Gelato Store</h2>
            </div>
            <span>
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
            </span>
            <p>
                Lorem ipsum dolor sit amet, et legere populo quodsi sea. 
                Nec quodsi albucius eu, simul soleat accusata te sea. 
                Vix maluisset sententiae et, eam an salutatus consectetuer, 
                ludus partiendo te ius. Vivendum convenire pro in. Cum impedit 
                honestatis eu.
            </p>
        </RestaurantContainer>
    )
}

export default Restaurant;