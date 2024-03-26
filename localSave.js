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
const barCharts = document.querySelector('.bar-charts');

export let activeView = 'home';
export let volume = 0;
export let leftToSort = 0;
let sort30min = '0,0,0,0,0,0,0,0,0,0,0,0,0';
export let sort30minArr = [];
export let sortStartValue = '';
export let sortEndValue = '';
export let lhValue = 0;
export let lastLHValue = '';

Storage.prototype.set = function (key, obj) {
  var t = typeof obj;
  if (t === 'undefined' || obj === null) this.removeItem(key);
  this.setItem(key, t === 'object' ? JSON.stringify(obj) : obj);
  return obj;
};

Storage.prototype.get = function (key) {
  var obj = this.getItem(key);
  try {
    var j = JSON.parse(obj);
    if (j && typeof j === 'object') return j;
  } catch (e) {}
  return obj;
};
Storage.prototype.assign = function (key, obj_merge) {
  var obj = this.get(key);
  if (typeof obj !== 'object' || typeof obj_merge !== 'object') return null;
  Object.assign(obj, obj_merge);
  return this.set(key, obj);
};

Storage.prototype.has = window.hasOwnProperty;
Storage.prototype.remove = window.removeItem;

Storage.prototype.keys = function () {
  return Object.keys(this.valueOf());
};
for (let i = 0; i <= 12; i++) {
  sort30minArr = sort30min.split(',');
}

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

export const Save30min = (value, id) => {
  sort30minArr[id] = value;
  localStorage.set('30min', sort30minArr);
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

const LoadData = () => {
  // if (document.body.clientHeight < 1100) {
  //   barCharts.innerHTML = '<canvas id="bar-chart" height="110"></canvas>'
  // } else {
  //   barCharts.innerHTML = '<canvas id="bar-chart" height="150"></canvas>'
  // }

  sort30minArr = localStorage.hasOwnProperty('30min')
    ? localStorage.get('30min')
    : localStorage.set('30min', '0');
  sortStartValue = localStorage.hasOwnProperty('sortStart')
    ? localStorage.getItem('sortStart')
    : localStorage.setItem('sortStart', '00:00');
  volume = localStorage.hasOwnProperty('volume')
    ? localStorage.getItem('volume')
    : localStorage.setItem('volume', '0');
  leftToSort = localStorage.hasOwnProperty('leftToSort')
    ? localStorage.getItem('leftToSort')
    : localStorage.setItem('leftToSort', '0');
  activeView = localStorage.hasOwnProperty('activeView')
    ? localStorage.getItem('activeView')
    : localStorage.setItem('activeView', 'home');
  sortEndValue = localStorage.hasOwnProperty('sortEnd')
    ? localStorage.getItem('sortEnd')
    : localStorage.setItem('sortEnd', '00:00');
  lhValue = localStorage.hasOwnProperty('LH')
    ? localStorage.getItem('LH')
    : localStorage.setItem('LH', '0');
  lastLHValue = localStorage.getItem('lastLH');
  localStorage.hasOwnProperty('lastLH')
    ? localStorage.getItem('lastLH')
    : localStorage.setItem('lastLH', '00:00');

  volumeInp.value = volume;
  leftToSortInp.value = leftToSort;
  sortStart.value = sortStartValue;
  sortEnd.value = sortEndValue;
  lh.value = lhValue;
  lastLH.value = lastLHValue;

  if (activeView === 'home') {
    main.classList.remove('not-visible');
    chart.classList.add('not-visible');
    home.classList.add('active');
    charts.classList.remove('active');
  } else if (activeView === 'charts') {
    main.classList.add('not-visible');
    chart.classList.remove('not-visible');
    home.classList.remove('active');
    charts.classList.add('active');
  }
};
window.onload = LoadData();
