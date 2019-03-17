import React, {Component} from 'react';
import '../../../../scss/detail/detail-main.css';
import {ListGroup, ListGroupItem} from 'reactstrap';

class Client extends Component{
  state = {
    ItemList : [
      {name : "Client 1"},
      {name : "Client 1"},
      {name : "Client 1"},
      {name : "Client 1"},
      {name : "Client 1"},
      {name : "Client 1"},
      {name : "Client 1"},
      {name : "Client 1"},
      {name : "Client 1"},
      {name : "Client 1"},
      {name : "Client 1"},
      
    ]
}
  render(){
    const items = this.state.ItemList.map(item => <ListGroupItem className="client-name">{item.name}  <i className="fa fa-pencil"></i></ListGroupItem>);
    return (
      <div className="detail-wrapper">
        <div className="detail-header"> 
          <p>Client</p>
          <button className="btn btn-sm">CREATE CLIENT GROUP</button>
        </div>
        <div className="client-main-list">
                <ListGroup>
                  {items}
                </ListGroup>    
        <div></div>
        </div>
        
      </div>
    );
  }
}


export default Client;
