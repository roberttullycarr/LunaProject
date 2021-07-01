import Main from "../../../Components/Generic/Main";
import MenuBar from "../../../Components/Menu Bar";
import SearchBar from "../../../Components/Search Bar";
import Footer from "../../../Components/Footer";
import SearchFilter from "../../../Components/SearchFilter";
import Review from "../../../Components/Review";
import RestaurantTile from "../../../Components/RestaurantTile";
import Masonry from "react-masonry-css";
import UserTile from "../../../Components/UserTile";
import {useDispatch, useSelector} from "react-redux";
import Axios from "../../../Store/Axios";
import {useEffect} from "react";
import {searchReviews} from "../../../Store/fetches";

const Reviews = () => {
    const searchResultReviews = useSelector(state => state.searchResultReviews);
    const dispatch = useDispatch();

    // const SearchItems = async () => {
    //     const url = `search/?search=&type=reviews`;
    //     const config = {
    //         headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`}
    //     };
    //
    //     try {
    //         const response = await Axios.get(url, config);
    //         const action = {
    //             type: 'SEARCH_RESULTS_REVIEWS',
    //             payload: response.data
    //         }
    //         dispatch(action)
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    useEffect(() => {
        dispatch(searchReviews);
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
            {searchResultReviews.length > 0 ? searchResultReviews.map((user) => {
                    return (
                        <Review data={user}/>
                    )
                }) : null}
            </Masonry>
            <Footer/>
        </Main>
    )
}

export default Reviews;