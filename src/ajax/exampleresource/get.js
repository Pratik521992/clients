import {API, Auth} from 'aws-amplify';

//name this what you want when you import
//e.g. import getVOE, {processVOESearch} from 'ajax/voe/get.js'
export default function get(callBack, params) {
    //currentSession() is an async call, need to treat it like an ajax response
    Auth.currentSession().then(function (result) {
        let token = result.idToken.jwtToken;
        let apiName = 'apiGateway';
        let urlParameters = Object.entries(params).map(e => e.join('=')).join('&');
        let path = '/exampleresource?' + urlParameters;
        let myInit = {
            headers: {
                "Access-Control-Allow-Origin": "*", // Required for CORS support to work
                "Access-Control-Allow-Credentials": 'true', // Required for cookies, authorization headers with HTTPS
                "Authorization": token //Cognito JWT
            }
        }

        return API.get(apiName, path, myInit).then(response => {
            callBack(response);
        });
    });
};

//pass this as the default callback in order to simply pass state to your component on response
//e.g.  <EmployeeSearch
//          searchVOE={getVOE.bind(this)}
//          callBack={processVOESearch.bind(this)}/>
//
//***EmployeeSearch Component***
//<button id="submitBtnId" onClick={() => this.props.searchVOE(this.props.callBack)}
export function processSearch(response) {
    const state = {
        searchExecuted: true,
        foundMember: response.foundMember,
        message: response.message,
        member: response.member
    }

    this.setState(state);

}
