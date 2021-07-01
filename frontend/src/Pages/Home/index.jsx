
import Banner from "../../Components/Banner";
import Main from "../../Components/Generic/Main/index.jsx";
import Footer from "../../Components/Footer";
import MenuBar from "../../Components/Menu Bar";
import Masonry from "react-masonry-css";
import RestaurantTile from "../../Components/RestaurantTile";
import '../Search/Restaurants/styles.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchRestaurants} from "../../Store/fetches";
import {BodyTitle} from "./styled";



const Homepage = () => {
    const dispatch = useDispatch();
    const restaurants = useSelector(state => state.restaurants);

    useEffect(() => {
        dispatch(fetchRestaurants);
    }, [])

    return (
        <Main>
            <MenuBar/>
            <Banner />
            <BodyTitle>BEST RATED RESTAURANTS</BodyTitle>
            <Masonry
                  breakpointCols={4}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {restaurants.length > 0 ? restaurants.slice(0, 4).map((restaurant) => {
                        return (
                            <RestaurantTile data={restaurant}/>
                        );
                    }) : null}
            </Masonry>
            <Footer/>
        </Main>
)
}

export default Homepage;