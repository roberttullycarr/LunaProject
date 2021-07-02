import styled from "styled-components";
import star from "../../../Assets/SVG/star.svg";

const ReviewContainer = styled.div`
    background: ${props => props.theme.backgroundWhite};
    padding: 15px 0;
    border-bottom: 1px solid ${props => props.theme.DetailsLightGrey};

    h2 {
        font-size: ${props => props.theme.textSizeM};
        font-weight: ${props => props.theme.textWeightRegular};
        color: ${props => props.theme.textDarkGrey};
    }

    h5 {
        font-size: ${props => props.theme.textSizeXS};
        font-weight: ${props => props.theme.textWeightThin};
        color: ${props => props.theme.textProfileBlack};
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

const Review = () => {
    return (
        <ReviewContainer>
            <div>
                <h2>Läderach Chocolatier Suisse</h2>
                <h5>01.01.2018 15:22</h5>
            </div>
            <span>
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
            </span>
            <p>
                This location at the Bahnhofstrasse is quite friendly and easily 
                located across the street from the train station. The people there 
                seem to be quite good and helpful in their service
            </p>
        </ReviewContainer>
    )
}

export default Review;