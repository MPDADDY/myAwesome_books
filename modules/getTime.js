import { DateTime } from './luxon.js';

const GetTime = () => {
  const time = document.getElementById('time');

  const now = DateTime.now();
  const formattedTime = now.toLocaleString(DateTime.DATETIME_MED);

  time.innerHTML = formattedTime;
};

export default GetTime;