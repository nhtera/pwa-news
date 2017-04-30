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
    // const { news } = this.state;
    const news = [
      {
        "author": "http: //www.abc.net.au/news/jessica-haynes/8462720",
        "title": "Everything you need to know about Trump's 100 days in office rally",
        "description": "From slamming news outlets and even a poem, US President Donald Trump's 100 days in office event had all the hallmarks of his wild campaign rallies.",
        "url": "http://www.abc.net.au/news/2017-04-30/key-moments-from-donald-trumps-100-day-rally/8483826",
        "urlToImage": "http://www.abc.net.au/news/image/8483928-1x1-700x700.jpg",
        "publishedAt": "2017-04-30T03:27:17Z"
      }
    ];
    return (
        <ListNews news={news}/>
    );
  }
}

export default ReactNews;