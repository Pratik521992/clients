import React from 'react';

class Body extends React.Component {

    render() {
        return (
            <div className="wrapper">
                {this.props.children}
            </div>
        );
    }
}

export default Body;
