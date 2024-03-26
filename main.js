import { volume, leftToSort } from './loadData.js'
import { sort30minArr } from './localSave.js'
const ctx = document.getElementById('circle-chart')
const bar = document.getElementById('bar-chart')

let sumLeft = Math.abs(leftToSort.value - volume.value)
let sumVol = Math.abs(sumLeft - volume.value)
let value = [sumLeft, sumVol]
let on30minSort = sort30minArr

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
})

new Chart(bar, {
  type: 'bar',
  data: {
    labels: [
      '2:30',
      '3:00',
      '3:30',
      '4:00',
      '4:30',
      '5:00',
      '5:30',
      '6:00',
      '6:30',
      '7:00',
      '7:30',
      '8:00',
      '8:30',
    ],
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
})
