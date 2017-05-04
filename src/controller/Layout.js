import React, { PropTypes, Component, Children } from 'react';
import { withRouter } from 'react-router';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import { List, ListItem, makeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import spacing from 'material-ui/styles/spacing';

import nytPNG from './the-new-york-times.png';
import bbcPNG from './bbc.png';
import bloombergPNG from './bloomberg.png';
import buzzfeedPNG from './buzzfeed.png';
import k14PNG from './k14.png';

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
    const title = titleStore[location.pathname.substring(1)] || 'News';

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
                value={location.pathname}
                onChange={ this.onChangeList }
            >
                <ListItem value={`/the-new-york-times`} primaryText="The New York Times" leftAvatar={<Avatar src={nytPNG} />} />
                <ListItem value={`/bbc`} primaryText="BBC News" leftAvatar={<Avatar src={bbcPNG} />} />
                <ListItem value={`/bloomberg`} primaryText="Bloomberg" leftAvatar={<Avatar src={bloombergPNG} />} />
                <ListItem value={`/buzzfeed`} primaryText="Buzz Feed" leftAvatar={<Avatar src={buzzfeedPNG} />} />
                <ListItem value={`/kenh-14`} primaryText="Kenh14" leftAvatar={<Avatar src={k14PNG} />} />
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
