import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';

export default (props) => {
  return (
    <div className="breadcrumb-main">
      
      <Breadcrumb >
        <BreadcrumbItem><Link to={"/"}>Home</Link></BreadcrumbItem>
        <BreadcrumbItem><a href="/">Library</a></BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};
