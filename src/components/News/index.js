import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class News extends React.Component {
  render() {
    const { item } = this.props;

    return (
			<Card style={{width: '250px', margin: '10px'}}>
                {/**
				<CardTitle title={item.title} subtitle={item.pubDate} />
				<CardText>
					<div
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{ __html: item.content }}
					/>
				</CardText>
                */}
                <CardMedia>
                    <img src={item.urlToImage} />
                </CardMedia>
                <CardTitle title={item.title} subtitle={item.publishedAt} />

			</Card>
    );
  }
}

export default News;
