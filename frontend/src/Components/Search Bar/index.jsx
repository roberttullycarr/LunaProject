import styled from 'styled-components';
import {BaseInput} from "../Generic/Fields";

const SearchMain = styled.div`
width: 100%;
height: 50px;
margin-top: 71px;
display: flex;
align-items: center;
border-top: 1px solid ${props => props.theme.DetailsGrey};
border-bottom: 1px solid ${props => props.theme.DetailsGrey};
`

const SearchInput = styled(BaseInput)`
width: 80%;
height: 100%;
margin-bottom: 0;
border: none;
border-right: 1px solid ${props => props.theme.DetailsGrey};
padding-left: 30px;

::placeholder {
 color: ${props => props.theme.DetailsGrey};
}
`

const SearchBar = () => {
    return (
        <SearchMain>
            <SearchInput type={'text'} placeholder={'Search'}/>
        </SearchMain>
    )
}

export default SearchBar;