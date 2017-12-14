import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import t from 'tcomb-form-native';

import auth from '../lib/auth';

const Form = t.form.Form;
const User = t.struct({
  email: t.String,
  password: t.String,
});

export default class InputForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      formPage: 1,
      formInput: {
        propertyValue: '',
        depositValue: '',
        interestRate: '',
      }
    }
  }

  handleSignUp = () => {
    const value = this.refs.form.getValue()
    const email = value.email
    const password = value.password
    auth.createUserWithEmailAndPassword(email, password)
    const user = auth.onAuthStateChanged(user => {
      return user
    })
    this.props.onUser(user)
    console.log(user)
  }

  render() {
    if(this.props.display !== 'input-form') {
        return null
    }
    return (
      <View style={styles.container}>
        <Form
          ref="form"
          type={User}
        />
        <TouchableHighlight style={styles.button} onPress={this.handleSignUp} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    backgroundColor: '#1591fe',
    borderColor: '#1591fe',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});
