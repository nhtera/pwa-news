import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import NewsPage from './controller/NewsPage';
import NoMatch from './controller/NoMatch';
import Layout from './controller/Layout';
import AbcNewsAU from './apis/AbcNewsAU';

function createRouter(title, fetch) {
  return class extends React.Component {
    render() {
      return <NewsPage title={title} fetch={fetch} />
    }
  }
}

const AbcNewsPage = createRouter('ABC News', AbcNewsAU.getTop());
const BbcPage = createRouter('BBC', AbcNewsAU.getTop('bbc-news'));
const CnnPage = createRouter('CNN', AbcNewsAU.getTop('cnn'));
const BloombergPage = createRouter('Bloomberg', AbcNewsAU.getTop('bloomberg'));
const DailyMailPage = createRouter('Daily Mail', AbcNewsAU.getTop('daily-mail'));

const Routes = (
<Layout>
    <Switch>
        <Route path={`/abc-news-au`} component={ AbcNewsPage } />
        <Route path={`/bbc`} component={ BbcPage } />
        <Route path={`/cnn`} component={ CnnPage  } />
        <Route path={`/bloomberg`} component={ BloombergPage } />
        <Route path={`/daily-mail`} component={ DailyMailPage } />
        <Route exact path={`/`} component={ AbcNewsPage } />
        <Route component={ NoMatch }/>
    </Switch>
</Layout>
);

export default Routes;