import React, {Component} from 'react';
import '../../../../scss/detail/detail-main.css';
import {ListGroup, ListGroupItem} from 'reactstrap';

class RoleManagement extends Component{
  state = {
      ItemList : [
        {name : "Global Admin"},
        {name : "Admin Finance"},
        {name : "Organization Admin"},
        {name : "Organization Finance"},
        {name : " Broker"},
        {name : " Member Service"},
        {name : " Dependent"},
        {name : " Processor"},
        {name : " Data Tech"},
        {name : " Security Admin"},
      ]
  }
  render(){
    const items = this.state.ItemList.map(item => <ListGroupItem>{item.name}</ListGroupItem>);
    return (
      <div className="detail-wrapper">
        <div className="detail-header"> 
          <p>Role Management</p>
          <button className="btn btn-primary btn-sm">+ ADD ROLE</button>
        </div>
        <div className="detail-main">
            <div className="role-master">
                <ListGroup>
                  {items}
                </ListGroup>
              </div>
            <div></div>
        </div>
        
      </div>
    );
  }
}


export default RoleManagement;
