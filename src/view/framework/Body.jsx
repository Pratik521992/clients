import React from 'react';
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Wrapper from 'view/components/Wrapper.jsx';
import Home from 'view/pages/Home.jsx';
import Email from 'view/pages/Email.jsx';
import Search from 'view/pages/Search.jsx';
import Dashboard from 'view/pages/Dashboard.jsx';
import RoleManagement from '../pages/Detail/DetailPages/RoleManagement';
import Client from '../pages/Detail/DetailPages/Client';


class Body extends React.Component {

    render() {
        const signedIn = this.props.authState === 'signedIn';

        if (!signedIn) {
            return null;
        }

        return (
            <Wrapper>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Switch>
                                <Route exact path='/' component={Home}/>
                                <Route path="/home" component={Home}/>
                                <Route path="/search"
                                       render={routeProps => <Search {...routeProps} reset={true}/>}
                                />
                                <Route path="/email" component={Email}/>
                                <Route path="/dashboard" component={Dashboard}/>
                                <Route path="/rolemanagement" component={RoleManagement}/>
                                <Route path="/client" component={Client}/>
                            </Switch>
                        </div>
                    </div>
                </div>
                <BrowserRouter>
                    <Route path={"/dashboard"} component={Dashboard}/>
                    </BrowserRouter>
            </Wrapper>
    )
        ;
    }
}

export default Body;
