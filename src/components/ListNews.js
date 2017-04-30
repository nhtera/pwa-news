import React from 'react';
import News from './News';

class ListNews extends React.Component {
  render() {
    return (
      <div>
        {this.props.news.map(item => (
            <News key={item.guid} item={item} />
        ))}
      </div>
    );
  }
}

export default ListNews;
