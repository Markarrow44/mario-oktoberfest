import Choices from 'choices.js';

function initCustomSelect() {
	document.querySelectorAll('select').forEach(select => {
		new Choices(select);
	});
}

export default initCustomSelect;
