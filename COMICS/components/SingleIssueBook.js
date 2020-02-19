import React from 'react';
import {
  Image,
  TouchableOpacity,
} from 'react-native';
import { Card, CardItem} from 'native-base';

export class SingleIssueBook extends React.PureComponent{

    _CardOnPress = () => {
        this.state.navigate('IssueScreen',{
            id: this.state.item.id,
            socket: this.state.socket,
            title: this.state.item.title,
            showHeader: false,
            pageCount: this.props.item.link[3]['pse:count']
        });
    }
    constructor(props){
        super(props)
        this.state = {
            item: this.props.item,
            socket: this.props.state.socket,
            navigation: this.props.state.navigation
        }
    }
    render(){
      return (
        <Card>
            <TouchableOpacity onPress={() => _this._CardOnPress}>
                <CardItem cardBody>
                    <Image resizeMode={'contain'} source={{uri: "http://l2.mml2.net:2202" + this.props.item.link[0].href}} style={{height: 277,width:180,flex: 1}}/>
                </CardItem>
            </TouchableOpacity>
        </Card>
      )
    }
  }