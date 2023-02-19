export default function initiValidateInput() {
	const inputHolders = document.querySelectorAll('.acc-item');

	inputHolders.forEach((holder) => {
		const inputs = holder.querySelectorAll('input[type="text"]');
		const radios = holder.querySelectorAll('input[type="radio"]');

		radios.forEach((radio) => {
			radio.addEventListener('click', () => {
				if(radio.checked) {
					inputs.forEach((input) => {
						input.classList.remove('active');
						input.value = "";
					});
				}
			})
		})

		inputs.forEach((input) => {
			input.addEventListener('change', () => {
				if (input.value) {
					input.classList.add('active');

					radios.forEach((radio) => {
						radio.checked = false;
					});

				} else {
					input.classList.remove('active');
				}
			});
		});
	});
}
