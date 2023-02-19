
function initCheckedCardService() {
	const cardService = document.querySelectorAll('.card-service');

	cardService.forEach((card) => {
		card.classList.remove("open");

		card.addEventListener('click', (e) => {
			let thisCard = e.currentTarget;
			
			cardService.forEach((card) => {
				card.classList.remove("open");
			});
			
			thisCard.classList.add("open");
			
			if(thisCard.querySelector("input:checked")) {
				thisCard.classList.add("active");
			} else {
				thisCard.classList.remove("active");
			}
		});
	});
}

export default initCheckedCardService;
