import React, { Component } from 'react';
import ListNews from '../../components/ListNews';

class NewsPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      news: []
    };
  }

  componentDidMount() {
    // check network connection
    // if on 
      // send request
    // if off
      // get data from indexedDB
    this.props.fetch()
    .then(res => {
      // check service worker
      // if not save data in indexedDB
      // key = this.props.key
      this.setState({news: res.articles});
    });
  }

  render() {
    const { news } = this.state;
    return (
      <ListNews news={news}/>
    );
  }
}

export default NewsPage;
