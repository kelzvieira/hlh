import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import _ from 'lodash';

import auth from './lib/auth';
import FrontPage from './components/FrontPage';
import SignUp from './components/SignUp';
import Login from './components/Login';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: '',
      // look into possibly using React Router instead of a display key in state
      // to paginatate my app using existing display components as routes
      display: 'front-page',
    }
  }

  setDisplay = (value) => {
    this.setState({
      display: value,
    })
  }

  setUser = (uid) => {
    this.setState({
      user: uid,
    })
  }

  componentDidMount() {
    // every time component mounts, call database and set the messages to state
    /* Messages.on('value', snapshot => {
      this.setState({
        messages: snapshot.val() || {}
      })
    }) */

    auth.onAuthStateChanged(user => {
      this.setState({
        user: user,
      })
      console.log(user)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <FrontPage {...this.state} onDisplay={this.setDisplay} onUser={this.setUser}/>
        <SignUp {...this.state} onDisplay={this.setDisplay} onUser={this.setUser}/>
        <Login {...this.state} onDisplay={this.setDisplay} onUser={this.setUser}/>
        <Text>Placeholder text</Text>
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
