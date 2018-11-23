import React from 'react';
import BasicInfo from './BasicInfo';
import BasicInfoForm from './BasicInfoForm';
import Work from './Work';
import WorkForm from './WorkForm';

export default class About extends React.Component {
     
    constructor(props) {
        super(props);
        this.state = {
            userID: this.props.userID,
            isWorkEditClicked: false,
            isInfoEditClicked: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleWorkCancelClick = this.handleWorkCancelClick.bind(this);
        this.handleInfoCancelClick = this.handleInfoCancelClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        if (e.target.id == "info-button") {
            this.setState({isInfoEditClicked : !this.state.isInfoEditClicked});
        }
        else if (e.target.id == "work-button") {
            this.setState({isWorkEditClicked : !this.state.isWorkEditClicked});
        }
    }

    handleWorkCancelClick() {
        this.setState({
            isWorkEditClicked: false
        });
    }

    handleInfoCancelClick() {
        this.setState({
            isInfoEditClicked: false
        });
    }

    render() {
        return (
            <div className="about">
                <div className="basic-info">
                    <div className="header">
                        BASIC INFORMATION
                        <i id="info-button" onClick={this.handleClick} className="fa fa-pencil-square-o"></i>
                    </div>
                    {this.state.isInfoEditClicked ? <BasicInfoForm userID={this.state.userID} cancel={this.handleInfoCancelClick}/> : <BasicInfo userID={this.state.userID}/>}
                </div>

                <div className="basic-info">
                    <div className="header">
                        WORK
                        <i id="work-button" onClick={this.handleClick} className="fa fa-pencil-square-o"></i>
                    </div>
                    {this.state.isWorkEditClicked ? <WorkForm userID={this.state.userID} cancel={this.handleWorkCancelClick}/> : <Work userID={this.state.userID}/>}
                </div>
            </div>
        );
    }
}