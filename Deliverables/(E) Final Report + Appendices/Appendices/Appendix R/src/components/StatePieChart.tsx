import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export default function StatePieChart(props) {
    const stateData = props.stateData

    const MLData = {
        labels: ['Positive Sentiment', 'Neutral Sentiment', 'Negative Sentiment'],
        datasets: [
            {
            label: 'Sentiment Data (Model Classified)',
            data: [stateData.Positive, stateData.Neutral, stateData.Negative],
            backgroundColor: [
                'rgba(75, 255, 192, 0.8)',
                'rgba(54, 162, 255, 0.8)',
                'rgba(255, 99, 132, 0.8)'
            ],
            borderColor: [
                'rgba(75, 255, 192, 1)',
                'rgba(54, 162, 255, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
            }
        ]
    }

    const manualData = {
        labels: ['Positive Sentiment', 'Neutral Sentiment', 'Negative Sentiment'],
        datasets: [
            {
            label: 'Sentiment Data (Hand Classified)',
            data: [stateData.tPositive, 100 - (parseInt(stateData.tPositive) + parseInt(stateData.tNegative)), stateData.tNegative],
            backgroundColor: [
                'rgba(75, 255, 192, 0.8)',
                'rgba(54, 162, 255, 0.8)',
                'rgba(255, 99, 132, 0.8)'
            ],
            borderColor: [
                'rgba(75, 255, 192, 1)',
                'rgba(54, 162, 255, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
            }
        ]
    }

    if (props.ML == "Yes") {
        var data = MLData
    } else {
        var data = manualData
    }

  return <Pie data={data} />;
}
