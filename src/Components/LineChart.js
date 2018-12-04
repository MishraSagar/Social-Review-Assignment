import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import CandyTheme from 'fusioncharts/themes/fusioncharts.theme.candy';
import lineData from '../JSONs/lineChartData';

ReactFC.fcRoot(FusionCharts, Charts, CandyTheme);

const chartConfigs = {
    type: 'line',
    width: "100%",
    height: 500,
    dataFormat: 'json',
    dataSource: lineData,
};

export default (props) => {
    return (
        <div>
            <ReactFC {...chartConfigs} />
        </div>
    );
}



