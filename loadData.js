import {
  SaveVolume,
  SaveLeftToSort,
  Save30min,
  SaveSortStart,
  SaveSortEnd,
  SaveLH,
  SaveLastLH,
} from './localSave.js'

const sortStart = document.getElementById('sort-start')
const sortEnd = document.getElementById('sort-end')
const lh = document.getElementById('lh')
const lastLH = document.getElementById('last-lh')
const date = document.querySelector('#date')
const hour = document.getElementById('hour')
export const volume = document.querySelector('#volume')
export const leftToSort = document.querySelector('#left-to-sort')
export const on30min = document.querySelector('#on-30min')

volume.addEventListener('change', () => {
  SaveVolume(volume.value)
  location.reload()
})
leftToSort.addEventListener('change', () => {
  SaveLeftToSort(leftToSort.value)
  location.reload()
})
hour.addEventListener('change', () => {
  Save30min(on30min.value, hour.value)
  location.reload()
})
sortStart.addEventListener('change', () => {
  SaveSortStart(sortStart.value)
})
sortEnd.addEventListener('change', () => {
  SaveSortEnd(sortEnd.value)
})
lh.addEventListener('change', () => {
  SaveLH(lh.value)
})
lastLH.addEventListener('change', () => {
  SaveLastLH(lastLH.value)
})

date.innerHTML = new Date().toLocaleDateString()

function myClock() {
  setTimeout(function () {
    const d = new Date()
    const n = d.toLocaleTimeString()
    const clocks = document.querySelectorAll('.clock')
    clocks.forEach((clock) => {
      clock.innerHTML = n
    })
    myClock()
  }, 1000)
}
myClock()
