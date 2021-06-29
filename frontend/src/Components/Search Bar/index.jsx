import styled from 'styled-components';
import {Input} from "../Generic/Fields/index";
import arrow from "../../Assets/SVG/arrow.svg"

const SearchMain = styled.div`
width: 100%;
height: 50px;
margin-top: 71px;
display: flex;
align-items: center;
border-top: 1px solid ${props => props.theme.DetailsGrey};
border-bottom: 1px solid ${props => props.theme.DetailsGrey};
`

const SearchInput = styled(Input)`
width: 80%;
height: 100%;
margin-bottom: 0;
padding: 0px 3%;
border: none;
border-right: 1px solid ${props => props.theme.DetailsGrey};


::placeholder {
 color: ${props => props.theme.DetailsGrey};
}
`

const CategoryForm = styled.form`
width: 20%;
height: 100%;
`
const CategorySelect = styled.select`
width: 100%;
height: 100%;
border: none;
background: none;
padding: 0px 10%;
webkit-appearance: none;
moz-appearance: none;
appearance: none;
background-image: url(${arrow});
background-repeat: no-repeat;
background-position-x: 90%;
background-position-y: 50%;
color: ${props => props.theme.DetailsGrey};


    :focus {
    outline: none;
    }
`

const SearchBar = () => {


    return (
        <SearchMain>
            <SearchInput type={'text'} placeholder={'Search'}/>
            <CategoryForm>
                <CategorySelect id="category" name="category">
                    <option value="Select a Category..." selected>Select a Category...</option>
                    <option value="Indian">Indian</option>
                    <option value="asian">Asian</option>
                    <option value="Belgian" selected>Belgian</option>
                    <option value="French">French</option>
                </CategorySelect>
            </CategoryForm>
        </SearchMain>
    )
}

export default SearchBar;