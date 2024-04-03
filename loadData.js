import {
  SaveVolume,
  SaveLeftToSort,
  Save30min,
  SaveSortStart,
  SaveSortEnd,
  SaveLH,
  SaveLastLH,
  SaveApmP,
  SaveApmV,
  SaveD2dP,
  SaveD2dV,
} from './localSave.js';

const sortStart = document.getElementById('sort-start');
const sortEnd = document.getElementById('sort-end');
const lh = document.getElementById('lh');
const lastLH = document.getElementById('last-lh');
const date = document.querySelectorAll('.date');
const hourbtn = document.getElementById('save30min-btn');
const hour = document.getElementById('hour');
const apmPE = document.getElementById('apmP');
const apmVE = document.getElementById('apmV');
const d2dPE = document.getElementById('d2dP');
const d2dVE = document.getElementById('d2dV');

export const volume = document.querySelector('#volume');
export const leftToSort = document.querySelector('#left-to-sort');
export const on30min = document.querySelector('#on-30min');

volume.addEventListener('change', () => {
  SaveVolume(volume.value);
  location.reload();
});

leftToSort.addEventListener('change', () => {
  SaveLeftToSort(leftToSort.value);
  location.reload();
});

hourbtn.addEventListener('click', () => {
  Save30min(on30min.value, hour.value);
  location.reload();
});
sortStart.addEventListener('change', () => {
  SaveSortStart(sortStart.value);
});
sortEnd.addEventListener('change', () => {
  SaveSortEnd(sortEnd.value);
});
lh.addEventListener('change', () => {
  SaveLH(lh.value);
});
lastLH.addEventListener('change', () => {
  SaveLastLH(lastLH.value);
});
apmPE.addEventListener('change', () => {
  SaveApmP(apmPE.value);
});
apmVE.addEventListener('change', () => {
  SaveApmV(apmVE.value);
});
d2dPE.addEventListener('change', () => {
  SaveD2dP(d2dPE.value);
});
d2dVE.addEventListener('change', () => {
  SaveD2dV(d2dVE.value);
});

date[0].innerHTML = new Date().toLocaleDateString();
date[1].innerHTML = new Date().toLocaleDateString();

function myClock() {
  setTimeout(function () {
    const d = new Date();
    const n = d.toLocaleTimeString();
    const clocks = document.querySelectorAll('.clock');
    clocks.forEach((clock) => {
      clock.innerHTML = n;
    });
    myClock();
  }, 1000);
}
myClock();
