import React from 'react';

export default class Friends extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            showAll: false,
            friendCount: this.props.friends.length
        }
    }

    handleClick(e) {
        let remainFriends = this.state.friendCount - 8;
        e.preventDefault();
            if (this.state.showAll) {
                e.target.text = `show ${remainFriends} more`;
                this.setState({showAll: false});
            }
            else {
                e.target.text = 'show less';
                this.setState({showAll: true});
            }
        }

    render() {
        let friends = [];

        friends = this.props.friends.map((id, index) => {
            if(this.state.showAll) {
                    return (
                        <img key={"user"+id} src={require("../assets/images/avatar-1.png")} alt="friend" title={this.props.users[id].userName} />
                    );
            }
            else {
                if (index < 8) {
                    return (
                        <img key={"user"+id} src={require("../assets/images/avatar-1.png")} alt="friend" title={this.props.users[id].userName} />
                    );
                }
            }
        });

        return (
            <div className="friends-container">
                <div className="following-header">
                    FRIENDS
                    <a href="" className="show-friends-button" onClick={(e) => this.handleClick(e)}>show {this.state.friendCount - 8} more</a>
                </div>
                <div className="friends">
                    {friends}
                </div>
            </div>
        );

    }

}
