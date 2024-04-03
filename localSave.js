const home = document.getElementById('home');
const charts = document.getElementById('charts');
const sortStart = document.getElementById('sort-start');
const sortEnd = document.getElementById('sort-end');
const lh = document.getElementById('lh');
const lastLH = document.getElementById('last-lh');
const main = document.querySelector('.main');
const volumeInp = document.querySelector('#volume');
const leftToSortInp = document.querySelector('#left-to-sort');
const chart = document.querySelector('.charts');

const couriersView = document.querySelector('.couriers');
const couriers = document.getElementById('couriers');
const apmPE = document.getElementById('apmP');
const apmVE = document.getElementById('apmV');
const d2dPE = document.getElementById('d2dP');
const d2dVE = document.getElementById('d2dV');

export let idZero = localStorage.hasOwnProperty('30min0')
  ? localStorage.getItem('30min0')
  : 0;
export let idOne = localStorage.hasOwnProperty('30min1')
  ? localStorage.getItem('30min1')
  : 0;
export let idTwo = localStorage.hasOwnProperty('30min2')
  ? localStorage.getItem('30min2')
  : 0;
export let idThree = localStorage.hasOwnProperty('30min3')
  ? localStorage.getItem('30min3')
  : 0;
export let idFour = localStorage.hasOwnProperty('30min4')
  ? localStorage.getItem('30min4')
  : 0;
export let idFive = localStorage.hasOwnProperty('30min5')
  ? localStorage.getItem('30min5')
  : 0;
export let idSix = localStorage.hasOwnProperty('30min6')
  ? localStorage.getItem('30min6')
  : 0;
export let idSeven = localStorage.hasOwnProperty('30min7')
  ? localStorage.getItem('30min7')
  : 0;
export let idEight = localStorage.hasOwnProperty('30min8')
  ? localStorage.getItem('30min8')
  : 0;
export let idNine = localStorage.hasOwnProperty('30min9')
  ? localStorage.getItem('30min9')
  : 0;
export let idTen = localStorage.hasOwnProperty('30min10')
  ? localStorage.getItem('30min10')
  : 0;
export let idEleven = localStorage.hasOwnProperty('30min11')
  ? localStorage.getItem('30min11')
  : 0;
export let idTwelve = localStorage.hasOwnProperty('30min12')
  ? localStorage.getItem('30min12')
  : 0;

export let idZeroLabel = localStorage.hasOwnProperty('30min0Label')
  ? localStorage.getItem('30min0Label')
  : 0;
export let idOneLabel = localStorage.hasOwnProperty('30min1Label')
  ? localStorage.getItem('30min1Label')
  : 0;
export let idTwoLabel = localStorage.hasOwnProperty('30min2Label')
  ? localStorage.getItem('30min2Label')
  : 0;
export let idThreeLabel = localStorage.hasOwnProperty('30min3Label')
  ? localStorage.getItem('30min3Label')
  : 0;
export let idFourLabel = localStorage.hasOwnProperty('30min4Label')
  ? localStorage.getItem('30min4Label')
  : 0;
export let idFiveLabel = localStorage.hasOwnProperty('30min5Label')
  ? localStorage.getItem('30min5Label')
  : 0;
export let idSixLabel = localStorage.hasOwnProperty('30min6Label')
  ? localStorage.getItem('30min6Label')
  : 0;
export let idSevenLabel = localStorage.hasOwnProperty('30min7Label')
  ? localStorage.getItem('30min7Label')
  : 0;
export let idEightLabel = localStorage.hasOwnProperty('30min8Label')
  ? localStorage.getItem('30min8Label')
  : 0;
export let idNineLabel = localStorage.hasOwnProperty('30min9Label')
  ? localStorage.getItem('30min9Label')
  : 0;
export let idTenLabel = localStorage.hasOwnProperty('30min10Label')
  ? localStorage.getItem('30min10Label')
  : 0;
export let idElevenLabel = localStorage.hasOwnProperty('30min11Label')
  ? localStorage.getItem('30min11Label')
  : 0;
export let idTwelveLabel = localStorage.hasOwnProperty('30min12Label')
  ? localStorage.getItem('30min12Label')
  : 0;

export let activeView = localStorage.hasOwnProperty('activeView')
  ? localStorage.getItem('activeView')
  : localStorage.setItem('activeView', 'home');

export let volume = localStorage.hasOwnProperty('volume')
  ? localStorage.getItem('volume')
  : localStorage.setItem('volume', 0);

export let leftToSort = localStorage.hasOwnProperty('leftToSort')
  ? localStorage.getItem('leftToSort')
  : localStorage.setItem('leftToSort', 0);

export let apmP = localStorage.hasOwnProperty('apmP')
  ? localStorage.getItem('apmP')
  : localStorage.setItem('apmP', 0);

export let apmV = localStorage.hasOwnProperty('apmV')
  ? localStorage.getItem('apmV')
  : localStorage.setItem('apmV', 0);

export let d2dP = localStorage.hasOwnProperty('d2dP')
  ? localStorage.getItem('d2dP')
  : localStorage.setItem('d2dP', 0);

export let d2dV = localStorage.hasOwnProperty('d2dV')
  ? localStorage.getItem('d2dV')
  : localStorage.setItem('d2dV', 0);

