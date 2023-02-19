class LocationBooking {
	constructor(options) {
		this.options = Object.assign({
			item: ".card-order",
			activeClass: "selected-event"
		},options);

		this.items = document.querySelectorAll(this.options.item);

		if (this.items.length) {
			this.attachEvent();
		}

	}

	attachEvent() {
		this.items.forEach(card => {
			card.addEventListener('click', (e) => this.checkedStateHandler(card));
		});
	}

	checkedStateHandler(card) {
		let timesHolder = card.querySelector('.calendar-header');
		let days = card.querySelector('.date-list');

		if (timesHolder && days) {
			let dayIsChoosed = days.querySelector("input:checked");
			let timeIsChoosed = timesHolder.querySelector("input:checked");

			if(dayIsChoosed && timeIsChoosed) {
				card.classList.add(this.options.activeClass);
			} else {
				card.classList.remove(this.options.activeClass);
			}
		}
	}
}

export default LocationBooking;