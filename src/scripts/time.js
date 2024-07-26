import { format } from 'date-fns';

const showCurrentTimeFormatted = () => {
  const now = new Date();
  const formattedTime = format(now, 'yyyy-MM-dd HH:mm:ss EEEE');
  const time = document.querySelector('.time');
  time.textContent = formattedTime;
};
export const startClock = () => setInterval(showCurrentTimeFormatted, 1000);
