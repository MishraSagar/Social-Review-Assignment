import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import CandyTheme from 'fusioncharts/themes/fusioncharts.theme.candy';
import data from '../JSONs/pieChartData.json';

Charts(FusionCharts);

export default (props) => {
    return (
        <div>
            <ReactFC
            type = "doughnut3d"
            width = '100%'
            height = '500'
            dataFormat = "JSON"
            dataSource = {data} />
        </div>
    );
}