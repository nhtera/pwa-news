import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class News extends React.Component {
  render() {
    const { item } = this.props;

    return (
			<Card style={{width: '320px', margin: '10px'}}>
        <CardHeader
          title={item.title}
          subtitle={item.publishedAt}
          actAsExpander={true}
          showExpandableButton={true}
        />
        {/**
				<CardTitle title={item.title} subtitle={item.pubDate} />
        */}
        <CardMedia>
          <img src={item.urlToImage} />
        </CardMedia>
        <CardText expandable={true}>
					<div
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{ __html: item.description }}
					/>
				</CardText>
			</Card>
    );
  }
}

export default News;
