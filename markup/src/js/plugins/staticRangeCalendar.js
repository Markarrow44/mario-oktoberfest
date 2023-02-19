function createCalendarBody(elem, dates, format) {
	const daysBody = elem.querySelector('tbody');

	if (!daysBody) return;

	let body = '';
	let firstDate = new Date(dates[0]);
	let lastDate = new Date(dates[dates.length - 1]);

	// spaces for the first row
	// from Monday till the first day of the month
	// * * * 1  2  3  4
	for (let i = 0; i < getDay(firstDate); i++) {
		body += '<td></td>';
	}

	dates.forEach(date => {
		let d = new Date(date);
		let isoDate = date.toISOString().split('T')[0];
		let isoDateArr = isoDate.split('-');
		let day = isoDateArr[2];
		let monthShort = d.toLocaleString(elem.dataset.lang || document.documentElement.lang || 'default', { month: 'short' });

		body += `<td><label><input type="radio" value="${isoDate}" data-label="${day}. ${monthShort}" name="${elem.dataset.inputName || 'day'}"><span>${day}</span></label></td>`;

		if (getDay(d) % 7 == 6) { // sunday, last day of week - newline
			body += '</tr><tr>';
		}
	});

	// add spaces after last days of month for the last row
	// 29 30 31 * * * *
	if (getDay(lastDate) != 0) {
		for (let i = getDay(lastDate); i < 7; i++) {
			body += '<td></td>';
		}
	}

	// close the table
	body += '</tr>';

	daysBody.innerHTML = body;
}

function getDatesInRange(startDate, endDate) {
  const date = new Date(startDate.getTime());

  const dates = [];

  while (date <= endDate) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return dates;
}

function getDay(date) { // get day number from 0 (monday) to 6 (sunday)
	let day = date.getDay();
	if (day == 0) day = 7; // make Sunday (0) the last day
	return day - 1;
}

export { createCalendarBody, getDatesInRange, getDay };