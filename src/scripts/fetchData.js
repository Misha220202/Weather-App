import {
  buildCurrentWeatherForecastNode,
  build7DaysWeatherForecastNode,
} from './buildDomNode.js';
import { getDate } from './dateSwitch.js';
import { setData } from './dataStore.js';

const apiKey = '5K27ZGE4KBFGD2F7QMQ64UGYK';
export const fetchData = async (locationName) => {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationName}?unitGroup=metric&key=${apiKey}&contentType=json`;
  let data;
  try {
    const response = await fetch(url);
    if (response.status == 200) {
      data = await response.json();
    } else {
      data = `Location not found`;
    }
  } catch (error) {
    data = `Error: ${error.message}`;
  }
  setData(data);
  console.log(data);
  return data;
};

const location = document.querySelector('.location');
const locationInput = location.querySelector('#locationInput');
const result = location.querySelector('#result');
const searchButton = location.querySelector('img');

searchButton.addEventListener('click', () => {
  locationInput.style.display = 'block';
  searchButton.style.display = 'none';
  result.style.display = 'none';
  document.addEventListener('click', (event) => {
    if (!location.contains(event.target)) {
      locationInput.style.display = 'none';
      searchButton.style.display = 'block';
      result.style.display = 'block';
    }
  });
});

export const updateAddress = (data) => {
  result.textContent = data.resolvedAddress;
  locationInput.value = '';
  locationInput.style.display = 'none';
  searchButton.style.display = 'block';
  result.style.display = 'block';
};

export const updateWeatherForecast = (data) => {
  const container = document.querySelector('.container');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  const date = getDate();
  if (date == 'now') {
    const now = buildCurrentWeatherForecastNode(data);
    container.appendChild(now);
  } else {
    const next7Days = build7DaysWeatherForecastNode(data);
    container.appendChild(next7Days);
  }
};

addEventListener('keypress', async (event) => {
  if (event.key === 'Enter') {
    const data = await fetchData(locationInput.value);
    setData(data);
    if (data.resolvedAddress) {
      updateAddress(data);
      updateWeatherForecast(data);
    } else {
      alert(data);
    }
  }
});
