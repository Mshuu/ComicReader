import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Card, CardItem} from 'native-base';
import { UnreadIssue, FinishedIssue, UnFinishedIssue } from './IssueComponent';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return state;
}

class MultipleIssueBook extends React.PureComponent{
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
                <FinishedIssue item={this.state.item} socket={this.state.socket} navigate={this.state.navigate} opds={this.props.opds}/>
            );
        }
        if (this.state.item.page > 0 && this.state.item.page < this.state.item.link[3]['pse:count']){
            return(
                <UnFinishedIssue item={this.state.item} socket={this.state.socket} navigate={this.state.navigate} opds={this.props.opds}/>
            );
        }
        return (
            <UnreadIssue item={this.state.item} socket={this.state.socket} navigate={this.state.navigate} opds={this.props.opds}/>
        );
    }
}

export default connect(mapStateToProps)(MultipleIssueBook)