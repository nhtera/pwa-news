import React, { Component } from 'react';
import ListNews from '../../components/ListNews';
import { getData, saveData } from '../../utils/storageUtil';
import { isOnline, isSupportServiceWorker } from '../../utils/swUtil';

class NewsPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      news: []
    };
  }

  saveAllNewsImages = (articles) => {
    return Promise.all(articles.map((v) => {
      return fetch(v.urlToImage).then((response) => {
        return response.blob();
      }).then(function (blob) {
        return saveData(v.url, blob);
      });
    }));
  }

  componentDidMount() {
    if (isOnline()) {
      this.props.fetch()
        .then(res => {
          if (!isSupportServiceWorker()) {
            saveData(this.props.id, res.articles).then((articles) => {
              this.saveAllNewsImages(articles);
            });
          }
          this.setState({news: res.articles});
        });
    } else {
      getData(this.props.id)
      .then((articles) => {
        this.setState({news: articles});
      });
    }
  }

  render() {
    const { news } = this.state;
    return (
      <ListNews news={news}/>
    );
  }
}

export default NewsPage;
