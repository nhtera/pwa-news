import React from 'react';

class ListNews extends React.Component {
  render() {
    return (
      <div>
        {this.props.news.map(item => (
        <article key={item.link}>
            <h1><a href={item.link}>{item.title}</a></h1>
            <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: item.content }}
            />
        </article>
        ))}
      </div>
    );
  }
}

export default ListNews;
