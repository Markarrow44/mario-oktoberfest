import LocationBooking from "../plugins/locationBooking";

function initLocationBooking() {
	new LocationBooking({
		item: ".card-order",
		activeClass: "selected-event"
	});
}

export default initLocationBooking;