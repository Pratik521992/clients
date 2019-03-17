import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar/navbar';
import BreadCrumb from './BreadCrumbs';
import RoleManagement from '../Detail/DetailPages/RoleManagement';
import Client from '../Detail/DetailPages/Client';


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="detail">
                <Navbar />
                <BreadCrumb />
                <BrowserRouter>

                </BrowserRouter>

                <Switch>
                    <Route path="/rolemanagement" component={RoleManagement} />
                    <Route path="/client" component={Client} />
                </Switch>
            </div>
        )
    }
}

export default Detail;