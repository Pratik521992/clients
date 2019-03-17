import React from 'react';

export default () => {
    return(
        <div className="main-menu">
               <ul id="side-main-menu" className="side-menu list-unstyled">
                  <li>
                     <a className="main-header" href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i className="fa fa-key"></i>Security Admin</a>
                     <ul id="exampledropdownDropdown" className="collapse list-unstyled ">
                        <li><a href="/"><span> _ </span>Role Management</a></li>
                        <li><a href="/"><span> _ </span>Clients</a></li>
                        <li><a href="/"><span> _ </span>Users</a></li>
                     </ul>
                  </li>
               </ul>
            </div>
    )
}