import React from 'react';
import {Route, Switch, Link} from "react-router-dom";
import '../../../scss/MasterItemWrapper.css';
import { Collapse, ListGroup, ListGroupItem} from 'reactstrap';
export default ({ ItemName, collapse, onClick, ListItems }) => {
  return (
    <div className="ItemAccordianName " >
      <div className=" master-list-group-item" onClick={onClick}>
        <span className="master-list-item-highlight"></span>
        <i class="fa fa-key secondary" aria-hidden="true"></i>
        <p>{ItemName}</p>
      </div>
      <Collapse isOpen={collapse} >
        <ListGroup >
          <ListGroupItem className="item">
            <Link to="/rolemanagement" className="flex"><span> - </span><a>{ListItems.item1}</a>
            </Link>
          </ListGroupItem   >
          <ListGroupItem className="item">
            <Link to="/client" className="flex"><span> - </span><a>{ListItems.item2}</a>
            </Link>
          </ListGroupItem >
          <ListGroupItem className="item"><Link to="/users" className="flex"><span> - </span><a>{ListItems.item3}</a>
          </Link>
        </ListGroupItem>
        </ListGroup>
        </Collapse>
      </div>
  )
} 