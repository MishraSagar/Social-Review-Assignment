import React from 'react';
import {withRouter} from 'react-router-dom';
import Menu from './Menu';
import BarChart from './BarChart';
import PieChart from './PieChart';
import LineChart from './LineChart';
import DonutChart from './DonutChart';

function Charts(props) {

    return (
        <div className="container-fluid charts-container">
            <div className="cover">
                <div className="row">
                    <div className="menu col-xs-12 col-sm-8 col-md-9">
                        <Menu list={['Bar', 'Pie', 'Line', 'Donut']} active='Bar' parentPath={'/charts'}/>
                    </div>
                </div>
            </div>

            <div className="main-content">
                <div className="row">
                    <div className="about-container">
                        <div className="row">
                            <div className="about-content">
                                {generateComponent(props)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function generateComponent(props) {
    switch(props.match.params.content) {
        case 'bar': return <BarChart />
        break;
        case 'pie': return <PieChart />
        break;
        case 'line': return <LineChart />
        break;
        case 'donut': return <DonutChart />
        break;
        default: props.history.push("/charts/bar");
    }
}

export default withRouter(Charts);