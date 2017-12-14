import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';

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
        <MaterialCommunityIcons name="home-circle" size={32} color="#fff" />
        <TouchableHighlight style={styles.button} onPress={() => this.onPress("login")} underlayColor='#1591fe'>
          <Text style={styles.buttonText}>
            <SimpleLineIcons name="login" size={18} color="#fff" />
            Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.button} onPress={() => this.onPress("sign-up")} underlayColor='#1591fe'>
          <View style={styles.buttonInner}>
            <SimpleLineIcons style={styles.icon} name="user-follow" size={18} color="#fff" />
            <Text style={styles.buttonText}>Create account</Text>
          </View>
        </TouchableHighlight>
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
  buttonInner: {
    alignSelf: 'stretch',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
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
  },
  icon: {
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'flex-start',
  }
});
