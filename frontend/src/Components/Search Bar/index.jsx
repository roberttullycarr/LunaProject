import styled from 'styled-components';
import {BaseInput} from "../Generic/Fields/index";
import arrow from "../../Assets/SVG/arrow.svg"
import {useHistory, useLocation} from "react-router-dom";
import {useState} from "react";
import Axios from "../../Store/Axios";
import {useDispatch} from "react-redux";

const SearchMain = styled.div`
width: 100%;
height: 50px;
margin-top: 71px;
display: flex;
align-items: center;
// border-top: 1px solid ${props => props.theme.DetailsGrey};
border-bottom: 1px solid ${props => props.theme.DetailsGrey};
background-color: ${props => props.theme.backgroundWhite};
`

const SearchInput = styled(BaseInput)`
width: 80%;
height: 100%;
margin-bottom: 0;
padding: 0px 3%;
border: none;


::placeholder {
 color: ${props => props.theme.DetailsGrey};
}
`

const CategoryForm = styled.form`
width: 100%;
height: 100%;
display: flex;
`
const CategorySelect = styled.select`
width: 20%;
height: 100%;
border: none;
background: none;
padding: 0% 1%;
webkit-appearance: none;
moz-appearance: none;
appearance: none;
background-image: url(${arrow});
background-repeat: no-repeat;
background-position-x: 90%;
background-position-y: 50%;
border-left: 1px solid ${props => props.theme.DetailsGrey};
color: ${props => props.theme.DetailsGrey};


    :focus {
    outline: none;
    }
    
display: ${props => props.display};
`

const SearchBar = () => {
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');
    const [category, setCategory] = useState('');

    console.log("search text", searchText, "category", category);

    const SearchItems = async (e, text) => {
        e.preventDefault();
        console.log('enter pressed');
        const url = `restaurants/?search=${searchText}+${category}`;
        const config = {
            headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
        };

        try {
            const response = await Axios.get(url, config);
            console.log(response);
            const action = {
                type: 'SEARCH_RESULTS_REST',
                payload: response.data
            }
            dispatch(action)
        } catch (e){
            console.log(e)
        }
    }

        const categories = [
            ('IT', 'Italian'),
            ('IND', 'Indian'),
            ('CN', 'Chinese'),
            ('JP', 'Japanese'),
            ('TH', 'Thai'),
            ('VNZ', 'Venezuelan'),
            ('CH', 'Swiss'),
            ('DE', 'German'),
            ('FR', 'French'),
            ('MNG', 'Mongolian'),
            ('GK', 'Greek'),
            ('SP', 'Spanish'),
            ('MEX', 'Mexican')
    ];

    return (
        <SearchMain>
            <CategoryForm onKeyDown={e => e.key === 'Enter' ? SearchItems(e, searchText) : null} value={searchText}>
                <SearchInput type={'text'} placeholder={'Search'} onChange={(e) => setSearchText(e.target.value)}/>
                <CategorySelect id="category" name="category"
                                display={location.pathname === '/search/users' ? 'none' : 'initial'}
                                onChange={(e) => setCategory(e.target.value)}>
                    <option value="" selected>Select a Category...</option>
                    <option value="IT">Italian</option>
                    <option value="IND">Indian</option>
                    <option value="CN">Chinese</option>
                    <option value="JP">Japanese</option>
                    <option value="TH">Thai</option>
                    <option value="VNZ">Venezuelan</option>
                    <option value="CH">Swiss</option>
                    <option value="DE">German</option>
                    <option value="French">French</option>
                    <option value="MNG">Mongolian</option>
                    <option value="GK">Greek</option>
                    <option value="SP">Spanish</option>
                    <option value="MEX">Mexican</option>
                </CategorySelect>
            </CategoryForm>
        </SearchMain>
    )
}

export default SearchBar;