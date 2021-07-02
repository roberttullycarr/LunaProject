import Main from "../../Components/Generic/Main";
import MenuBar from "../../Components/Menu Bar";
import Footer from "../../Components/Footer";
import styled from "styled-components";
import { BaseInput } from "../../Components/Generic/Fields/index.js";
import { Wrapper } from "../../Components/Generic/PageWrapper";
import { Button } from "../../Components/Generic/Buttons";
import { useRef, useState } from "react";
import Axios from "../../Store/Axios";
import { useSelector } from "react-redux";
import arrow from "../../Assets/SVG/arrow.svg"

const Title = styled.h1`
    color: ${props => props.theme.textDarkGrey};
    font-size: ${props => props.theme.textSizeSecondTitle};
    margin-top: 2%;
    margin-bottom: 2%;
    padding-bottom: 15px;
    border-bottom: solid 3px ${props => props.theme.orange};
`;

const Grid = styled.div`
  display: grid;
  grid-template: repeat(4, 1fr) / repeat(3, 1fr);
  grid-gap: 20px;
  margin-top: 30px;
  width: 90%;
`;

const TextInput = styled(BaseInput)`
    min-width: 200px;
    width: 100%;
    height: 49px;
    font-size: ${props => props.theme.textSizeStandardInput};
    font-weight: ${props => props.theme.textWeightRegular};
    padding-left: 23px;
`;

/* const SelectInput = styled.select`
    color: ${props => props.theme.textDarkGrey};
    outline: none;
    height: 52px;
    margin-bottom: 15px;
    border: solid 1px ${props => props.theme.DetailsLightGrey};
    font-size: ${props => props.theme.textSizeStandardInput};
    font-weight: ${props => props.theme.textWeightRegular};
    padding-left: 21px;

    ::placeholder {
        color: ${props => props.theme.DetailsGrey};
        font-weight: ${props => props.theme.textWeightRegular};
    }
` */

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    h2 {
        font-family: Karla, sans-serif;
        font-size: ${props => props.theme.textSizeM};
        font-weight: ${props => props.theme.textWeightBold};
        color: ${props => props.theme.textDarkGrey};
    }

    h3 {
        font-size: ${props => props.theme.textSizeM};
        font-weight: ${props => props.theme.textWeightBold};
        color: ${props => props.theme.textGrey};
        padding-bottom: 4px;
    }
`

const FileButton = styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 38px;
        width: 216px;
        border-radius: 28px;
        border: none;
        margin-top: 7px;
        margin-bottom: 22px;
        color: ${(props) => props.theme.backgroundWhite};
        font-size: ${(props) => props.theme.textSizeDefault};
        background-color: ${(props) => props.theme.orange};
`

const CreateButton = styled(Button)`
    margin-top: 2%;
    margin-bottom: 2%;
`

const CategorySelect = styled.select`
    background: ${props => props.theme.backgroundWhite};
    padding: 0px 10%;
    webkit-appearance: none;
    moz-appearance: none;
    appearance: none;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-position-x: 90%;
    background-position-y: 50%;
    color: ${props => props.theme.textDarkGrey};
    outline: none;
    height: 49px;
    margin-bottom: 15px;
    border: solid 1px ${props => props.theme.DetailsLightGrey};
    font-size: ${props => props.theme.textSizeStandardInput};
    font-weight: ${props => props.theme.textWeightRegular};
    padding-left: 21px;

    ::placeholder {
        color: ${props => props.theme.DetailsGrey};
        font-weight: ${props => props.theme.textWeightRegular};
    }

    :focus {
    outline: none;
    }
`

