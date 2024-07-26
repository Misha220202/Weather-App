import { updateWeatherForecast } from './fetchData.js';
import { getData } from './dataStore.js';

const dateSwitch = document.querySelector('.dateSwitch');
dateSwitch.addEventListener('click', async (event) => {
  const now = dateSwitch.querySelector('#now');
  const next7Days = dateSwitch.querySelector('#next7Days');
  const target = event.target;
  if (target.id == 'now') {
    now.classList.add('chosen');
    next7Days.classList.remove('chosen');
    dateSwitch.setAttribute('value', 'now');
  } else if (target.id == 'next7Days') {
    now.classList.remove('chosen');
    next7Days.classList.add('chosen');
    dateSwitch.setAttribute('value', 'next7Days');
  }
  const data = await getData();
  updateWeatherForecast(data);
});

export const getDate = () => dateSwitch.getAttribute('value');
