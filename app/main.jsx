'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

require("./style/style.scss")

import Header from './components/header.jsx';
import Page from './components/page.jsx';


ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Page pageName="wiki/index.md" />, document.getElementById('page'));