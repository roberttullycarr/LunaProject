import styled from 'styled-components'

export const BodyTitle = styled.div`
width: auto;
height: auto;
font-size: ${props => props.theme.textSizeSecondTitle};
border-bottom: 3px solid ${props => props.theme.orange};
font-weight: 700;
display: flex;
justify-content: center;
margin-top: 25px;
margin-bottom: 15px;
`