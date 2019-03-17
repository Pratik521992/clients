import React, { Component } from 'react';
import SecurityAdminMenu from './SecurityAdmin.jsx';
import MasterItemwrapper from './MasterItemWrapper';
import MasterBrand from  './MasterBrand';


class MasterMain extends Component {
    constructor(props){
        super(props);
        this.state = {
            ItemName: 'Security Admin',
            collapse: true,
            listItems: {
                item1: "Role Management",
                item2: "Client",
                item3: "Users",
            }
        }
    }
    HandleeOnClick =() => {
        this.setState(prevState =>({
            collapse: !prevState.collapse
        }))
    }
    render(){
        return(
            <div className="master-main">
                <MasterBrand />
               <MasterItemwrapper 
                ItemName={this.state.ItemName} 
                collapse={this.state.collapse} 
                onClick={this.HandleeOnClick}
                ListItems={this.state.listItems}
                />
            </div>    
        )   
    }
}

export default MasterMain;