import React, { Component, Children } from 'react';
import { withRouter } from 'react-router';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import { List, ListItem, makeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

const SelectableList = makeSelectable(List);

class Layout extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  onChangeList = (event, value) => {
    // this.context.router.push(value);
    this.props.history.push(value);
    this.handleToggle();
  };

  render() {
    const { location } = this.props;
    return (
    <div>
        <AppBar
        onLeftIconButtonTouchTap={this.handleToggle}
        title="News"
        />
        <Drawer open={this.state.open} docked={false} onRequestChange={this.handleToggle}>
            <AppBar title="News" onLeftIconButtonTouchTap={this.handleToggle} />
            <SelectableList
                value={location.pathname}
                onChange={ this.onChangeList }
            >
                <ListItem value="/abc-news-au" primaryText="ABC News (AU)" leftAvatar={<Avatar src="https://icons.better-idea.org/icon?url=http://www.abc.net.au/news&size=70..120..200" />} />
                <ListItem value="/bbc" primaryText="BBC News" leftAvatar={<Avatar src="https://icons.better-idea.org/icon?url=http://www.bbc.co.uk/news&size=70..120..200" />} />
                <ListItem value="/cnn" primaryText="CNN" leftAvatar={<Avatar src="https://icons.better-idea.org/icon?url=http://us.cnn.com&size=70..120..200" />} />
                <ListItem value="/bloomberg" primaryText="Bloomberg" leftAvatar={<Avatar src="https://icons.better-idea.org/icon?url=http://www.bloomberg.com&size=70..120..200" />} />
                <ListItem value="/daily-mail" primaryText="Daily Mail" leftAvatar={<Avatar src="https://icons.better-idea.org/icon?url=http://www.dailymail.co.uk/home/index.html&size=70..120..200" />} />
                <ListItem value="/kenh-14" primaryText="Kenh14" leftAvatar={<Avatar src="http://kenh14cdn.com/web_images/k14_logo.png" />} />
            </SelectableList>
            <Divider />
        </Drawer>
        { Children.only(this.props.children) }
    </div>
    );
  }
}

export default withRouter(Layout);