let sort30min = [];
export let sort30minArr = [
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

export let sortStartValue = localStorage.hasOwnProperty('sortStart')
  ? localStorage.getItem('sortStart')
  : localStorage.setItem('sortStart', '00:00');
export let sortEndValue = localStorage.hasOwnProperty('sortEnd')
  ? localStorage.getItem('sortEnd')
  : localStorage.setItem('sortEnd', '00:00');
export let lhValue = localStorage.hasOwnProperty('LH')
  ? localStorage.getItem('LH')
  : localStorage.setItem('LH', 0);
export let lastLHValue = localStorage.hasOwnProperty('lastLH')
  ? localStorage.getItem('lastLH')
  : localStorage.setItem('lastLH', '00:00');
let howClicks = localStorage.hasOwnProperty('howClick')
  ? localStorage.getItem('howClick')
  : 0;

// Reset
const showButton = document.getElementById('reset');
const favDialog = document.getElementById('favDialog');
const confirmBtn = favDialog.querySelector('#confirmBtn');

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener('click', () => {
  favDialog.showModal();
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener('click', (event) => {
  ResetSaveData(); // Have to send the select box value here.
});

const ResetSaveData = () => {
  localStorage.setItem('30min0', 0);
  localStorage.setItem('30min1', 0);
  localStorage.setItem('30min2', 0);
  localStorage.setItem('30min3', 0);
  localStorage.setItem('30min4', 0);
  localStorage.setItem('30min5', 0);
  localStorage.setItem('30min6', 0);
  localStorage.setItem('30min7', 0);
  localStorage.setItem('30min8', 0);
  localStorage.setItem('30min9', 0);
  localStorage.setItem('30min10', 0);
  localStorage.setItem('30min11', 0);
  localStorage.setItem('30min12', 0);
  localStorage.setItem('30min0Label', '');
  localStorage.setItem('30min1Label', '');
  localStorage.setItem('30min2Label', '');
  localStorage.setItem('30min3Label', '');
  localStorage.setItem('30min4Label', '');
  localStorage.setItem('30min5Label', '');
  localStorage.setItem('30min6Label', '');
  localStorage.setItem('30min7Label', '');
  localStorage.setItem('30min8Label', '');
  localStorage.setItem('30min9Label', '');
  localStorage.setItem('30min10Label', '');
  localStorage.setItem('30min11Label', '');
  localStorage.setItem('30min12Label', '');
  localStorage.setItem('howClick', -1);
  localStorage.setItem('lastLH', '00:00');
  localStorage.setItem('LH', 0);
  localStorage.setItem('sortEnd', '00:00');
  localStorage.setItem('sortStart', '00:00');
  localStorage.setItem('d2dV', 0);
  localStorage.setItem('d2dP', 0);
  localStorage.setItem('apmP', 0);
  localStorage.setItem('apmV', 0);
  localStorage.setItem('volume', 0);
  localStorage.setItem('leftToSort', 0);

  location.reload();
};
for (let i = 0; i < 13; i++) {
  sort30min.push(localStorage.getItem('30min' + i + 'Label'));
}

const Adding30min = () => {
  let temp = localStorage.getItem('howClick');
  temp++;
  howClicks = temp;
  localStorage.setItem('howClick', temp);
  if (howClicks > 12) {
    localStorage.setItem('howClick', 0);
  }
};

export const SaveActive = (value) => {
  activeView = value;
  localStorage.setItem('activeView', value);
};
export const SaveVolume = (value) => {
  volume = value;
  localStorage.setItem('volume', value);
};
export const SaveLeftToSort = (value) => {
  leftToSort = value;
  localStorage.setItem('leftToSort', value);
};
export const SaveSortStart = (value) => {
  sortStartValue = value;
  localStorage.setItem('sortStart', value);
};

export const Save30min = (value, hour) => {
  var temp = sort30min.findIndex((el) => el == hour);
  var tempV = sort30min[temp];

  if (tempV === hour) {
    localStorage.setItem('30min' + temp, value);
  } else {
    Adding30min();
    localStorage.setItem('30min' + howClicks, value);
    localStorage.setItem('30min' + howClicks + 'Label', hour);
  }
};
export const SaveSortEnd = (value) => {
  sortEndValue = value;
  localStorage.setItem('sortEnd', value);
};
export const SaveLH = (value) => {
  lhValue = value;
  localStorage.setItem('LH', value);
};
export const SaveLastLH = (value) => {
  lastLHValue = value;
  localStorage.setItem('lastLH', value);
};
export const SaveApmP = (value) => {
  apmP = value;
  localStorage.setItem('apmP', value);
};
export const SaveApmV = (value) => {
  apmV = value;
  localStorage.setItem('apmV', value);
};
export const SaveD2dP = (value) => {
  d2dP = value;
  localStorage.setItem('d2dP', value);
};
export const SaveD2dV = (value) => {
  d2dV = value;
  localStorage.setItem('d2dV', value);
};

const LoadData = () => {
  volumeInp.value = volume;
  leftToSortInp.value = leftToSort;
  sortStart.value = sortStartValue;
  sortEnd.value = sortEndValue;
  lh.value = lhValue;
  lastLH.value = lastLHValue;
  apmPE.value = apmP;
  apmVE.value = apmV;
  d2dPE.value = d2dP;
  d2dVE.value = d2dV;

  if (activeView === 'home') {
    main.classList.remove('not-visible');
    chart.classList.add('not-visible');
    home.classList.add('active');
    charts.classList.remove('active');
    couriers.classList.remove('active');
    couriersView.classList.add('not-visible');
  } else if (activeView === 'charts') {
    main.classList.add('not-visible');
    chart.classList.remove('not-visible');
    home.classList.remove('active');
    charts.classList.add('active');
    couriers.classList.remove('active');
    couriersView.classList.add('not-visible');
  } else if (activeView === 'couriers') {
    main.classList.add('not-visible');
    chart.classList.add('not-visible');
    home.classList.remove('active');
    charts.classList.remove('active');
    couriers.classList.add('active');
    couriersView.classList.remove('not-visible');
  }
};
window.onload = LoadData();
