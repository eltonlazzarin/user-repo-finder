import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import UserRepositories from '../pages/UserRepositories';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/users/:repository/repos" component={UserRepositories} />
   '<Route path="/repository/:repository+" component={Repository} />
    <Route />
  </Switch>
);

export default Routes;
