import React from 'react';
import Headline from 'view/components/Headline.jsx';
import Wrapper from 'view/components/Wrapper.jsx';

class Home extends React.Component {

  render() {

    return (
        <Wrapper>
            <div className="row">
                <div className="col-md-3" />
                <div className="col-md-6">
                    <div className="col" />
                    <div className="col">
                      <Headline title="Welcome to Serverless"/>
                      <ul>
                          <li><strong>Pay as you use</strong></li>
                          <li><strong>Infinitely scalable</strong></li>
                          <li><strong>Hosted entirely on AWS</strong>
                              <ul>
                                  <li>Cognito (Login)</li>
                                  <li>API Gateway (Endpoints for Lambdas, like LiveKinnect)</li>
                                  <li>Lambda (Backend Processing)</li>
                                  <li>S3 (File Storage)</li>
                                  <li>CloudFront (Content Distribution Network)</li>
                                  <li>Route53 (Domain Name Registry)</li>
                              </ul>
                          </li>
                          <li><strong>React.js</strong>
                              <ul>
                                  <li>Reduces cost by executing more logic in user's browser</li>
                                  <li>Fast UI</li>
                                  <li>Components allow for fast development</li>
                              </ul>
                          </li>
                          <li><strong>Information</strong>
                              <ul>
                                  <li><a target="_blank" href="https://confluence.businessolver.com/display/ARCH/Serverless+UI+Framework">Overview</a></li>
                                  <li><a target="_blank" href="https://confluence.businessolver.com/display/ARCH/API+Gateway">API Gateway</a></li>
                                  <li><a target="_blank" href="https://confluence.businessolver.com/display/ARCH/Cognito">Cognito</a></li>
                                  <li><a target="_blank" href="https://confluence.businessolver.com/display/ARCH/React.js">React</a></li>
                              </ul>
                          </li>
                      </ul>
                    </div>
                </div>
            </div>
        </Wrapper>

    );
  }
}


export default Home;
