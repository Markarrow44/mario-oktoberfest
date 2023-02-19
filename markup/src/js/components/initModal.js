function initModal() {
	var myModalEl = document.getElementById('filterModal');
	var body = document.querySelector('body');

	if(myModalEl) {
		myModalEl.addEventListener('show.bs.modal', function (event) {
			body.classList.add("hide-overaly");
		});
		
		myModalEl.addEventListener('hide.bs.modal', function (event) {
			body.classList.remove("hide-overaly");
		});
	}

}

export default initModal;
