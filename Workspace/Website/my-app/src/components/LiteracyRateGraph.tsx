import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import StateData from "../assets/jsons/StateSentiment.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
    },
  },
};

StateData.sort((a, b) => parseInt(a.LiteracyRank) - parseInt(b.LiteracyRank))
const labels = StateData.map((data) => (data.ID))
const pSentiment = StateData.map((data) => ((parseFloat(data.Positive)/400)*100).toFixed(2))
const nSentiment = StateData.map((data) => ((parseFloat(data.Negative)/400)*100).toFixed(2))
const tPSentiment = StateData.map((data) => (data.tPositive))
const tNSentiment = StateData.map((data) => (data.tNegative))


export default function LiteracyRateGraph(props) {

  const MLData = {
    labels,
    datasets: [
      {
        label: '% Positive Sentiment, ordered by highest Literacy Rate on the left, lowest on the right. (As classified by the ML Model)',
        data: pSentiment,
        borderColor: 'green',
        backgroundColor: 'green',
      },
      {
        label: '% Negative Sentiment, ordered by highest Literacy Rate on the left, lowest on the right. (As classified by the ML Model)',
        data: nSentiment,
        borderColor: 'red',
        backgroundColor: 'red',
      },
    ],
  }

  const ManualData = {
    labels,
    datasets: [
      {
        label: '% Positive Sentiment, ordered by highest Literacy Rate on the left, lowest on the right. (As classified by Hand)',
        data: tPSentiment,
        borderColor: 'green',
        backgroundColor: 'green',
      },
      {
        label: '% Negative Sentiment, ordered by highest Literacy Rate on the left, lowest on the right. (As classified by Hand)',
        data: tNSentiment,
        borderColor: 'red',
        backgroundColor: 'red',
      },
    ],
  }

  if (props.ML == "Yes") {
    var data = MLData
  } else {
    var data = ManualData
  }

  return <Line options={options} data={data} />;
}
