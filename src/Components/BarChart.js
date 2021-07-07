import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import CandyTheme from 'fusioncharts/themes/fusioncharts.theme.candy';
import barData from '../JSONs/barChartData';

ReactFC.fcRoot(FusionCharts, Charts, CandyTheme);

const chartConfigs = {
    type: 'column2d',
    width: '100%',
    height: 500,
    dataFormat: 'json',
    dataSource: barData,
};

export default (props) => {
    return (
            <ReactFC {...chartConfigs} />
    );
}