const NewRestaurant = () => {
    const token = useSelector((state) => state.token);
    const [restaurantTemplate, setRestaurantTemplate] = useState("");

    const OnChangeHandler = (event) => {
        const value = event.target.value;
        const input = event.target.id;
        setRestaurantTemplate({...restaurantTemplate, [input]: value });
    }

    const OnImageChangeHandler = (event) => {
        setRestaurantTemplate({...restaurantTemplate, ['image']: event.target.files[0] });
    }
    
    const onAddImage = (event) => {
        uploadFileButton.current.click();
      };
    const uploadFileButton = useRef();

    const OnSubmitHandler = async (event) => {
        event.preventDefault();
        const url = "restaurants/new/";
        
        const data = new FormData();
        data.append("name", restaurantTemplate.name);
        data.append("category", restaurantTemplate.category);
        data.append("street", restaurantTemplate.street);
        data.append("city", restaurantTemplate.city);
        data.append("zip", restaurantTemplate.zip);
        data.append("website", restaurantTemplate.website);
        data.append("phone", restaurantTemplate.phone);
        data.append("email", restaurantTemplate.email);
        data.append("opening_hours", restaurantTemplate.opening_hours);
        data.append("price_level", restaurantTemplate.price_level);
        data.append("image", restaurantTemplate.image);
        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
        };

        try {
            await Axios.post(url, data, config);
        } catch (error) {
            console.log(error.response);
        }
    }

    return (
        <Main>
            <MenuBar/>
            <Wrapper onSubmit={OnSubmitHandler}>
                <Title>CREATE NEW RESTAURANT</Title>
                <Grid>
                    <InputWrapper>
                        <h2>Basic</h2>
                        <h3>Name *</h3>
                        <TextInput type="text" id="name" onChange={OnChangeHandler} ></TextInput>
                    </InputWrapper>
                    <InputWrapper>
                        <h3>Category *</h3>
                        <CategorySelect id="category" onChange={OnChangeHandler} >
                            <option value="" disabled selected>Select a value...</option>
                            <option value="IT">Italian</option>
                            <option value="IND">Indian</option>
                            <option value="CN">Chinese</option>
                            <option value="dog">Japanese</option>
                            <option value="TH">Thai</option>
                            <option value="VNZ">Venezuelan</option>
                            <option value="CH">Swiss</option>
                            <option value="DE">German</option>
                            <option value="FR">French</option>
                            <option value="MNG">Mongolian</option>
                            <option value="GK">Greek</option>
                            <option value="SP">Spanish</option>
                            <option value="MEX">Mexican</option>
                        </CategorySelect>
                    </InputWrapper>
                    <InputWrapper>
                        <h3>Country *</h3>
                        <CategorySelect id="country" onChange={OnChangeHandler} >
                            <option value="" disabled selected>Select a value...</option>
                            <option value="CH">Switzerland</option>
                        </CategorySelect>
                    </InputWrapper>
                    <InputWrapper>
                        <h2>Address</h2>
                        <h3>Street *</h3>
                        <TextInput type="text" id="street" onChange={OnChangeHandler} ></TextInput>
                    </InputWrapper>
                    <InputWrapper>
                        <h3>City *</h3>
                        <TextInput type="text" id="city" onChange={OnChangeHandler} ></TextInput>
                    </InputWrapper>
                    <InputWrapper>
                        <h3>Zip *</h3>
                        <TextInput type="text" id="zip" onChange={OnChangeHandler} ></TextInput>
                    </InputWrapper>
                    <InputWrapper>
                        <h2>Contact</h2>
                        <h3>Website</h3>
                        <TextInput type="text" id="website" onChange={OnChangeHandler} ></TextInput>
                    </InputWrapper>
                    <InputWrapper>
                        <h3>Phone *</h3>
                        <TextInput type="text" id="phone" onChange={OnChangeHandler} ></TextInput>
                    </InputWrapper>
                    <InputWrapper>
                        <h3>Email *</h3>
                        <TextInput type="email" id="email" onChange={OnChangeHandler} ></TextInput>
                    </InputWrapper>
                    <InputWrapper>
                        <h2>Details</h2>
                        <h3>Opening hours *</h3>
                        <TextInput type="text" id="opening_hours" onChange={OnChangeHandler} ></TextInput>
                    </InputWrapper>
                    <InputWrapper>
                        <h3>Price level</h3>
                        <CategorySelect id="price_level" onChange={OnChangeHandler} >
                            <option value="" disabled selected>Select a value...</option>
                            <option value="$">$</option>
                            <option value="$$">$$</option>
                            <option value="$$$">$$$</option>
                        </CategorySelect>
                    </InputWrapper>
                    <InputWrapper>
                        <h3>Image</h3>
                        <FileButton onClick={onAddImage}>CHOOSE A FILE...</FileButton>
                        <input type="file" id="image" hidden ref={uploadFileButton} onChange={OnImageChangeHandler} accept="image/jpeg, image/png" />
                    </InputWrapper>
                </Grid>
                <CreateButton>Create</CreateButton>
            </Wrapper>
            <Footer/>
        </Main>
    )
}

export default NewRestaurant;