import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class News extends React.Component {
  render() {
    const { item } = this.props;
    return (
			<Card>
				<CardTitle title={item.title} subtitle={item.pubDate} />
				<CardText>
					<div
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{ __html: item.content }}
					/>
				</CardText>
			</Card>
    );
  }
}

export default News;
