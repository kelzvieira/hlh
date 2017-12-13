import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SignUp extends React.Component {
  render() {
    if(this.props.display !== 'sign-up') {
        return null
    }
    return (
      <View>
        <Text>Sign up form goes here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
