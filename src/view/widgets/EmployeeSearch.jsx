import React from 'react';
import Wrapper from 'view/components/Wrapper.jsx';
import Input from 'view/components/forms/Input.jsx';

class EmployeeSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            iD: '',
            ssn: '',
            dob: '',
            email: ''

        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <Wrapper>
                <form>
                    <Input
                        type="text"
                        name="iD"
                        value={this.state.iD}
                        id="VE_ID"
                        label="Member ID"
                        onChange={this.handleChange}
                    />
                    <Input
                        name="ssn"
                        value={this.state.ssn}
                        label="SSN"
                        onChange={this.handleChange}
                    />
                    <Input
                        name="dob"
                        value={this.state.dob}
                        label="Date of Birth"
                        onChange={this.handleChange}
                    />
                    <Input
                        name="email"
                        value={this.state.email}
                        label="Email Address"
                        onChange={this.handleChange}
                    />
                    <button id="submitBtnId"
                            onClick={() => this.props.searchMethod(this.props.callBack, this.state)}
                            name="submitBtnName"
                            value="Submit"
                            className="btn btn-primary btn-block"
                            type="button">Submit
                    </button>
                </form>
            </Wrapper>
        );
    }
}


export default EmployeeSearch;
