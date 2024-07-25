import { format, addDays } from 'date-fns';

const showCurrentTimeFormatted = () => {
  const now = new Date();
  const formattedTime = format(now, 'yyyy-MM-dd HH:mm:ss EEEE');
  const time = document.querySelector('.time');
  time.textContent = formattedTime;
};
export const startClock = () => setInterval(showCurrentTimeFormatted, 1000);

export const currentDate = () => new Date(new Date().setHours(0, 0, 0, 0));
export const currentDateFormatted = () => format(currentDate(), 'yyyy-MM-dd');
export const the7thDay = () => addDays(currentDate(), 7);
export const the7thDayFormatted = () => format(the7thDayFormatted(), 'yyyy-MM-dd');