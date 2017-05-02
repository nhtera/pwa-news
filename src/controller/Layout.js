import React, { PropTypes, Component, Children } from 'react';
import { withRouter } from 'react-router';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import { List, ListItem, makeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import spacing from 'material-ui/styles/spacing';

const SelectableList = makeSelectable(List);

const titleStore = {
    'bloomberg': 'Bloomberg',
    'bbc': 'BBC News',
    'abc-news-au': 'ABC News',
    'cnn': 'CNN',
    'daily-mail': 'Daily Mail',
};

class Layout extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  handleToggle = () => this.setState({open: !this.state.open});

  onChangeList = (event, value) => {
    // this.context.router.push(value);
    this.props.history.push(value);
    this.handleToggle();
  };

  render() {
    const { location } = this.props;
    const title = location && titleStore[location.pathname.substring(1)] || 'News';

    return (
    <div>
        <AppBar
        style={{
            position: 'fixed',
            zIndex: this.context.muiTheme.zIndex.appBar + 1,
            top: 0,
        }}
        onLeftIconButtonTouchTap={this.handleToggle}
        title={title}
        />
        <Drawer open={this.state.open} docked={false} onRequestChange={this.handleToggle}>
            <AppBar title={title} onLeftIconButtonTouchTap={this.handleToggle} />
            <SelectableList
                value={location && location.pathname}
                onChange={ this.onChangeList }
            >
                <ListItem value={`/abc-news-au`} primaryText="ABC News (AU)" leftAvatar={<Avatar src="https://icons.better-idea.org/icon?url=http://www.abc.net.au/news&size=70..120..200" />} />
                <ListItem value={`/bbc`} primaryText="BBC News" leftAvatar={<Avatar src="https://icons.better-idea.org/icon?url=http://www.bbc.co.uk/news&size=70..120..200" />} />
                <ListItem value={`/cnn`} primaryText="CNN" leftAvatar={<Avatar src="https://icons.better-idea.org/icon?url=http://us.cnn.com&size=70..120..200" />} />
                <ListItem value={`/bloomberg`} primaryText="Bloomberg" leftAvatar={<Avatar src="https://icons.better-idea.org/icon?url=http://www.bloomberg.com&size=70..120..200" />} />
                <ListItem value={`/daily-mail`} primaryText="Daily Mail" leftAvatar={<Avatar src="https://icons.better-idea.org/icon?url=http://www.dailymail.co.uk/home/index.html&size=70..120..200" />} />
                <ListItem value={`/kenh-14`} primaryText="Kenh14" leftAvatar={<Avatar src="http://kenh14cdn.com/web_images/k14_logo.png" />} />
            </SelectableList>
            <Divider />
        </Drawer>
        <div style={{
            paddingTop: spacing.desktopKeylineIncrement,
            minHeight: 400,
        }}>
        { Children.only(this.props.children) }
        </div>
    </div>
    );
  }
}

export default withRouter(Layout);
