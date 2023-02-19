import StickySidebar from "../plugins/stickySidebarPlugin";

function initStickyBlock() {
	const fixedHeader = document.querySelector('#js-header-fixed');
	const fixedBlocks = document.querySelectorAll('#js-header-fixed, .js-nav-fixed');

	document.querySelectorAll('#js-sidebar-fixed').forEach(fixedSidebar => {
		const content = fixedSidebar.querySelector('.sidebar');
		const stickySidebar = new StickySidebar(fixedSidebar, {
			topSpacing: 15,
			bottomSpacing: 0,
			containerSelector: '.col-sidebar',
		});

		const resizeObserver = new ResizeObserver((entries) => {
			stickySidebar.updateSticky();
		});

		resizeObserver.observe(document.body);

		if (content) {
			resizeObserver.observe(content);
		}
	});

	document.querySelectorAll('#js-nav-checkout').forEach(fixednavCheckout => {
		const stickySidebar = new StickySidebar(fixednavCheckout, {
			topSpacing: 0,
			bottomSpacing: 0,
			containerSelector: '.col-acc',
		});

		const resizeObserver = new ResizeObserver((entries) => {
			stickySidebar.updateSticky();
		});

		resizeObserver.observe(document.body);
	});

	document.querySelectorAll('#js-header-fixed').forEach(fixedHeader => {
		const stickySidebar = new StickySidebar(fixedHeader, {
			topSpacing: 0,
			bottomSpacing: 0,
			containerSelector: 'body',
		});

		const resizeObserver = new ResizeObserver((entries) => {
			stickySidebar.updateSticky();
		});

		resizeObserver.observe(document.body);
	});

	document.querySelectorAll('.js-nav-fixed').forEach(nav => {
		const container = document.querySelector('.js-nav-fixed-container');

		const stickySidebar = new StickySidebar(nav, {
			topSpacing: () => {
				return fixedHeader ? fixedHeader.clientHeight : 0
			},
			containerSelector: container ? '.js-nav-fixed-container' : 'body',
		});

		const resizeObserver = new ResizeObserver((entries) => {
			stickySidebar.updateSticky();
		});

		resizeObserver.observe(document.body);
	});

	document.querySelectorAll('.js-btn-fixed .btn').forEach(btn => {
		let target = document.querySelector(btn.hash);
		let offsetTop = getOffset(btn).top;
		let offsetTopTarget = target ? getOffset(target).top : 0;
		let isFixed = false;
		let isHidden = false;
		let timer = null;
		const resizeObserver = new ResizeObserver(resizeHandler);

		function resizeHandler() {
			clearTimeout(timer);

			timer = setTimeout(() => {
				btn.classList.remove('is-fixed');
				btn.style.position = '';
				isFixed = false;
				offsetTop = getOffset(btn).top;
				offsetTopTarget = target ? getOffset(target).top : 0;

				scrollHandler();
			}, 50);
		}

		function scrollHandler() {
			if (getWinScrollTop() > offsetTop - getTotalOffseTop()) {
				if (!isFixed) {
					btn.classList.add('is-fixed');
					btn.style.position = 'fixed';
					btn.style.top = `${getTotalOffseTop() + 10}px`;
					isFixed = true;
				}
			} else {
				if (isFixed) {
					btn.classList.remove('is-fixed');
					btn.style.position = '';
					isFixed = false;
				}
			}

			if (target) {
				if (getWinScrollTop() > offsetTopTarget - getTotalOffseTop() - 100) {
					if (!isHidden) {
						btn.classList.add('is-hidden');
						isHidden = true;
					}
				} else {
					if (isHidden) {
						btn.classList.remove('is-hidden');
						isHidden = false;
					}
				}
			}
		}

		resizeHandler();
		resizeObserver.observe(document.body);

		window.addEventListener('scroll', scrollHandler);
	});

	document.querySelectorAll('.js-btn-fixed-bottom').forEach(holder => {
		let fixedBlock = holder.querySelector('.js-btn-fixed-block');

		if (!fixedBlock) return;

		let offsetTop = getOffset(holder).top + parseFloat(holder.getBoundingClientRect().height);
		let isFixed = false;
		let timer = null;
		const resizeObserver = new ResizeObserver(resizeHandler);

		function resizeHandler() {
			holder.style.minHeight = `${parseFloat(fixedBlock.getBoundingClientRect().height)}px`;
			
			clearTimeout(timer);

			timer = setTimeout(() => {
				offsetTop = getOffset(holder).top + parseFloat(holder.getBoundingClientRect().height);

				if (isFixed) {
					fixedBlock.style.left = `${parseFloat(holder.getBoundingClientRect().left)}px`;
					fixedBlock.style.width = `${holder.clientWidth}px`;
				}

				scrollHandler();
			}, 50);
		}

		function scrollHandler() {
			if (getWinScrollTop() < offsetTop - getWindowHeight()) {
				if (!isFixed) {
					fixedBlock.classList.add('is-fixed');
					fixedBlock.style.position = 'fixed';
					fixedBlock.style.bottom = '10px';
					fixedBlock.style.left = `${parseFloat(holder.getBoundingClientRect().left)}px`;
					fixedBlock.style.width = `${holder.clientWidth}px`;
					isFixed = true;
				}
			} else {
				if (isFixed) {
					fixedBlock.classList.remove('is-fixed');
					fixedBlock.style.position = '';
					fixedBlock.style.left = '';
					fixedBlock.style.width = '';
					isFixed = false;
				}
			}
		}

		resizeHandler();
		resizeObserver.observe(document.body);

		window.addEventListener('scroll', scrollHandler);
	});

	function getWindowHeight() {
        return window.innerHeight || document.documentElement.clientHeight;
    }

	function getWinScrollTop() {
		return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
	}

	function getOffset(el) {
		const box = el.getBoundingClientRect();

		return {
			top: box.top + window.pageYOffset - document.documentElement.clientTop,
			left: box.left + window.pageXOffset - document.documentElement.clientLeft
		};
	}

	function getTotalOffseTop() {
		let offsetTop = 0;

		fixedBlocks.forEach((block) => {
			offsetTop += block.clientHeight;
		});

		return offsetTop;
	}
}

export default initStickyBlock;
