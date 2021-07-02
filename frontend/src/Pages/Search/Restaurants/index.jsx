import Main from "../../../Components/Generic/Main";
import MenuBar from "../../../Components/Menu Bar";
import SearchBar from "../../../Components/Search Bar";
import Footer from "../../../Components/Footer";
import RestaurantTile from "../../../Components/RestaurantTile";
import {useEffect} from "react";
import {fetchRestaurants, searchRestaurants} from "../../../Store/fetches";
import {useDispatch, useSelector} from 'react-redux';
import Masonry from "react-masonry-css";
import "./styles.css"
import SearchFilter, {SearchFilterMain} from "../../../Components/SearchFilter";
import { v4 as uuidv4 } from 'uuid';


const Restaurants = () => {
    const dispatch = useDispatch();
    const searchResultRest = useSelector(state => state.searchResultRest);


    useEffect(() => {
        if (searchResultRest.length === 0) {
            dispatch(searchRestaurants);
        }
    }, [])

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
                  {searchResultRest.length > 0 ? searchResultRest.map((restaurant) => {
                    return (
                      <RestaurantTile key={uuidv4()} data={restaurant}/>
                    );
                  }) : null}
            </Masonry>
            <Footer/>
        </Main>
    )
}

export default Restaurants;