document.addEventListener('DOMContentLoaded', function () {
  const HOURS = 24;
  const MINUTES = 60;
  const PASSENGERS = 11;

  const ul_hours = document.getElementById('ul_hours');
  const ul_minutes = document.getElementById('ul_minutes');

  for (let i = 1; i < HOURS; i++) {
    const option = document.createElement('li');
    option.className = 'select__item';
    option.innerText = i;
    ul_hours.appendChild(option);
  }

  for (let i = 1; i < MINUTES; i++) {
    const option = document.createElement('li');
    option.className = 'select__item';
    option.innerText = i;
    ul_minutes.appendChild(option);
  }

  for (let i = 2; i < PASSENGERS; i++) {
    const option = document.createElement('li');
    option.className = 'select__item';
    option.innerText = i;
    ul_passengers.appendChild(option);
  }
})