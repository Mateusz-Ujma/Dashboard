import { volume, leftToSort } from './loadData.js';
import {
  idEight,
  idEightLabel,
  idEleven,
  idElevenLabel,
  idFive,
  idFiveLabel,
  idFour,
  idFourLabel,
  idNine,
  idNineLabel,
  idOne,
  idOneLabel,
  idSeven,
  idSevenLabel,
  idSix,
  idSixLabel,
  idTen,
  idTenLabel,
  idThree,
  idThreeLabel,
  idTwelve,
  idTwelveLabel,
  idTwo,
  idTwoLabel,
  idZero,
  idZeroLabel,
} from './localSave.js';
const ctx = document.getElementById('circle-chart');
const bar = document.getElementById('bar-chart');

let sumLeft = Math.abs(leftToSort.value - volume.value);
let sumVol = Math.abs(sumLeft - volume.value);
let value = [sumLeft, sumVol];
export let on30minSort = [
  idZero,
  idOne,
  idTwo,
  idThree,
  idFour,
  idFive,
  idSix,
  idSeven,
  idEight,
  idNine,
  idTen,
  idEleven,
  idTwelve,
];
let on30minSortLables = [
  idZeroLabel,
  idOneLabel,
  idTwoLabel,
  idThreeLabel,
  idFourLabel,
  idFiveLabel,
  idSixLabel,
  idSevenLabel,
  idEightLabel,
  idNineLabel,
  idTenLabel,
  idElevenLabel,
  idTwelveLabel,
];

export const circle = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [
      {
        data: value,
        backgroundColor: ['rgb(233, 229, 0,0.9)', 'rgb(210, 210, 210,0.5)'],
        borderColor: ['rgb(233, 229, 0,0.3)'],
        borderWidth: 2,
      },
    ],
  },
});

new Chart(bar, {
  type: 'bar',
  data: {
    labels: on30minSortLables,
    datasets: [
      {
        label: 'Wydajność na 30min',
        data: on30minSort,
        backgroundColor: ['rgb(233, 229, 0)'],
        barThickness: 40,
      },
    ],
  },
  options: {
    scales: {
      x: {
        title: {
          font: {
            size: 14,
            weight: 'bold',
          },
          color: 'white',
        },

        ticks: {
          font: {
            size: 30,
            weight: 'bold',
          },
          color: 'white',
        },
      },

      y: {
        title: {
          font: {
            size: 30,
            weight: 'bold',
          },
          color: 'white',
        },

        ticks: {
          beginAtZero: true,
          font: {
            size: 30,
            weight: 'bold',
          },
          color: 'white',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
