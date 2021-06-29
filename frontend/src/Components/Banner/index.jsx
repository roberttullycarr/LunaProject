import styled from 'styled-components'
import banner from "../../Assets/PNG/banner.png"
import {BaseInput} from "../Generic/Fields";

const BannerMain = styled.div`
width: 100%;
position: relative;
`

export const BannerIMG = styled.img`
width: 100%;
margin-top: 71px;
`

const SearchInput = styled(BaseInput)`
position: absolute;
`

const Banner = (props) => {
    return (
        <BannerMain>
            <BannerIMG src={banner}/>
            <SearchInput type={'text'} placeholder={'Search...'} id ={'search-field'}/>
        </BannerMain>
    )
}

export default Banner;