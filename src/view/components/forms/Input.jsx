import React from 'react';

class Input extends React.Component {

    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.name} id={this.props.id} className="control-label">{this.props.label}</label>
                <input
                    {...this.props}
                    className="form-control"
                />
            </div>
        );
    }
}

export default Input;
