import * as bootstrap from 'bootstrap';
console.log(bootstrap);

class DropChoice {
	constructor(item, options) {
		if (!item) return;

		this.options = Object.assign({
			fieldSelector: '[type="radio"], [type="checkbox"]',
			clearBtn: '.clear-btn',
			itemLabel: '[data-default-text]',
			selectedClass: 'selected',
			collapseSelector: 'collapse'
		}, options);

		this.item = item;
		this.itemLabel = this.item.querySelector(this.options.itemLabel);
		this.fields = this.item.querySelectorAll(this.options.fieldSelector);
		this.clearBtn =  this.item.querySelector(this.options.clearBtn);
		this.collapseSelector =  this.item.querySelector(this.options.collapseSelector);
		this.choiceType =  this.item.dataset['type'];

		this.checkedFields = [];
		this.attachEvents();
	}

	attachEvents() {
		this.item.addEventListener('click', this.handlerUpdateSelectedData);
		this.clearBtn.addEventListener('click', this.handleHideCollapse);

		window.addEventListener('click', this.handleHideClickOutside);

		if (this.clearBtn) {
			this.clearBtn.addEventListener('click', this.handlerClearFields);
		}
	}

	updateItemLabel() {
		if (!this.itemLabel) return;

		let fieldsLength = this.checkedFields.length;

		if (fieldsLength) {
			if (this.choiceType == 'multiple') {
				this.itemLabel.innerHTML = `${fieldsLength} ${this.itemLabel.dataset.selectedText}`;
			} else {
				this.itemLabel.innerHTML = this.checkedFields.toString();
			}
			this.item.classList.add(this.options.selectedClass);
		} else {
			this.itemLabel.innerHTML = this.itemLabel.dataset.defaultText;
			this.item.classList.remove(this.options.selectedClass);
		}
	}

	handleHideClickOutside = (e) => {
		let elem = document.querySelector('.collapse.show');

		if(elem && !elem.contains(e.target)) {
			new bootstrap.Collapse(elem, {
				toggle: true
			})
		}
	}

	handleHideCollapse = (e) => {
		let collapse = e.target.closest('.collapse.show');

		console.log(1);

		new bootstrap.Collapse(collapse, {
			toggle: true
		})
	}

	handlerClearFields = (e) => {
		e && e.preventDefault();

		this.fields.forEach((field) => {
			field.checked = false;
		});

		this.checkedFields = [];
		this.updateItemLabel();
	}

	handlerUpdateSelectedData = (e) => {
		if (e.target.matches(this.options.fieldSelector)) {
			if (e.target.checked) {
				if (this.choiceType == 'multiple') {
					this.checkedFields.push(e.target.dataset.label);
				} else {
					this.checkedFields = [e.target.dataset.label];
				}
			} else {
				this.checkedFields = this.checkedFields.filter((label) => {
					return label !== e.target.dataset.label;
				});
			}
		}

		this.updateItemLabel();
	}
}


export default DropChoice;