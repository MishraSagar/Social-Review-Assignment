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

        friends = this.props.friends.map((name, index) => {
            if (this.state.showAll) {
                return (
                    <img key={"user-img" + index} src={require("../assets/images/avatar-1.png")} alt="friend" title={name} />
                );
            }
            else {
                if (index < 8) {
                    return (
                        <img key={"user-img" + index} src={require("../assets/images/avatar-1.png")} alt="friend" title={name} />
                    );
                }
            }
        });

        return (
            <div className="friends-container">
                <div className="following-header">
                    FRIENDS
                    { this.props.friends.length <= 8 ? '' : <a href="" className="show-friends-button" onClick={(e) => this.handleClick(e)}>show {this.state.friendCount - 8} more</a>}
                </div>
                <div className="friends">
                    {this.props.friends.length == 0 ? <div className="no-data-block">No Data</div> : friends}
                </div>
            </div>
        );

    }

}
