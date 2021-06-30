import Main from "../../../Components/Generic/Main";
import MenuBar from "../../../Components/Menu Bar";
import SearchBar from "../../../Components/Search Bar";
import Footer from "../../../Components/Footer";
import RestaurantTile from "../../../Components/RestaurantTile";
import {useEffect} from "react";
import {fetchRestaurants} from "../../../Store/fetches";
import {useDispatch, useSelector} from 'react-redux';
import Masonry from "react-masonry-css";
import "./styles.css"
import SearchFilter, {SearchFilterMain} from "../../../Components/SearchFilter";

const Restaurants = () => {
    const dispatch = useDispatch();
    const restaurants = useSelector(state => state.restaurants);

    useEffect(() => {
        dispatch(fetchRestaurants);
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
                  {restaurants.length > 0 ? restaurants.map((restaurant) => {
                    return (
                      <RestaurantTile data={restaurant}/>
                    );
                  }) : null}
            </Masonry>
            <Footer/>
        </Main>
    )
}

export default Restaurants;