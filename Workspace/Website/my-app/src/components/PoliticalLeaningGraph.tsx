import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import StateData from "../assets/jsons/StateSentiment.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// export const options = {
//   responsive: true,
//   scales: {
//     y: {
//       max: 45
//     }
//   },
//   plugins: {
//     legend: {
//       position: 'top' as const,
//     },
//     title: {
//       display: true,
//       // text: 'Chart.js Bar Chart',
//     },
//   },
// };

const stateName = StateData.map((data) => (data.State))
const ID = StateData.map((data) => (data.ID))
const sentiment = StateData.map((data) => ((parseFloat(data.Positive)/400)*100).toFixed(2))
const tSentiment = StateData.map((data) => (data.tPositive))
// const positivePercent = sentiment.map((data) => parseFloat(data))
const politicalLeaning = StateData.map((data) => (data.Political))
const rStateName = []
const dStateName = []
const rSentiment = []
const dSentiment = []
const rTSentiment = []
const dTSentiment = []

for(let i = 0; i < stateName.length; i++) {
  if (politicalLeaning[i] == "R") {
    rStateName.push(stateName[i])
    rSentiment.push(sentiment[i])
    rTSentiment.push(tSentiment[i])
  } else if (politicalLeaning[i] == "D") {
    dStateName.push(stateName[i])
    dSentiment.push(sentiment[i])
    dTSentiment.push(tSentiment[i])
  }
}



export function PoliticalLeaningGraph(props) {
  
    if (props.party == "R") {
    var labels = rStateName
    var sentData = rSentiment
    var color = 'red'
    var title = '% Positive Sentiment for Rebublican States (Machine Learning)'
    var yMax = 45
  } else if (props.party == "D") {
    var labels = dStateName
    var sentData = dSentiment
    var color = 'blue'
    var title = '% Positive Sentiment for Democratic States (Machine Learning)'
    var yMax = 45
  } else if (props.party == "tR") {
    var labels = rStateName
    var sentData = rTSentiment
    var color = 'red'
    var title = '% Positive Sentiment for Rebublican States (Manual)'
    var yMax = 75
  } else if (props.party == "tD") {
    var labels = dStateName
    var sentData = dTSentiment
    var color = 'blue'
    var title = '% Positive Sentiment for Democratic States (Manual)'
    var yMax = 75
  }

  const options = {
    responsive: true,
    scales: {
      y: {
        max: yMax
      }
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        // text: 'Chart.js Bar Chart',
      },
    },
  };

  const rData = {
    labels,
    datasets: [
      {
        label: title,
        data: sentData,
        backgroundColor: color,
      },
    ],
  };
  return <Bar options={options} data={rData} />;
}

export default PoliticalLeaningGraph