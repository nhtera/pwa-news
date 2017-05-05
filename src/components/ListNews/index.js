import React, { Component } from 'react';
import News from '../News/index';

class ListNews extends Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        paddingTop: '30px',
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}>
        {this.props.news && this.props.news.map(item => (
            <News key={item.url} item={item} />
        ))}
      </div>
    );
  }
}

export default ListNews;
