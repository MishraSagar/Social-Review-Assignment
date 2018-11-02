import React from 'react';
import {Link} from 'react-router-dom';

export default class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.list = ['Timeline', 'About', 'Photos', 'Friends'];
        this.state = {
            active: 'Timeline'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event, item){
        this.setState({active: item});
    }

    render(){
        const activeStyle = { 
            color: '#258aff',
            borderBottomWidth: '5px',
            borderBottomColor: '#2887ff',
            borderBottomStyle: 'inset'
            
        };

        let menuItems = this.list.map((item, index) => {
            return (
                <Link to={'/'+item.toLowerCase()} key={item} className="link" onClick={(e) => this.handleClick(e, item)}>
                        <div className="menu-item col-xs-3 col-sm-3 col-md-3" style={item == this.state.active ? activeStyle : {}}>
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