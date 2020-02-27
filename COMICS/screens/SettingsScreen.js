import React, {Component} from 'react';
import { ExpoConfigView } from '@expo/samples';
import { connect } from 'react-redux';
import { View, Text, TextInput, AsyncStorage } from 'react-native';
import io from 'socket.io-client';


const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateOPDS: (opds) => dispatch({ type: 'UPDATE_OPDS', payload: {opds: opds}}),
    updateUUID: (uuid) => dispatch({ type: 'UPDATE_UUID', payload: {uuid: uuid}})
  }
}


class SettingsScreen extends Component {

  constructor(props){
    super(props);
    const socket = io('http://opds.mml2.net:3000', {transports: ['websocket'], pingTimeout: 30000});
    this.state={
      opds: props.opds,
      uuid: props.uuid,
      socket: socket
    }
  }
  onChangeText = (text) => {
    this.setState({opds: text});
    this.props.updateOPDS(text);
    this._saveOPDS(text);
  }
  changedUUID = (text) => {
    this.setState({uuid: text});
    this.props.updateUUID(text);
    this._saveUUID(text);
  }
  _saveUUID = async(text) => {
    try {
        await AsyncStorage.setItem('uuid',text);
    }catch(e){
      console.log(e)
    }
  }
  _saveOPDS = async(text) => {
    try{
      await AsyncStorage.setItem('opds',text);
      this.state.socket.emit("UpdateOPDS",JSON.stringify({userId: this.state.uuid, opds: text}));
    } catch(e){
      console.log(e);
    }
  }
  render(){
    return (
      <View><TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => this.onChangeText(text)}
      value={this.state.opds}
    />
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => this.changedUUID(text)}
      value={this.state.uuid}
    />
    </View>
    )
  }
}

SettingsScreen.navigationOptions = {
  title: 'Settings',
};

export default connect(mapStateToProps,mapDispatchToProps)(SettingsScreen);
