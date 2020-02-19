import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Card, CardItem} from 'native-base';


export class FinishedIssue extends React.PureComponent {

    _CardOnPress = () => {
        this.state.navigate('IssueScreen',{
            id: this.state.item.id,
            socket: this.state.socket,
            title: this.state.item.title,
            showHeader: false,
            pageCount: this.state.item.link[3]['pse:count']
        });
    }

    constructor(props){
        super(props);
        this.state ={
            item: props.item,
            socket: props.socket,
            navigate: props.navigate
        };
    }
    render(){
        return (
            <Card>
                <TouchableOpacity onPress={() => this._CardOnPress}>
                    <CardItem cardBody button onPress={() => this._CardOnPress}>
                        <Image resizeMode={'contain'} source={{uri: "http://l2.mml2.net:2202" + this.state.item.link[0].href}} style={{height: 277,width:180,flex: 1,opacity: 0.3}}/>
                    </CardItem>
                </TouchableOpacity>
            </Card>
        );
    }
}
export class FinishedIssueSingle extends React.PureComponent {

    _CardOnPress = () => {
        this.state.navigate('IssueScreen',{
            id: this.state.item.id,
            socket: this.state.socket,
            title: this.state.item.title,
            showHeader: false,
            pageCount: this.state.item.link[3]['pse:count']
        });
    }

    constructor(props){
        super(props);
        this.state ={
            item: props.item,
            socket: props.socket,
            navigate: props.navigate
        };
    }
    render(){
        return (
            <Card>
                <TouchableOpacity onPress={() => this._CardOnPress}>
                    <CardItem cardBody button onPress={() => this._CardOnPress}>
                        <Image resizeMode={'contain'} source={{uri: "http://l2.mml2.net:2202" + this.state.item.link[0].href}} style={{height: 277,width:180,flex: 1,opacity: 0.3}}/>
                    </CardItem>
                </TouchableOpacity>
            </Card>
        );
    }
}