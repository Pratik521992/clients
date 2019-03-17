import React from 'react';
import {Link} from "react-router-dom";
import {Greetings} from 'aws-amplify-react';
import CustomAmplifyTheme from 'css/amplify/CustomAmplifyTheme.js';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {greeting: ''}
    }

    render() {

        const signedIn = this.props.authState === 'signedIn';
        const cognitoUser = this.props.authData;
        let name;

        if (cognitoUser !== undefined && this.state.greeting === '' && signedIn) {
            let self = this;
            cognitoUser.getUserAttributes(function (err, result) {
                if (err) {
                    console.log(err);
                    return;
                }
                for (var i = 0; i < result.length; i++) {
                    if (result[i].getName() === "name") {
                        name = result[i].getValue();
                        const greeting = "Welcome, " + name;
                        self.setState({greeting: greeting});
                    }
                      //console.log('attribute ' + result[i].getName() + ' has value ' + result[i].getValue());
                }
            });
        }

        return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <Link to="/" className="navbar-brand">Serverless</Link>
                {signedIn === true &&
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/">Home</Link>&nbsp;
                        </li>
                        <li className="nav-item">
                            <Link to="/search">Search</Link>&nbsp;
                        </li>
                        <li className="nav-item">
                            <Link to="/email">Email</Link>
                        </li>
                    </ul>
                    <div>
                        <Greetings theme={CustomAmplifyTheme} outGreeting="Welcome" inGreeting={this.state.greeting}/>
                    </div>
                </div>
                }
            </nav>
        );
    }
}

export default Header;
