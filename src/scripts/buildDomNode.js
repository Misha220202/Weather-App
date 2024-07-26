import temperatureImage from '../assets/images/temperature.svg';
import humidityImage from '../assets/images/humidity.svg';
import chanceRainImage from '../assets/images/chanceRain.svg';
import windSpeedImage from '../assets/images/windSpeed.svg';

import { weatherIcons } from './weatherIcons.js';
import { showTemp } from './unitSwitch.js';

export const buildCurrentWeatherForecastNode = (data) => {
  const currentConditions = data.currentConditions;
  const todayConditions = data.days[0];
  const hourlyConditions = data.days[0].hours;
  const now = document.createElement('div');
  now.classList.add('now');
  now.innerHTML = `
    <div class="currentConditions">
        <div class="temperature">
            <h1 class="temperature">${showTemp(currentConditions.temp)}</h1>
            <p class="range">
                <span class="high">H: ${showTemp(todayConditions.tempmax)}</span>
                <span class="low">L: ${showTemp(todayConditions.tempmin)}</span>
            </p>
        </div>
        <div class="condition">
            <img src="${weatherIcons[currentConditions.icon]}" alt="condition">
            <pclass="condition">${currentConditions.conditions}</p>
        </div>
    </div>
    <div class="detailedConditions">
        <div class="feelsLike">
            <img src="${temperatureImage}" alt="temperature">
            <div>
                <p>Feels Like</p>
                <h3>${showTemp(currentConditions.feelslike)}</h3>
            </div>
        </div>
        <div class="humidity">
            <img src="${humidityImage}" alt="humidity">
            <div>
                <p>Humidity</p>
                <h3>${currentConditions.humidity + '%'}</h3>
            </div>
        </div>
        <div class="chanceRain">
            <img src="${chanceRainImage}" alt="chanceRain">
            <div>
                <p>Chance of Rain</p>
                <h3>${currentConditions.precipprob + '%'}</h3>
            </div>
        </div>
        <div class="windSpeed">
            <img src="${windSpeedImage}" alt="windSpeed">
            <div>
                <p>Wind Speed</p>
                <h3>${currentConditions.windspeed + 'Km/h'}</h3>
            </div>
        </div>
    </div>
    <div class="hourlyWeather">
        <div id="hours0">
            <span>0:00 ${showTemp(hourlyConditions[0].temp)}</span>
            <img src="${weatherIcons[hourlyConditions[0].icon]}" alt="condition">
        </div>
        <div id="hours1">
            <span>1:00 ${showTemp(hourlyConditions[1].temp)}</span>
            <img src="${weatherIcons[hourlyConditions[1].icon]}" alt="condition">
        </div>
        <div id="hours2">
            <span>2:00 ${showTemp(hourlyConditions[2].temp)}</span>
            <img src="${weatherIcons[hourlyConditions[2].icon]}" alt="condition">
        </div>
        <div id="hours3">
            <span>3:00 ${showTemp(hourlyConditions[3].temp)}</span>
            <img src="${weatherIcons[hourlyConditions[3].icon]}" alt="condition">
        </div>
        <div id="hours4">
            <span>4:00 ${showTemp(hourlyConditions[4].temp)}</span>
            <img src="${weatherIcons[hourlyConditions[4].icon]}" alt="condition">
        </div>
        <div id="hours5">
            <span>5:00 ${showTemp(hourlyConditions[5].temp)}</span>
            <img src="${weatherIcons[hourlyConditions[5].icon]}" alt="condition">
        </div>
        <div id="hours6">
            <span>6:00 ${showTemp(hourlyConditions[6].temp)}</span>
            <img src="${weatherIcons[hourlyConditions[6].icon]}" alt="condition">
        </div>
        <div id="hours7">
            <span>7:00 ${showTemp(hourlyConditions[7].temp)}</span>
            <img src="${weatherIcons[hourlyConditions[7].icon]}" alt="condition">
        </div>
        <div id="hours8">
            <span>8:00 ${showTemp(hourlyConditions[8].temp)}</span>
            <img src="${weatherIcons[hourlyConditions[8].icon]}" alt="condition">
        </div>
        <div id="hours9">
            <span>9:00 ${showTemp(hourlyConditions[9].temp)}</span>
            <img src="${weatherIcons[hourlyConditions[9].icon]}" alt="condition">
        </div>
        <div id="hours10">
            <span>10:00 ${showTemp(hourlyConditions[10].temp)}</span>
            <img src="${weatherIcons[hourlyConditions[10].icon]}" alt="condition">
        </div>
        <div id="hours11">
            <span>11:00 ${showTemp(hourlyConditions[11].temp)}</span>
            <img src="${weatherIcons[hourlyConditions[11].icon]}" alt="condition">
        </div>
        <div id="hours12">
            <span>12:00 ${showTemp(hourlyConditions[12].temp)}</span>
            <img src="${weatherIcons[hourlyConditions[12].icon]}" alt="condition">
        </div>
        <div id="hours13">
            <span>13:00 ${showTemp(hourlyConditions[13].temp)}</span>
            <img src="${weatherIcons[hourlyConditions[13].icon]}" alt="condition">
        </div>
        <div id="hours14">
            <span>14:00 ${showTemp(hourlyConditions[14].temp)}</span>
            <img src="${weatherIcons[hourlyConditions[14].icon]}" alt="condition">
        </div>
        <div id="hours15">
            <span>15:00 ${showTemp(hourlyConditions[15].temp)}</span>
            <img src="${weatherIcons[hourlyConditions[15].icon]}" alt="condition">
        </div>
        <div id="hours16">
            <span>16:00 ${showTemp(hourlyConditions[16].temp)}</span>
            <img src="${weatherIcons[hourlyConditions[16].icon]}" alt="condition">
        </div>
        <div id="hours17">
            <span>17:00 ${showTemp(hourlyConditions[17].temp)}</span>
            <img src="${weatherIcons[hourlyConditions[17].icon]}" alt="condition">
        </div>
        <div id="hours18">
            <span>18:00 ${showTemp(hourlyConditions[18].temp)}</span>
            <img src="${weatherIcons[hourlyConditions[18].icon]}" alt="condition">
        </div>
        <div id="hours19">
            <span>19:00 ${showTemp(hourlyConditions[19].temp)}</span>
            <img src="${weatherIcons[hourlyConditions[19].icon]}" alt="condition">
        </div>
        <div id="hours20">
            <span>20:00 ${showTemp(hourlyConditions[20].temp)}</span>
            <img src="${weatherIcons[hourlyConditions[20].icon]}" alt="condition">
        </div>
        <div id="hours21">
            <span>21:00 ${showTemp(hourlyConditions[21].temp)}</span>
            <img src="${weatherIcons[hourlyConditions[21].icon]}" alt="condition">
        </div>
        <div id="hours22">
            <span>22:00 ${showTemp(hourlyConditions[22].temp)}</span>
            <img src="${weatherIcons[hourlyConditions[22].icon]}" alt="condition">
        </div>
        <div id="hours23">
            <span>23:00 ${showTemp(hourlyConditions[23].temp)}</span>
            <img src="${weatherIcons[hourlyConditions[23].icon]}" alt="condition">
        </div>
    </div>
    `;
  return now;
};

