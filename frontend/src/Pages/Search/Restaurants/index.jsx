import Main from "../../../Components/Generic/Main";
import MenuBar from "../../../Components/Menu Bar";
import SearchBar from "../../../Components/Search Bar";
import Footer from "../../../Components/Footer";
import RestaurantTile from "../../../Components/RestaurantTile";
import {useEffect, useState} from "react";
import {fetchRestaurants} from "../../../Store/fetches";
import { useDispatch } from 'react-redux';

const Restaurants = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRestaurants);
    }, [])

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