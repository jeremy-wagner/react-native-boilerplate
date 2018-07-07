import React, { Component } from 'react';
import {
  Text
} from 'native-base';
import Page from './../../components/base/Page';

class DashboardScreen extends Component {
  render() {
    return (
      <Page
        hideBackArrow
        navigation={this.props.navigation}
      >
        <Text> Dashboard Screen </Text>
      </Page>
    );
  }
}

export default DashboardScreen;
