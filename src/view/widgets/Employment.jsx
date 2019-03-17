import React from 'react';
import StaticText from 'view/components/forms/StaticText.jsx';
import Wrapper from 'view/components/Wrapper.jsx'

class Employment extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			searchExecuted: false
		};
	}

	render() {
		const searchExecuted = this.props.searchExecuted;
		const foundMember = this.props.foundMember;
		const message = this.props.message;
		const member = this.props.member;
		const shouldDisplayMember = member != null;

		return (
			<Wrapper>
				{searchExecuted &&
					<Wrapper>
						<h2>
							{foundMember
								? [
									( message !== undefined
										? 'Employee Record Located'
										: member.firstName + ' ' + member.lastName
									)
								]
								: ( 'No Employee Found' )
							}
						</h2>
						{shouldDisplayMember === true
							? this.displayMember()
							: this.displayMessage()
						}
					</Wrapper>
				}
			</Wrapper>

		);
	}

	getEmploymentTermText() {
		const member = this.props.member;
		var doh = member.doh;
		var dot = member.dot;

		if ( doh !== '' ) {
			if ( dot === '' || dot === undefined) {
				dot = "Present";
			}
			return doh + " - " + dot;
		}
	}

	displayMessage() {

		return (
			<Wrapper>{this.props.message}</Wrapper>
		);
	}

	displayMember() {
		const member = this.props.member;

		return (
			<Wrapper>
				<div className="row">
					<div className="col">
						<StaticText name="ssn" value={member.ssn} label="SSN" />
					</div>
				</div>
				<div className="row">
					<div className="col">
						<StaticText name="employmentTerm" value={this.getEmploymentTermText()} label="Employment Timeframe" />
					</div>
				</div>
				<div className="row">
					<div className="col">
						<StaticText name="salary" value={"$"+member.salary} label="Base Compensation" />
					</div>
				</div>
			</Wrapper>
		);
	}

}//end component

export default Employment;
