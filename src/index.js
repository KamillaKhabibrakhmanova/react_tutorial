import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBi5pv6ffX4arjV1Ti4qtfC1EOR39yAd8A';


//a factory that creates instances
//a class, not an instance of the components
class App extends Component {

	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('surfboards');
	};

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term }, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos}
				/>
			</div>
		);
	};
}

//Take this component's generated HTML and put it in the DOM
//Render component = place component's HTML in the DOM
//second argument = target DOM node on the page (where to insert it)
ReactDOM.render(<App />, document.querySelector('.container'));