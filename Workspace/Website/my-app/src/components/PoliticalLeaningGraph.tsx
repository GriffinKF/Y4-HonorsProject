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

const stateName = StateData.map((data) => (data.State))
const ID = StateData.map((data) => (data.ID))
const sentiment = StateData.map((data) => ((parseFloat(data.Positive)/400)*100).toFixed(2))
const tPSentiment = StateData.map((data) => (data.tPositive))
const tNSentiment = StateData.map((data) => (data.tNegative))
// const positivePercent = sentiment.map((data) => parseFloat(data))
const politicalLeaning = StateData.map((data) => (data.Political))
const rStateName = []
const dStateName = []
const rSentiment = []
const dSentiment = []
const rTPSentiment = []
const dTPSentiment = []
const rTNSentiment = []
const dTNSentiment = []

for(let i = 0; i < stateName.length; i++) {
  if (politicalLeaning[i] == "R") {
    rStateName.push(stateName[i])
    rSentiment.push(parseFloat(sentiment[i]))
    rTPSentiment.push(parseFloat(tPSentiment[i]))
    rTNSentiment.push(parseFloat(tNSentiment[i]))
  } else if (politicalLeaning[i] == "D") {
    dStateName.push(stateName[i])
    dSentiment.push(parseFloat(sentiment[i]))
    dTPSentiment.push(parseFloat(tPSentiment[i]))
    dTNSentiment.push(parseFloat(tNSentiment[i]))
  }
}

export function PoliticalLeaningGraph(props) {
  
    if (props.party == "R") {
    var labels = rStateName
    var sentData = rSentiment
    var color = 'darkred'
    var title = '% Positive Sentiment for Rebublican States (Machine Learning)'
    var yMax = 45
  } else if (props.party == "D") {
    var labels = dStateName
    var sentData = dSentiment
    var color = 'darkblue'
    var title = '% Positive Sentiment for Democratic States (Machine Learning)'
    var yMax = 45
  } else if (props.party == "tR") {
    var labels = rStateName
    var sentData = rTPSentiment
    var sentData2 = rTNSentiment
    var color = 'darkred'
    var color2 = 'red'
    var title = '% Positive Sentiment for Rebublican States (Manual)'
    var title2 = '% Negative Sentiment for Rebublican States (Manual)'
    var yMax = 75
  } else if (props.party == "tD") {
    var labels = dStateName
    var sentData = dTPSentiment
    var sentData2 = dTNSentiment
    var color = 'darkblue'
    var color2= 'blue'
    var title = '% Positive Sentiment for Democratic States (Manual)'
    var title2 = '% Negative Sentiment for Democratic States (Manual)'
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
      },
    },
  };

  const MLData = {
    labels,
    datasets: [
      {
        label: title,
        data: sentData,
        backgroundColor: color,
      },
    ],
  };
  
  const ManualData = {
    labels,
    datasets: [
      {
        label: title,
        data: sentData,
        backgroundColor: color,
      },
      {
        label: title2,
        data: sentData2,
        backgroundColor: color2,
      },
    ],
  };

  if (props.party == "R" || props.party == "D") {
    var Data = MLData
  } else {
    var Data = ManualData
  }
  return <Bar options={options} data={Data} />;
}

export default PoliticalLeaningGraph