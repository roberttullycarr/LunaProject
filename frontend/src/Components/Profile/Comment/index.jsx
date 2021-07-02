import styled from "styled-components";

const CommentContainer = styled.div`
    background: ${props => props.theme.backgroundWhite};
    padding: 15px 0;
    border-bottom: 1px solid ${props => props.theme.DetailsLightGrey};

    h2 {
        font-size: ${props => props.theme.textSizeM};
        font-weight: ${props => props.theme.textWeightRegular};
        color: ${props => props.theme.textDarkGrey};
        padding-bottom: 15px;
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

    p {
        font-size: ${props => props.theme.textSizeDefault};
        font-weight: ${props => props.theme.textWeightThin};
        color: ${props => props.theme.textProfileBlack};
    }
`;

const Comment = () => {
    return (
        <CommentContainer>
            <div>
                <h2>Review 1</h2>
                <h5>01.01.2018 15:22</h5>
            </div>
            <p>
                This is a very interesting review!
            </p>
        </CommentContainer>
    )
}

export default Comment;