import React from 'react';
import { UnreadIssue } from './UnreadIssue';
import { FinishedIssue } from './FinishedIssue';
import { UnFinishedIssue } from './UnFinishedIssue';

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
        };
    }
    render(){
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

