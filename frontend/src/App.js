import {Redirect, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import SignIn from "./Pages/Authentification/Sign In";
import SignUp from "./Pages/Authentification/Sign Up";
import Congratulations from "./Pages/Authentification/Congratulations";
import Verification from "./Pages/Authentification/Verification";
import Homepage from "./Pages/Home";
import Restaurants from "./Pages/Search/Restaurants";
import Reviews from "./Pages/Search/Reviews";
import Users from "./Pages/Search/Users";
import Restaurant from "./Pages/Restaurant";
import UserProfile from "./Pages/UserProfile/index.jsx";
import NewReview from "./Pages/NewReview";
import NewRestaurant from "./Pages/NewRestaurant";


function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                {/*<Route exact path="/">*/}
                {/*    <Redirect to="/signin" />*/}
                {/*</Route>*/}
                <Route exact path="/" component={Homepage} />
                <Route exact path={"/search/restaurants"} component={Restaurants} />
                <Route exact path={"/search/reviews"} component={Reviews} />
                <Route exact path={"/search/users"} component={Users} />
                <Route exact path={"/restaurant/:index"} component={Restaurant} />
                <Route exact path={"/user/:index"} component={UserProfile} />
                <Route exact path={"/me"} component={UserProfile} />
                <Route exact path={"/create/newreview/:index"} component={NewReview} />
                <Route exact path={"/create/newrestaurant"} component={NewRestaurant} />
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/signup/success" component={Congratulations} />
                <Route exact path="/signup/verification" component={Verification} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
