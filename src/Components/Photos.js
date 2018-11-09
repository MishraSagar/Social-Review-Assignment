import React from 'react';
import pic1 from '../assets/images/photo-1.jpg';
import pic2 from '../assets/images/photo-2.jpg';
import pic3 from '../assets/images/photo-3.jpg';
import pic4 from '../assets/images/photo-4.jpg';

export default function Photos(props){
    const pics = [pic1, pic2, pic3, pic4];
    const picElements = pics.map((pic) => {
        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <img className="img-responsive images" src={pic} />
            </div>
        );
    });
    return (
        <div className="photos-container">
            <div className="row">
                {picElements}
            </div>
        </div>
    );
}