function initCloseCardNav() {
	const cardNav = document.querySelector('.card-nav');
	const subCardsClose = document.querySelector('.sub-cards-close');
	const subCards = document.querySelector('.sub-cards');

	let toggleClass = () => {
		if(subCards.classList.contains('show')) {
			subCardsClose.classList.add('active');
		} else {
			subCardsClose.classList.remove('active');
		}
	}

	cardNav.addEventListener('click' , toggleClass);

	subCardsClose.addEventListener('click' , () => {
		subCardsClose.classList.remove('active');
	});
}

export default initCloseCardNav;
