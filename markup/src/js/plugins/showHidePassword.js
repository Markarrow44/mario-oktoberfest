class ShowHidePassword {
	constructor(item, options) {
		if (!item) return;

		this.options = Object.assign(
			{
				inputPassword: 'input[type="password"]',
				toggleBtn: '.toggle-pass-btn',
			},
			options
		);

		this.item = item;
		this.inputPassword = this.item.querySelector(this.options.inputPassword);
		this.toggleBtn = this.item.querySelector(this.options.toggleBtn);
		this.attachEvent();
	}

	attachEvent() {
		if (this.toggleBtn) {
			this.toggleBtn.addEventListener('click', this.handlerTogglePassword);
		}
	}

	handlerTogglePassword = () => {
		var input = this.inputPassword;
		if (input.type === 'password') {
			input.type = 'text';
		} else {
			input.type = 'password';
		}
	}
}

export default ShowHidePassword;
