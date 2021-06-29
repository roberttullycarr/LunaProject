import Main from "../../../Components/Generic/Main";
import MenuBar from "../../../Components/Menu Bar";
import SearchBar from "../../../Components/Search Bar";
import Footer from "../../../Components/Footer";
import RestaurantTile from "../../../Components/RestaurantTile";

const Restaurants = () => {
    return (
        <Main>
            <MenuBar/>
            <SearchBar/>
            <RestaurantTile />
            <Footer/>
        </Main>
    )
}

export default Restaurants;