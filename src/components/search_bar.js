// same as const Component = React.Component
import React, { Component } from 'react';

// class-based component needed when you need internal record keeping
// searchBar has access to all of React.Component's functionality

//state: JS object used to record & react to user events

class SearchBar extends Component {
	//all JS objects has a constructor function that is called whenever a new instance is created
	//reserved for doing setup inside of a class
	constructor(props) {
		//calls parent method on parent class
		super(props);

		//each class-based object has it's own state object
		//whenever a component's state is changed, the render function and its child components is re-run
		this.state = { term: '' };
	}
	//every class-based React component must have a render method
	render() {
		return (
			<div className='search-bar'>
				<input
					value={this.state.term} 
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	};
}

export default SearchBar;