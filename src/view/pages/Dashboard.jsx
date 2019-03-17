import React, { Component } from 'react';
import '../../scss/dashboard.css';
import Detail from './Detail';
import MasterMain from './MasterMenu/Main';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className="dashboard">
                <MasterMain />
                <Detail />
                
            </div>    
        )   
    }
}

export default Dashboard;