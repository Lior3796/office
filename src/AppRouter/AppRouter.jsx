import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Employees from "../Components/Pages/Employees/Employees";
import ContactUs from "../Components/Pages/ContactUs/ContactUs";
import PrivateEmployee from "../Components/Features/PrivateEmployee/PrivateEmployee";
function AppRouter() {
    return (
        <Switch>
        <Route exact path="/">
         <Home />
        </Route>

        <Route path="/Employees">
         <Employees>
         
         </Employees>
        </Route>

        <Route path="/ContactUs">
         <ContactUs />
        </Route>

        <Route path="/PrivateEmployee/:index">
         <PrivateEmployee />
        </Route>

       </Switch>
    );
}

export default AppRouter;