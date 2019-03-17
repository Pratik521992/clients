import React, {Component} from 'react';
import Header from 'view/framework/Header.jsx';
import Body from 'view/framework/Body.jsx';
import {Authenticator} from 'aws-amplify-react';
import {Greetings, RequireNewPassword} from 'aws-amplify-react';
import CustomRequireNewPassword from 'view/pages/Auth/CustomRequireNewPassword.js'
import 'App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Amplify from 'aws-amplify';
import CustomAmplifyTheme from 'css/amplify/CustomAmplifyTheme.js';
import Dashboard from '../src/view/pages/Dashboard.jsx';

Amplify.configure({
    Auth: {
        //example-user-pool
        identityPoolId: 'us-east-2:snekq8dj-fsdf-3333-b234-snehrkfisudj', //REQUIRED - Amazon Cognito Identity Pool ID
        region: 'us-east-2', // REQUIRED - Amazon Cognito Region
        userPoolId: 'us-east-2_EXampLE', //OPTIONAL - Amazon Cognito User Pool ID
        userPoolWebClientId: '3nfks6c02jb864gjq66vu4obf9', //OPTIONAL - Amazon Cognito Web Client ID
    },
    API: {
        endpoints: [
            {
                name: "apiGateway",
                endpoint: process.env.REACT_APP_MODULES
                //REACT_APP_MODULES=http://localhost:3000 npm start
            }
        ]
    }
});

class App extends Component {

    render() {
        return (
            <div>
                
                <Body />
               <Dashboard />
            </div>
            
        );
    }
}

export default App;
/*

*/            