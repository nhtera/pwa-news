import React, { Component } from 'react';
import ReactNews from '../ReactNews';
import ListNews from '../../components/ListNews';

class NewsPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      news: []
    };
  }

  componentDidMount() {
    this.props.fetch()
    .then(res => {
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
