import {Redirect, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import SignIn from "./Pages/Authentification/Sign In";
import SignUp from "./Pages/Authentification/Sign Up";
import Congratulations from "./Pages/Authentification/Congratulations";
import Verification from "./Pages/Authentification/Verification";


function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/signin" />
                </Route>
                <Route exact path="/signin" component={SignIn} /> */}
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/signup/success" component={Congratulations} />
                <Route exact path="/signup/verification" component={Verification} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
