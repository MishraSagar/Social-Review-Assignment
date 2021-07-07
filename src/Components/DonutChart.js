import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import data from '../JSONs/pieChartData.json';

Charts(FusionCharts);

export default (props) => {
    return (
            <ReactFC
            type = 'doughnut3d'
            width = '100%'
            height = '500'
            dataFormat = 'JSON'
            dataSource = {data} />
    );
}