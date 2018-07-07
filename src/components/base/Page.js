import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from 'native-base';

class Page extends Component {

  constructor(props) {
    super(props);
    this.handleBackPress = this.handleBackPress.bind(this);
  }

  handleBackPress() {
    if (this.props.onBackPress) {
      return this.props.onBackPress();
    }

    this.props.navigation.goBack();
  }

  renderBackArrow() {
    if (!this.props.hideBackArrow) {
      return (
        <Left>
           <Button
            transparent
            onPress={() => this.handleBackPress()}
           >
             <Icon name='arrow-back' />
           </Button>
         </Left>
      );
    }

    return (
      <Left />
    );
  }

  renderRightButton() {
    if (this.props.showRightButton) {
      if (this.props.rightText) {
        return (
          <Right>
             <Button
              transparent
              onPress={this.props.onRightPress}
             >
               <Text style={styles.textStyle}>{this.props.rightText}</Text>
             </Button>
           </Right>
        );
      }

      if (this.props.rightIcon) {
        return (
          <Right>
             <Button
              transparent
              onPress={this.props.onRightPress}
             >
               <Icon name={this.props.rightIcon} />
             </Button>
           </Right>
        );
      }
    }

    return (
      <Left />
    );
  }

  renderHeader() {
    if (!this.props.hideHeader) {
      return (
        <Header noShadow>
          {this.renderBackArrow()}
          <Body />
          {this.renderRightButton()}
        </Header>
      );
    }
  }

  render() {
    return (
      <Container>
        { this.renderHeader() }
        <Content
          style={{
            backgroundColor: this.props.bgColor || 'transparent'
          }}
          contentContainerStyle={{
            flex: 1,
            justifyContent: this.props.justifyContent || 'flex-start'
          }}
        >
          { this.props.children }
        </Content>
      </Container>
    );
  }

}

const mapStateToProps = () => ({});

export default connect(mapStateToProps,
  {}
)(Page);
