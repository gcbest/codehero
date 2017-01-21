/* eslint-disable */
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App/App';
import Login from './components/Login/Login';
import Homework from './components/Homework/Homework';
import EntryPage from './components/EntryPage/EntryPage';

export default (
	<Router history={ browserHistory }>
		<Route path="/" component={ App } >
			<Route path="login" component={ Login } />
			<Route path="week/:weekId" component={ Homework } />
			<Route path="EntryPage" component={ EntryPage } />
		</Route>
	</Router>
);
