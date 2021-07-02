import styled from 'styled-components'
import banner from "../../Assets/PNG/banner.png"
import {BaseInput} from "../Generic/Fields";
import BannerSearch from "../Generic/bannerSearch";

const BannerMain = styled.div`
width: 100%;
height: auto;
position: relative;
z-index: 0;
`

export const BannerIMG = styled.img`
width: 100%;
margin-top: 71px;
position: relative;
z-index: 0;
`

const SearchInput = styled(BaseInput)`
position: absolute;
z-index: 2;
left: 50%;
margin-left: -50px;
top: 50%;
margin-top: -50px;
`

const Banner = (props) => {
    return (
        <BannerMain>
            <BannerIMG src={banner}/>
            <BannerSearch/>
        </BannerMain>
    )
}

export default Banner;