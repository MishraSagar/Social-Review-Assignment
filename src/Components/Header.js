import React from 'react';

class Header extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <header>
                <div className="company-name">
                    Newput
                </div>
                <div className="nav-user">
                    <div className="logo">
                        <img src={this.props.userImage} alt="user image"/>
                    </div>
                    {this.props.userName}
                </div>
            </header>
        );
    }
}

export default Header;
