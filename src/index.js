//transpiler will grab React
//core react library knows how to work with/render reach components
import React, { Component } from 'react';
//library to render react components into the DOM
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBi5pv6ffX4arjV1Ti4qtfC1EOR39yAd8A';


//a factory that creates instances
//a class, not an instance of the components
class App extends Component {

	constructor(props) {
		super(props);

		this.state = { videos: []};


		YTSearch({key: API_KEY, term: 'surfboards' }, (videos) => {
			this.setState({ videos });
		});
	};

	render() {
		return (
			<div>
				<SearchBar />
			</div>
		);
	};
}

//Take this component's generated HTML and put it in the DOM
//Render component = place component's HTML in the DOM
//second argument = target DOM node on the page (where to insert it)
ReactDOM.render(<App />, document.querySelector('.container'));