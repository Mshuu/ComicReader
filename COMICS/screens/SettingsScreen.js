import React, {Component} from 'react';
import { ExpoConfigView } from '@expo/samples';
import { connect } from 'react-redux';
import { View, Text, TextInput } from 'react-native';

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateOPDS: (opds) => dispatch({ type: 'UPDATE_OPDS', payload: {opds: opds}})
  }
}


class SettingsScreen extends Component {

  constructor(props){
    super(props);
    this.state={
      opds: props.opds
    }
  }
  onChangeText = (text) => {
    this.setState({opds: text});
    this.props.updateOPDS(text);
  }
  render(){
    return (
      <View><TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => this.onChangeText(text)}
      value={this.state.opds}
    /></View>
    )
  }
}

SettingsScreen.navigationOptions = {
  title: 'Settings',
};

export default connect(mapStateToProps,mapDispatchToProps)(SettingsScreen);