export const build7DaysWeatherForecastNode = (data) => {
  const dailyConditions = data.days;
  const next7Days = document.createElement('div');
  next7Days.classList.add('next7Days');
  next7Days.innerHTML = `
    <table>
        <thead>
            <tr>
                <th>Day</th>
                <th>Weather</th>
                <th>Humidity</th>
                <th>Chance of Rain</th>
                <th>Temperature</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Today</td>
                <td>
                    <img src="${weatherIcons[dailyConditions[0].icon]}" alt="weather">
                </td>
                <td>${dailyConditions[0].humidity + '%'}</td>
                <td>${dailyConditions[0].precipprob + '%'}</td>
                <td>
                    <p class="high">H: ${showTemp(dailyConditions[0].tempmax)}</p>
                    <p class="low">L: ${showTemp(dailyConditions[0].tempmin)}</p>
                </td>
            </tr>
            <tr>
                <td>${dailyConditions[1].datetime}</td>
                <td>
                    <img src="${weatherIcons[dailyConditions[1].icon]}" alt="weather">
                </td>
                <td>${dailyConditions[1].humidity + '%'}</td>
                <td>${dailyConditions[1].precipprob + '%'}</td>
                <td>
                    <p class="high">H: ${showTemp(dailyConditions[1].tempmax)}</p>
                    <p class="low">L: ${showTemp(dailyConditions[1].tempmin)}</p>
                </td>
            </tr>
            <tr>
                <td>${dailyConditions[2].datetime}</td>
                <td>
                    <img src="${weatherIcons[dailyConditions[2].icon]}" alt="weather">
                </td>
                <td>${dailyConditions[2].humidity + '%'}</td>
                <td>${dailyConditions[2].precipprob + '%'}</td>
                <td>
                    <p class="high">H: ${showTemp(dailyConditions[2].tempmax)}</p>
                    <p class="low">L: ${showTemp(dailyConditions[2].tempmin)}</p>
                </td>
            </tr>
            <tr>
                <td>${dailyConditions[3].datetime}</td>
                <td>
                    <img src="${weatherIcons[dailyConditions[3].icon]}" alt="weather">
                </td>
                <td>${dailyConditions[3].humidity + '%'}</td>
                <td>${dailyConditions[3].precipprob + '%'}</td>
                <td>
                    <p class="high">H: ${showTemp(dailyConditions[3].tempmax)}</p>
                    <p class="low">L: ${showTemp(dailyConditions[3].tempmin)}</p>
                </td>
            </tr>
            <tr>
                <td>${dailyConditions[4].datetime}</td>
                <td>
                    <img src="${weatherIcons[dailyConditions[4].icon]}" alt="weather">
                </td>
                <td>${dailyConditions[4].humidity + '%'}</td>
                <td>${dailyConditions[4].precipprob + '%'}</td>
                <td>
                    <p class="high">H: ${showTemp(dailyConditions[4].tempmax)}</p>
                    <p class="low">L: ${showTemp(dailyConditions[4].tempmin)}</p>
                </td>
            </tr>
            <tr>
                <td>${dailyConditions[5].datetime}</td>
                <td>
                    <img src="${weatherIcons[dailyConditions[5].icon]}" alt="weather">
                </td>
                <td>${dailyConditions[5].humidity + '%'}</td>
                <td>${dailyConditions[5].precipprob + '%'}</td>
                <td>
                    <p class="high">H: ${showTemp(dailyConditions[5].tempmax)}</p>
                    <p class="low">L: ${showTemp(dailyConditions[5].tempmin)}</p>
                </td>
            </tr>
            <tr>
                <td>${dailyConditions[6].datetime}</td>
                <td>
                    <img src="${weatherIcons[dailyConditions[6].icon]}" alt="weather">
                </td>
                <td>${dailyConditions[6].humidity + '%'}</td>
                <td>${dailyConditions[6].precipprob + '%'}</td>
                <td>
                    <p class="high">H: ${showTemp(dailyConditions[6].tempmax)}</p>
                    <p class="low">L: ${showTemp(dailyConditions[6].tempmin)}</p>
                </td>
            </tr>
        </tbody>
    </table>`;
  return next7Days;
};
