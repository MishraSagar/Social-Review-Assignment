import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.list = this.props.list;
        this.parentPath = this.props.parentPath;
        this.state = {
            active: this.props.active
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event, item) {
        this.setState({active: item});
    }

    render() {
        const activeStyle = { 
            color: '#258aff',
            borderBottomWidth: '5px',
            borderBottomColor: '#2887ff',
            borderBottomStyle: 'inset'
            
        };

        let menuItems = this.list.map((item, index) => {
            let isActive = false;

            if (this.props.location.pathname == (this.parentPath + '/' + item.toLowerCase())) {
                isActive = true;
            }
            return (
                <Link to={this.parentPath + '/' + item.toLowerCase()} key={item} className="link" onClick={(e) => this.handleClick(e, item)}>
                        <div className="menu-item col-xs-3" style={isActive || (this.props.location.pathname == this.parentPath && item == this.props.active) ? activeStyle : {}}>
                            {item}
                        </div>
                </Link>
            );
        });

        return (
                <div className="row">
                    {menuItems}
                </div>
        );
    }
}

export default withRouter(Menu);