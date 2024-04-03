import { activeView, SaveActive } from './localSave.js';

const home = document.getElementById('home');
const charts = document.getElementById('charts');
const couriers = document.getElementById('couriers');
const main = document.querySelector('.main');
const couriersView = document.querySelector('.couriers');
const chart = document.querySelector('.charts');
const startStop = document.querySelector('#start-stop');
const img = document.querySelector('#img');

let active = activeView;
let isStart = false;
let inter = 0;
if (isStart) {
  img.src = 'stop.png';
} else {
  img.src = 'video.png';
}

const onClickNav = (id) => {
  active = id;
  if (active === 'home') {
    main.classList.remove('not-visible');
    chart.classList.add('not-visible');
    home.classList.add('active');
    charts.classList.remove('active');
    couriers.classList.remove('active');
    couriersView.classList.add('not-visible');
    SaveActive(active);
  } else if (active === 'charts') {
    main.classList.add('not-visible');
    chart.classList.remove('not-visible');
    home.classList.remove('active');
    charts.classList.add('active');
    couriers.classList.remove('active');
    couriersView.classList.add('not-visible');
    SaveActive(active);
  } else if (active === 'couriers') {
    main.classList.add('not-visible');
    chart.classList.add('not-visible');
    home.classList.remove('active');
    charts.classList.remove('active');
    couriers.classList.add('active');
    couriersView.classList.remove('not-visible');
    SaveActive(active);
  }
};
home.addEventListener('click', () => onClickNav('home'));
charts.addEventListener('click', () => onClickNav('charts'));
couriers.addEventListener('click', () => onClickNav('couriers'));

startStop.addEventListener('click', () => {
  if (!isStart) {
    inter = setInterval(SwitchView, 30000);
    isStart = true;
    img.src = 'stop.png';
  } else {
    clearInterval(inter);
    isStart = false;
    img.src = 'video.png';
  }
});

const SwitchView = () => {
  if (active === 'home') {
    main.classList.remove('not-visible');
    chart.classList.add('not-visible');
    home.classList.add('active');
    charts.classList.remove('active');
    SaveActive(active);
    active = 'charts';
    couriers.classList.remove('active');
    couriersView.classList.add('not-visible');
  } else if (active === 'charts') {
    main.classList.add('not-visible');
    chart.classList.remove('not-visible');
    home.classList.remove('active');
    charts.classList.add('active');
    SaveActive(active);
    active = 'couriers';
    couriers.classList.remove('active');
    couriersView.classList.add('not-visible');
  } else if (active === 'couriers') {
    main.classList.add('not-visible');
    chart.classList.add('not-visible');
    home.classList.remove('active');
    charts.classList.remove('active');
    SaveActive(active);
    active = 'home';
    couriers.classList.add('active');
    couriersView.classList.remove('not-visible');
  }
};
