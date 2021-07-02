import styled from "styled-components"
import star from "../../../Assets/SVG/star.svg"

const StarsMain = styled.div`
width: 100%
height: auto;
display: flex;
justify-content: flex-start;
align-items: center;
`

const Star = styled.img`
`

const Stars = () => {
    return (
        <StarsMain>
            <Star src={star}/>
            <Star src={star}/>
            <Star src={star}/>
            <Star src={star}/>
            <Star src={star}/>
        </StarsMain>
    )
}

export default Stars;
