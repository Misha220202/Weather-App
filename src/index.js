import './index.css';
import { startClock } from './scripts/time.js';
import {
  fetchData,
  updateAddress,
  updateWeatherForecast,
} from './scripts/fetchData.js';

startClock();

window.onload = async () => {
  const data = await fetchData('calgary');
  updateAddress(data);
  updateWeatherForecast(data);
};
