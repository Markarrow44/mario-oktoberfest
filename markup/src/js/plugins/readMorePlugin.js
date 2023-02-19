class ReadMore {
	constructor(holder, options) {
		this.options = Object.assign({
			readMoreContent: '.js-read-more-content',
			toggler: '.js-read-more-toggle',
			collapsedClass: 'collapsed',
			expandedClass: 'expanded',
			lines: 10,
			animSpeed: 300
		}, options);

		this.holder = holder;

		if (!this.holder) return;

		this.content = this.holder.querySelector(this.options.readMoreContent);

		if (!this.content) return;

		this.toggler = this.holder.querySelector(this.options.toggler);
		this.lines = +getComputedStyle(this.holder).getPropertyValue('--lines-count') || this.options.lines;
		this.resizeTimer = null;
		this.animTimer = null;
		this.animating = false;
		this.scrollOffset = 0;

		if (this.toggler) {
			this.setStyles(true);
			this.attachEvent();
		}
	}

	setStyles(fromInit) {
		this.animating = true;
		this.holder.classList.remove(this.options.expandedClass);
		this.holder.classList.add(this.options.collapsedClass);

		this.content.style.overflow = 'hidden';

		if (!fromInit) {
			this.content.style.transition = `max-height ${this.options.animSpeed}ms`;
			this.content.style.maxHeight = `${this.content.scrollHeight}px`;

			setTimeout(() => {
				this.content.style.maxHeight = `${parseFloat(getComputedStyle(this.content).lineHeight) * this.lines}px`;
			}, 0);
		}

		this.animTimer = setTimeout(() => {
			this.content.style.display = '-webkit-box';
			this.content.style['-webkit-line-clamp'] = this.lines;
			this.content.style['-webkit-box-orient'] = 'vertical';
			this.content.style.maxHeight = '';
			this.content.style.transition = '';

			this.animating = false;
			this.refreshTogglerState();
		}, fromInit ? 0 : this.options.animSpeed);
	}

	resetStyles() {
		this.animating = true;
		this.holder.classList.remove(this.options.collapsedClass);
		this.holder.classList.add(this.options.expandedClass);

		this.content.style.overflow = 'hidden';
		this.content.style.transition = `max-height ${this.options.animSpeed}ms`;
		this.content.style.maxHeight = `${parseFloat(getComputedStyle(this.content).lineHeight) * this.lines}px`;

		this.content.style.display = '';
		this.content.style['-webkit-line-clamp'] = '';
		this.content.style['-webkit-box-orient'] = '';

		setTimeout(() => {
			this.content.style.maxHeight = `${this.content.scrollHeight}px`;
		}, 0);

		this.animTimer = setTimeout(() => {
			this.content.style.maxHeight = '';
			this.content.style.transition = '';

			this.animating = false;
			this.refreshTogglerState();
		}, this.options.animSpeed);
	}

	attachEvent() {
		this.toggler.addEventListener('click', this.clickHandler.bind(this));
		window.addEventListener('load', this.resizeHandler.bind(this));
		window.addEventListener('resize', this.resizeHandler.bind(this));
		window.addEventListener('orientationchange', this.resizeHandler.bind(this));
	}

	resizeHandler() {
		clearTimeout(this.resizeTimer);
		this.resizeTimer = setTimeout(() => {
			this.refreshTogglerState();
		}, 100);
	}

	clickHandler(e) {
		e.preventDefault();

		if (this.animating) return;

		if (this.holder.classList.contains(this.options.collapsedClass)) {
			this.resetStyles();
		} else {
			this.setStyles();
		}

		this.saveScrollOffset();
	}

	refreshTogglerState() {
		if (!this.holder.classList.contains(this.options.expandedClass)) {
			if (this.content.scrollHeight > this.content.clientHeight + 1) {
				this.toggler.style.display = '';
			} else {
				this.toggler.style.display = 'none';
			}
		}
	}

	saveScrollOffset() {
		if (this.holder.classList.contains(this.options.expandedClass)) {
			this.scrollOffset = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
		} else {
			if (document.documentElement) {
				document.documentElement.scrollTop = this.scrollOffset;
			} else {
				document.body.scrollTop = this.scrollOffset;
			}
		}
	}
}

export default ReadMore;
