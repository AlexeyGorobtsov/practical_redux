import React, { Component } from 'react';

import { connect } from 'react-redux';
import { TabBar } from '../components/TabBar.jsx';

import { selectCurrentTab } from '../components/selectors/tabSelectors.js';
import {selectTab} from '../actions/tabActions';

const mapState = state => {
    const currentTab = selectCurrentTab(state);

    return {currentTab};
};

const actions = {onTabClick: selectTab};

export default connect(mapState, actions)(TabBar)