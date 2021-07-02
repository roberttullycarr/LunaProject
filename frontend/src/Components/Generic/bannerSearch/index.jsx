import styled from 'styled-components';
import {BaseInput} from "../Fields";
import {BaseButton} from "../Buttons";
import {useState} from "react";
import Axios from "../../../Store/Axios";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

const BSMainForm = styled.form`
position: absolute;
width: 50%;
height: 10%;
display: flex;
align-items: center;
z-index: 2;
left: 50%;
transform: translateY(-50%);
top: 50%;
transform: translatex(-50%);
`

const BannerSearchInput = styled(BaseInput)`
width: 70%;
margin-right: 10%;
height: 100%;
margin-bottom: 0px !important;
padding-left: 20px;

:placeholder {
    color: ${props => props.theme.TextGrey};
}
`
const BannerSearchBtn = styled.button`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 20%;
border-radius: 28px;
border: none;
color: ${(props) => props.theme.backgroundWhite};
font-size: ${(props) => props.theme.textSizeM};
background-color: ${(props) => props.theme.orange};
`

const BannerSearch = () => {
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const SearchItems = async (e, text) => {
        e.preventDefault();
        console.log('enter pressed');
        const url = `search/?search=${searchText}&type=restaurants`;
        const config = {
            headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
        };

        try {
            const response = await Axios.get(url, config);
            console.log(response);
            const action = {
                type: 'SEARCH_RESULTS_RESTAURANTS',
                payload: response.data,
            }
            dispatch(action)
            history.push('search/restaurants');
        } catch (e){
            console.log(e)
        }
    }

    return (
        <BSMainForm onKeyDown={e => e.key === 'Enter' ? SearchItems(e, searchText) : null} value={searchText}>
            <BannerSearchInput placeholder={'Search...'} onChange={(e) => setSearchText(e.target.value)}/>
            <BannerSearchBtn onClick={(e) => SearchItems(e, searchText)}>Search</BannerSearchBtn>
        </BSMainForm>
    )
}

export default BannerSearch;
