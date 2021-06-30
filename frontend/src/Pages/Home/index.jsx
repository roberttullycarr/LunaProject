
import Banner from "../../Components/Banner";
import Main from "../../Components/Generic/Main/index.jsx";
import Footer from "../../Components/Footer";
import MenuBar from "../../Components/Menu Bar";
import Masonry from "react-masonry-css";



const Homepage = () => {
    return (
        <Main>
            <MenuBar/>
            <Banner />
            <Masonry>

            </Masonry>
            <Footer/>
        </Main>
)
}

export default Homepage;