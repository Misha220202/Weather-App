import celsiusImage from '../assets/images/celsius.svg';
import fahrenheitImage from '../assets/images/fahrenheit.svg';
import { updateWeatherForecast } from './fetchData.js';
import { getData } from './dataStore.js';

const unitSwitch = document.querySelector('.unitSwitch');
unitSwitch.addEventListener('click', async () => {
  const icon = unitSwitch.querySelector('img');
  if (unitSwitch.getAttribute('value') == 'celsius') {
    unitSwitch.setAttribute('value', 'fahrenheit');
    icon.src = fahrenheitImage;
  } else {
    unitSwitch.setAttribute('value', 'celsius');
    icon.src = celsiusImage;
  }
  const data = await getData();
  updateWeatherForecast(data);
});

const getUnit = () => unitSwitch.getAttribute('value');

export const showTemp = (temp) => {
  const unit = getUnit();
  return unit == 'celsius'
    ? temp + '℃'
    : ((temp * 9) / 5 + 32).toFixed(1) + '℉';
};
