import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _debounce from 'lodash.debounce';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Must get an API key from Google
const API_KEY = 'AIzaSyCx2ssG_tmJM5t1SuuHiK6ZYkLbfKo4IK8';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.VideoSearch('reactjs');
  }

  VideoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const VideoSearch = _debounce((term) => { this.VideoSearch(term) }, 500);
    return (
      <div>
        <SearchBar onSearchTermChange={VideoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos}
        />
      </div>
    );
  }

}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
