import React from 'react';
import pic1 from '../assets/images/photo-1.jpg';
import pic2 from '../assets/images/photo-2.jpg';
import pic3 from '../assets/images/photo-3.jpg';
import pic4 from '../assets/images/photo-4.jpg';
import {Modal, Button, Carousel} from 'react-bootstrap';

export default class Photos extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            activeIndex: 0,
            direction: null
        }
        this.pics = [pic1, pic2, pic3, pic4];

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.generatePicElement = this.generatePicElement.bind(this);
        this.handleSelect = this.handleSelect.bind(this);

    }

    generatePicElement() {
        let picElements = this.pics.map((pic, index) => {
            return (
                <div className="col-xs-3" key={"pic"+index} onClick={(e) => this.handleShow(e, index)}>
                    <img className="img-responsive images" src={pic} />
                </div>
            );
        });
        return picElements;
    }

    generateCarouselItems() {
        let items = this.pics.map((pic, index) => {
            return (
                <Carousel.Item key={"carousel-"+index}>
                    <img width={900} height={500} alt="900x500" src={pic} />
                    <Carousel.Caption>
                        <h3>{`Photo-${index}`}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            );
        });
        return items;
    }

    handleClose() {
        this.setState({ showModal: false });
        
    }
    
    handleShow(e, index) {
        this.setState({ 
            showModal: true,
            activeIndex: index,
            direction: e.direction
        });

    }

    handleSelect(selectedIndex, e) {
        this.setState({
            activeIndex: selectedIndex,
            direction: e.direction
        });
    }



    render() {
        return (
            <div className="photos-container">
                <div className="row">
                    {this.generatePicElement()}
                </div>
                <Modal show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Images</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Carousel
                        activeIndex={this.state.activeIndex}
                        direction={this.state.direction}
                        onSelect={this.handleSelect}
                    >
                        {this.generateCarouselItems()}
                    </Carousel>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}