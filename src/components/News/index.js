import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { getData } from '../../utils/storageUtil';
import { isOnline, isSupportServiceWorker } from '../../utils/swUtil';

class News extends React.Component {
  state = {
    imageURI: '',
  }

  componentDidMount() {
    this.getImageURI(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.getImageURI(nextProps);
  }

  getImageURI = (props) => {
    const { item } = props;
    if (!isOnline()/* && !isSupportServiceWorker()*/) {
      const URL = window.URL || window.webkitURL;
      getData(item.url).then((blobData) => {
        const imageURI = URL.createObjectURL(blobData);
        this.setState({
          imageURI: imageURI,
        });
      });
    } else {
      this.setState({
        imageURI: item.urlToImage,
      });
    }
  }

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
          <img alt={item.title} src={this.state.imageURI} />
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
