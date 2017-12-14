import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import t from 'tcomb-form-native';

import auth from '../lib/auth';

const Form = t.form.Form;
const User = t.struct({
  email: t.String,
  password: t.String,
});

export default class Login extends React.Component {

  handleLogin() {
      const email = this.refs.form.getValue('email')
      const password = this.refs.form.getValue('password')
      auth.signInWithEmailAndPassword(email, password)
  }

  render() {
    if(this.props.display !== 'login') {
        return null
    }
    return (
      <View style={styles.container}>
        <Form
          ref="form"
          type={User}
        />
        <TouchableHighlight style={styles.button} onPress={this.handleLogin} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 10,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});
