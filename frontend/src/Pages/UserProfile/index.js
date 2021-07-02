import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: calc(100vh - 88px - 71px);
    margin-top: 71px;
    background-color: transparent;
    position: relative;
    top: -220px;
`;

export const LeftColumn = styled.div`
    width: 20%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    margin-top: 32px;

    div {
        width: 232px;

        h3 {
            font-size: ${props => props.theme.textSizePostName};
            font-weight: ${props => props.theme.textWeightBold};
            color: ${props => props.theme.textDarkGrey};
            padding: 20px 0;
            border-bottom: 1px solid ${props => props.theme.textGrey};
        }
    }
`;

export const MiddleColumn = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-top: 28px;
`;

export const RightColumn = styled.div`
    margin-top: 160px;
    width: 30%;
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-right: 100px;
`;

export const Image = styled.img`
    height:232px;
    width: 232px;
`;

export const Banner = styled.img`
    width: 100%;
    height: 152px;
    margin-top: 71px;
`;

export const LinkTab = styled.div`
    background: ${props => props.background}; /* ${props => props.theme.backgroundWhite}; */
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 5px;
    border-bottom: 1px solid ${props => props.theme.textGrey};
    
    :hover {
        cursor: pointer;
        background-color: ${props => props.theme.backgroundOffGrey};
    }

    img {
        width: 30px;
        height: 30px;
    }

    span {
        padding-left: 15px;
    }
`;

export const Name = styled.h2`
    font-size: ${props => props.theme.textSizeSecondTitle};
    font-weight: ${props => props.theme.textWeightBold};
    color: ${props => props.theme.backgroundWhite};
    padding-bottom: 15px;
`;

export const Details = styled.h4`
    font-size: ${props => props.theme.textSizePostName};
    font-weight: ${props => props.theme.textWeightThin};
    color: ${props => props.theme.backgroundWhite};
    padding-bottom: 5px;
`;

export const ColumnTitle = styled.h2`
    padding: 20px 0;
    font-size: ${props => props.theme.textSizeM};
    font-weight: ${props => props.theme.textWeightBold};
    color: ${props => props.theme.textProfileBlack};
`;

export const ChapterTitle = styled.h3`
    font-size: ${props => props.theme.textSizeM};
    font-weight: ${props => props.theme.textWeightBold};
    color: ${props => props.theme.textProfileBlack};
    padding: 10px 0;
`;

export const Text = styled.h4`
    font-size: ${props => props.theme.textSizeM};
    font-weight: ${props => props.theme.textWeightThin};
    color: ${props => props.theme.textBlack};
`;

export const MiddleWrapper = styled.div`
    background: ${props => props.theme.backgroundWhite};
    margin-top: 3px;
    padding: 0 10px;
`;

export const Summary = styled.div`
    padding: 0 10px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;