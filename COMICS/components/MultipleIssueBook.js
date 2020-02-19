import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Card, CardItem} from 'native-base';
import { UnreadIssue } from './UnreadIssue';
import { FinishedIssue } from './FinishedIssue';
import { UnFinishedIssue } from './UnFinishedIssue';

export class MultipleIssueBook extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            item: props.item,
            socket: props.state.socket,
            navigate: props.state.navigate
        };
    }

    render() {
        if (this.state.item.page > 0 && this.state.item.page >= this.state.item.link[3]['pse:count']){
            return (
                <FinishedIssue item={this.state.item} socket={this.state.socket} navigate={this.state.navigate}/>
            );
        }
        if (this.state.item.page > 0 && this.state.item.page < this.state.item.link[3]['pse:count']){
            return(
                <UnFinishedIssue item={this.state.item} socket={this.state.socket} navigate={this.state.navigate}/>
            );
        }
        return (
            <UnreadIssue item={this.state.item} socket={this.state.socket} navigate={this.state.navigate}/>
        );
    }
}