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
const pSentiment = StateData.map((data) => ((parseFloat(data.Positive)/400)*100).toFixed(2))
const nSentiment = StateData.map((data) => ((parseFloat(data.Negative)/400)*100).toFixed(2))
const tPSentiment = StateData.map((data) => (data.tPositive))
const tNSentiment = StateData.map((data) => (data.tNegative))
// const positivePercent = pSentiment.map((data) => parseFloat(data))
const politicalLeaning = StateData.map((data) => (data.Political))
const rStateName = []
const dStateName = []
const rPSentiment = []
const dPSentiment = []
const rNSentiment = []
const dNSentiment = []
const rTPSentiment = []
const dTPSentiment = []
const rTNSentiment = []
const dTNSentiment = []

for(let i = 0; i < stateName.length; i++) {
  if (politicalLeaning[i] == "R") {
    rStateName.push(stateName[i])
    rPSentiment.push(parseFloat(pSentiment[i]))
    rNSentiment.push(parseFloat(nSentiment[i]))
    rTPSentiment.push(parseFloat(tPSentiment[i]))
    rTNSentiment.push(parseFloat(tNSentiment[i]))
  } else if (politicalLeaning[i] == "D") {
    dStateName.push(stateName[i])
    dPSentiment.push(parseFloat(pSentiment[i]))
    dNSentiment.push(parseFloat(nSentiment[i]))
    dTPSentiment.push(parseFloat(tPSentiment[i]))
    dTNSentiment.push(parseFloat(tNSentiment[i]))
  }
}

export function PoliticalLeaningGraph(props) {
  
    if (props.party == "R") {
    var labels = rStateName
    var sentData = rPSentiment
    var sentData2 = rNSentiment
    var color = 'darkred'
    var color2 = 'red'
    var title = '% Positive Sentiment for Rebublican States (Machine Learning)'
    var title2 = '% Negative Sentiment for Rebublican States (Machine Learning)'
    var yMax = 90
  } else if (props.party == "D") {
    var labels = dStateName
    var sentData = dPSentiment
    var sentData2 = dNSentiment
    var color = 'darkblue'
    var color2= 'blue'
    var title = '% Positive Sentiment for Democratic States (Machine Learning)'
    var title2 = '% Negative Sentiment for Democratic States (Machine Learning)'
    var yMax = 90
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
      {
        label: title2,
        data: sentData2,
        backgroundColor: color2,
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