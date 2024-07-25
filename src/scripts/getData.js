import { currentDateFormatted, the7thDayFormatted } from './time';

const apiKey = '5K27ZGE4KBFGD2F7QMQ64UGYK';

const getData = async (locationName) => {
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
    return data;
}

const location = document.querySelector('.location');
const locationInput = location.querySelector('#locationInput');
const result = location.querySelector('#result');
const searchButton = location.querySelector('img');

window.onload = async () => {
    const address = await getData('calgary');
    result.textContent = address.resolvedAddress;
}

searchButton.addEventListener('click', () => {
    locationInput.style.display = 'block';
    searchButton.style.display = 'none';
    result.style.display = 'none';
})

const dateSwitch = document.querySelector('.dateSwitch');
dateSwitch.addEventListener('click', (event) => {
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
})

export const getInfo = async () => {

    locationInput.addEventListener('keypress', async (event) => {
        if (event.key === 'Enter') {
            const data = await getData(locationInput.value);
            console.log(data);
            if (data.resolvedAddress) {

                const showAddress = (() => {
                    result.textContent = data.resolvedAddress;
                    locationInput.value = '';
                    locationInput.style.display = 'none';
                    searchButton.style.display = 'block';
                    result.style.display = 'block';
                })();

                const group = dateSwitch.value=='now'?'currentConditions':'days';

                const showWeatherForecast = ((group) => {
                    const container = document.querySelector('.container');

                    if(group=='now') {
                       const currentConditions = data.currentConditions; 
                       
                    }
                })();


            } else {
                alert(data);
            }
        }
    });
}