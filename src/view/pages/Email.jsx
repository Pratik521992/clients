import React from 'react';
import Wrapper from 'view/components/Wrapper.jsx';
import emailGET, {processResponse} from 'ajax/exampleemail/get.js';
import StaticText from "../components/forms/StaticText";
import Input from 'view/components/forms/Input.jsx';

class Email extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            subject: '',
            body: ''

        };

        this.handleChange = this.handleChange.bind(this);
    }

    clearState = () => {
        this.setState({
            searchExecuted: false,
            member: undefined
        });
    };

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
                <div className="row">
                    <div className="col-md-3"/>
                    <div className="col-md-6">
                        <div className="col"/>
                        <div className="col">
                            <Wrapper>
                                <h1>Email</h1>
                                {this.state.message ?
                                    <Wrapper>
                                        <StaticText
                                            name="message"
                                            value={this.state.message}
                                            label="Message"
                                        />
                                    </Wrapper>
                                    :
                                    <Wrapper>
                                        <Input
                                            type="text"
                                            name="subject"
                                            value={this.state.subject}
                                            id="subject"
                                            label="Subject"
                                            onChange={this.handleChange}
                                        />
                                        <Input
                                            type="text"
                                            name="body"
                                            value={this.state.body}
                                            id="body"
                                            label="Body"
                                            onChange={this.handleChange}
                                        />
                                        <button id="submitBtnId"
                                                onClick={() => emailGET(processResponse.bind(this), this.state)}
                                                name="submitBtnName"
                                                value="Submit"
                                                className="btn btn-primary btn-block"
                                                type="button">Send Email
                                        </button>
                                    </Wrapper>
                                }
                            </Wrapper>
                        </div>
                        <div className="col"/>
                    </div>
                </div>
            </Wrapper>
        );
    }
}

export default Email;
