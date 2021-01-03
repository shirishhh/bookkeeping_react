import Dashboard from "./dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Register } from "./auth/Register";
import { Sales } from "./sales/Sales";
import { Purchase } from "./purchase/Purchase";
import Login from "./auth/Login";
import CompanyList from "./company/CompanyList";
import AddCompany from "./company/AddCompany";
import EditCompany from "./company/EditCompany";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/company" component={CompanyList}></Route>
        <Route exact path="/addcompany" component={AddCompany}></Route>
        <Route exact path="/editcompany/:id" component={EditCompany}></Route>

        <Route exact path="/sales" component={Sales}></Route>
        <Route exact path="/purchase" component={Purchase}></Route>
      </Switch>
    </Router>
  );
}

export default App;
