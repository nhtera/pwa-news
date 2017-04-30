import React, { PropTypes, Component, Children } from 'react';
import { withRouter } from 'react-router';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import { List, ListItem, makeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import spacing from 'material-ui/styles/spacing';

const SelectableList = makeSelectable(List);
const prefix = process.env.REACT_APP_PREURL || '';

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
    return (
    <div>
        <AppBar
        style={{
            position: 'fixed',
            zIndex: this.context.muiTheme.zIndex.appBar + 1,
            top: 0,
        }}
        onLeftIconButtonTouchTap={this.handleToggle}
        title="News"
        />
        <Drawer open={this.state.open} docked={false} onRequestChange={this.handleToggle}>
            <AppBar title="News" onLeftIconButtonTouchTap={this.handleToggle} />
            <SelectableList
                value={location.pathname}
                onChange={ this.onChangeList }
            >
                <ListItem value={`/${prefix}/abc-news-au`} primaryText="ABC News (AU)" leftAvatar={<Avatar src="https://icons.better-idea.org/icon?url=http://www.abc.net.au/news&size=70..120..200" />} />
                <ListItem value={`/${prefix}/bbc`} primaryText="BBC News" leftAvatar={<Avatar src="https://icons.better-idea.org/icon?url=http://www.bbc.co.uk/news&size=70..120..200" />} />
                <ListItem value={`/${prefix}/cnn`} primaryText="CNN" leftAvatar={<Avatar src="https://icons.better-idea.org/icon?url=http://us.cnn.com&size=70..120..200" />} />
                <ListItem value={`/${prefix}/bloomberg`} primaryText="Bloomberg" leftAvatar={<Avatar src="https://icons.better-idea.org/icon?url=http://www.bloomberg.com&size=70..120..200" />} />
                <ListItem value={`/${prefix}/daily-mail`} primaryText="Daily Mail" leftAvatar={<Avatar src="https://icons.better-idea.org/icon?url=http://www.dailymail.co.uk/home/index.html&size=70..120..200" />} />
                <ListItem value={`/${prefix}/kenh-14`} primaryText="Kenh14" leftAvatar={<Avatar src="http://kenh14cdn.com/web_images/k14_logo.png" />} />
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
