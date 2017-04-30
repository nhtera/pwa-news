import React from 'react';
import ListNews from '../components/ListNews';
import { reactNews } from '../fetch';

class ReactNews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      news: []
    };
  }

  componentWillMount() {
    reactNews().then(res => {
      this.setState({news: res});
    });
  }

  render() {
    const { news } = this.state;

    return (
        <ListNews news={news}/>
    );
  }
}

export default ReactNews;