let start = '',
  end = '';
let datepickerOptionsFirst = {
  id: 1,
  startDay: 1, // Calendar week starts on a Monday.
  customDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  customMonths: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
  overlayButton: "Применить",
  overlayPlaceholder: 'Введите год',
  formatter: (input, date, instance) => {
    input.value = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' })
  },
  onSelect: (instance, date) => {
    date.setDate(date.getDate() + 1)
    let zeroM = (date.getMonth() < 10) ? '0' : '';
    let mont = zeroM + (date.getMonth() + 1);
    let zeroD = (date.getDate() < 10) ? '0' : '';
    let today = zeroD + date.getDate();
    instance.hide();
    end.show();
    document.querySelector('.js-end-date').value = today + '.' + mont + '.' + date.getFullYear();
  }
};
let datepickerOptions = {
  id: 1,
  startDay: 1, // Calendar week starts on a Monday.
  customDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  customMonths: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
  overlayButton: "Применить",
  overlayPlaceholder: 'Введите год',
  formatter: (input, date, instance) => {
    input.value = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' })
  }
};
start = datepicker('#datepick', datepickerOptions);
// end = datepicker_min_default()('.js-end-date', datepickerOptions);