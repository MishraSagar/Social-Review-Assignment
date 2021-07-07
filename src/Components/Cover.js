import React from 'react';
import Menu from './Menu';

export default function Cover(props) {
    return (
        <div className="cover">
            <div className="row">
                <div className="menu col-sm-8 col-md-9">
                    <Menu list={['Timeline', 'About', 'Photos', 'Friends']} active='Timeline' parentPath={'/dashboard'}/>
                </div>
            </div>
        </div>
    );
}