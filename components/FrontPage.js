import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Ionicons, FontAwesome, SimpleLineIcons } from '@expo/vector-icons';

export default class FrontPage extends React.Component {
  onPress = (value) => {
    this.props.onDisplay(value)
    console.log(value)
  }

  render() {
    if(this.props.display !== 'front-page') {
        return null
    }
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={() => this.onPress("login")} underlayColor='#1591fe'>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
        <SimpleLineIcons name="login" size={32} color="#fff" />
        <TouchableHighlight style={styles.button} onPress={() => this.onPress("sign-up")} underlayColor='#1591fe'>
          <Text style={styles.buttonText}>Create account</Text>
        </TouchableHighlight>
        <SimpleLineIcons name="user-follow" size={32} color="#fff" />
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
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    padding: 10,
    backgroundColor: '#1591fe',
    borderColor: '#1591fe',
    borderWidth: 1,
    borderRadius: 2,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
