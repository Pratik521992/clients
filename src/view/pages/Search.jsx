import React from 'react';
import Wrapper from 'view/components/Wrapper.jsx';
import Employment from 'view/widgets/Employment.jsx';
import EmployeeSearch from 'view/widgets/EmployeeSearch.jsx';
import searchGET, {processSearch} from 'ajax/exampleresource/get.js';

class Search extends React.Component {
	constructor(props) {
	    super(props)
	    this.state ={
	    // Set your state here
	    }
	}
	
	clearState = () => {
		this.setState({
			searchExecuted : false,
			member : undefined
		}); 
	};
	
  render() {
    return (
		<Wrapper>
			<div className="row">
				<div className="col-md-3" />
				<div className="col-md-6">
					<div className="col" />
					<div className="col">
						<Wrapper>
							<h1>Employee Search</h1>
							{this.state.searchExecuted ?
								<Wrapper>
									<Employment
										searchExecuted={this.state.searchExecuted}
										foundMember={this.state.foundMember}
										message={this.state.message}
										member={this.state.member} 
									/>
									<button onClick={this.clearState} className="btn btn-primary btn-block">Search Again</button>
								</Wrapper>
								:
								<EmployeeSearch
									searchMethod={searchGET.bind( this )}
									callBack={processSearch.bind( this )}
								/>
							}
						</Wrapper>
					</div>
					<div className="col" />
				</div>
			</div>
		</Wrapper>
    );
  }
}

export default Search;
