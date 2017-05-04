import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import NewsPage from './controller/NewsPage';
import NoMatch from './controller/NoMatch';
import Layout from './controller/Layout';
import AbcNewsAU from './apis/AbcNewsAU';

function createRouter(title, id, fetch) {
  return class extends React.Component {
    render() {
      return <NewsPage title={title} id={id} fetch={fetch} />
    }
  }
}

const TheNewYorkTimesPage = createRouter('The New York Times', 'the-new-york-times', AbcNewsAU.getTop('the-new-york-times'));
const BbcPage = createRouter('BBC', 'bbc-news', AbcNewsAU.getTop('bbc-news'));
const BloombergPage = createRouter('Bloomberg', 'bloomberg', AbcNewsAU.getTop('bloomberg'));
const BuzzFeedPage = createRouter('BuzzFeed', 'buzzfeed', AbcNewsAU.getTop('buzzfeed'));

const Routes = (
<Layout>
    <Switch>
        <Route path={`/the-new-york-times`} component={ TheNewYorkTimesPage } />
        <Route path={`/bbc`} component={ BbcPage } />
        <Route path={`/bloomberg`} component={ BloombergPage } />
        <Route path={`/buzzfeed`} component={ BuzzFeedPage } />
        <Route exact path={`/`} component={ TheNewYorkTimesPage } />
        <Route component={ NoMatch }/>
    </Switch>
</Layout>
);

export default Routes;