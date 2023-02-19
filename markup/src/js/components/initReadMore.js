import ReadMore from "../plugins/readMorePlugin";

function initReadMore() {
	document.querySelectorAll('.js-read-more-holder').forEach(holder => {
		new ReadMore(holder);
	});
}

export default initReadMore;