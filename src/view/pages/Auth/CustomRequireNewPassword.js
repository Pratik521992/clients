import React from 'react';
import {RequireNewPassword, FormSection, SectionHeader, SectionBody, InputRow, ButtonRow, SectionFooter, Link} from 'aws-amplify-react';
import {I18n, Auth} from 'aws-amplify';

class CustomRequireNewPassword extends RequireNewPassword {

    capitalize(str) {
        if (str === undefined) {
            return str;
        }
        return str.replace(/\w\S*/g, function(txt){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    change() {
        const user = this.props.authData;
        const { password } = this.inputs;
        const { requiredAttributes } = user.challengeParam;

        let finalRequiredAttributes = {};
        let that = this;
        Object.keys(requiredAttributes).map(function (key) {

            let attributeName = requiredAttributes[key];
            finalRequiredAttributes[attributeName] = that.inputs[attributeName];

            return finalRequiredAttributes;
        })

        if (!Auth || typeof Auth.completeNewPassword !== 'function') {
            throw new Error('No Auth module found, please ensure @aws-amplify/auth is imported');
        }
        Auth.completeNewPassword(user, password, finalRequiredAttributes)
            .then(user => {
                //logger.debug('complete new password', user);
                if (user.challengeName === 'SMS_MFA') {
                    this.changeState('confirmSignIn', user);
                } else if (user.challengeName === 'MFA_SETUP') {
                    //logger.debug('TOTP setup', user.challengeParam);
                    this.changeState('TOTPSetup', user);
                } else {
                    this.checkContact(user);
                }

            })
            .catch(err => this.error(err));
    }

    render() {
        if (this.props.authState !== 'requireNewPassword') {
            return null;
        }

        const user = this.props.authData;
        const { requiredAttributes } = user.challengeParam;

        const theme = this.props.theme;
        let that = this;

        return (
            <FormSection theme={theme}>
                <SectionHeader theme={theme}>{I18n.get('Change Password')}</SectionHeader>
                <SectionBody>
                    <InputRow
                        autoFocus
                        placeholder={I18n.get('New Password')}
                        theme={theme}
                        key="password"
                        name="password"
                        type="password"
                        onChange={this.handleInputChange}
                    />
                    {
                        Object.keys(requiredAttributes).map(function (key) {

                            let value = requiredAttributes[key];
                            let displayValue = that.capitalize(value);
                            return (
                                <InputRow
                                    placeholder={I18n.get(displayValue)}
                                    theme={theme}
                                    key={value}
                                    name={value}
                                    type="text"
                                    onChange={that.handleInputChange}
                                />
                            );

                        })
                    }
                    <ButtonRow theme={theme} onClick={this.change}>
                        {I18n.get('Change')}
                    </ButtonRow>
                </SectionBody>
                <SectionFooter theme={theme}>
                    <Link theme={theme} onClick={() => this.changeState('signIn')}>
                        {I18n.get('Back to Sign In')}
                    </Link>
                </SectionFooter>
            </FormSection>
        );
    }
}

export default CustomRequireNewPassword;