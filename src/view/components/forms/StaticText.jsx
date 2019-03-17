import React from 'react';

class StaticText extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            label: ''
        };
    }

    render() {
        return (
            <div className="form-group">
                <strong className="control-label"><span>{this.props.label}</span></strong>
                <div className="form-control-static">{this.props.value}</div>
            </div>
        );
    }
}

export default StaticText;
