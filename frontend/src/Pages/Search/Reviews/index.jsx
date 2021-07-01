import Main from "../../../Components/Generic/Main";
import MenuBar from "../../../Components/Menu Bar";
import SearchBar from "../../../Components/Search Bar";
import Footer from "../../../Components/Footer";
import SearchFilter from "../../../Components/SearchFilter";
import Review from "../../../Components/Review";
import RestaurantTile from "../../../Components/RestaurantTile";
import Masonry from "react-masonry-css";

const Reviews = () => {
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
                <Review/>
                <Review/>
                <Review/>
                <Review/>
            </Masonry>
            <Footer/>
        </Main>
    )
}

export default Reviews;