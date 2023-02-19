import DropChoice from '../plugins/dropChoicePlugin';
import {createCalendarBody, getDatesInRange} from '../plugins/staticRangeCalendar';


function initFilterForm() {
	document.querySelectorAll('.js-static-calendar-holder').forEach((holder) => {
		const calendar = holder.querySelector('.js-static-calendar');

		if (!calendar) return;

		const dateFrom = calendar.dataset.isoDateFrom;
		const dateTo = calendar.dataset.isoDateTo;
		const dates = getDatesInRange(new Date(dateFrom), new Date(dateTo));
		const btnPrevDate = holder.querySelector('.js-prev-date');
		const btnNextDate = holder.querySelector('.js-next-date');
		
		createCalendarBody(calendar, dates);

		const fields = calendar.querySelectorAll('input[data-label]');
		const checkedField = [...fields].filter((field) => field.checked)[0];
		const checkedIndex = Array.from(fields).indexOf(checkedField);

		updateBtnsState(checkedIndex - 1, fields.length);

		function updateBtnsState(index, count) {
			if (index < 0) {
				btnPrevDate.setAttribute('disabled', '');
				btnNextDate.setAttribute('disabled', '');
			} else if (index == 0) {
				btnPrevDate.setAttribute('disabled', '');
				btnNextDate.removeAttribute('disabled');
			} else if (index >= count - 1) {
				btnNextDate.setAttribute('disabled', '');
				btnPrevDate.removeAttribute('disabled');
			} else {
				btnPrevDate.removeAttribute('disabled');
				btnNextDate.removeAttribute('disabled');
			}
		}

		function prevDate(e) {
			e && e.preventDefault();

			if (!fields.length) return;

			const checkedField = [...fields].filter((field) => field.checked)[0];
			let checkedIndex = Array.from(fields).indexOf(checkedField);
			let prevField = fields[checkedIndex - 1];

			if (prevField) {
				prevField.click();
				updateBtnsState(checkedIndex - 1, fields.length);
			}
		}

		function nextDate(e) {
			e && e.preventDefault();

			if (!fields.length) return;

			const checkedField = [...fields].filter((field) => field.checked)[0];
			let checkedIndex = Array.from(fields).indexOf(checkedField);
			let nextField = fields[checkedIndex + 1];

			if (nextField) {
				nextField.click();
				updateBtnsState(checkedIndex + 1, fields.length);
			}

		}

		function selectDateHandler() {
			if (!fields.length) return;

			const checkedField = [...fields].filter((field) => field.checked)[0];
			let checkedIndex = Array.from(fields).indexOf(checkedField);

			updateBtnsState(checkedIndex, fields.length);
		}

		if (btnPrevDate) {
			btnPrevDate.addEventListener('click', prevDate);
		}

		if (btnNextDate) {
			btnNextDate.addEventListener('click', nextDate);
		}

		fields.forEach((field) => {
			field.addEventListener('click', selectDateHandler);
		});
	});

	document.querySelectorAll('.js-filter-panel').forEach((holder) => {
		const filterItems = holder.querySelectorAll('.js-custom-choice');
		const clearAllBtn = holder.querySelector('.clear-all-btn');

		filterItems.forEach((item) => {
			const dropChoiceInst = new DropChoice(item, {
				fieldSelector: '[type="radio"], [type="checkbox"]',
				clearBtn: '.clear-btn',
				itemLabel: '[data-default-text]'
			});

			item.DropChoiceInst = dropChoiceInst;
		});

		function clearAll(e) {
			e && e.preventDefault();

			filterItems.forEach((item) => {
				const dropChoiceInst = item.DropChoiceInst;

				if (dropChoiceInst) {
					dropChoiceInst.handlerClearFields();
				}
			});
		}

		if (clearAllBtn) {
			clearAllBtn.addEventListener('click', clearAll);
		}
	});
}

export default initFilterForm;
