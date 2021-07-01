import Main from "../../../Components/Generic/Main";
import MenuBar from "../../../Components/Menu Bar";
import SearchBar from "../../../Components/Search Bar";
import Footer from "../../../Components/Footer";
import SearchFilter from "../../../Components/SearchFilter";
import Review from "../../../Components/Review";
import Masonry from "react-masonry-css";
import UserTile from "../../../Components/UserTile";
import Axios from "../../../Store/Axios";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

const Users = () => {
    const dispatch = useDispatch();
    const searchResultUsers = useSelector(state => state.searchResultUsers);

    const SearchItems = async () => {
        const url = `search/?search=&type=users`;
        const config = {
            headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`}
        };

        try {
            const response = await Axios.get(url, config);
            console.log(response);
            const action = {
                type: 'SEARCH_RESULTS_USERS',
                payload: response.data
            }
            dispatch(action)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        SearchItems();
    }, []);

    return (
        <Main>
            <MenuBar/>
            <SearchBar/>
            <SearchFilter/>
            <Masonry
                  breakpointCols={4}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                {searchResultUsers.length > 0 ? searchResultUsers.map((user) => {
                    return (
                        <UserTile data={user}/>
                    )
                }) : null}
            </Masonry>
            <Footer/>
        </Main>
    )
}

export default Users;