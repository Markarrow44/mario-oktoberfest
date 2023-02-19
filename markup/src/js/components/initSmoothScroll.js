import '../utils/scroll-behavior-polyfill';
import SmoothScroll from '../plugins/SmoothScrollPlugin';

function initSmoothScroll() {
	const activeClass = 'active';
	const fixedBlocks = document.querySelectorAll('#js-header-fixed, .js-nav-fixed');

	const scroll = new SmoothScroll('a[href*="#"]', {
		topOnEmptyHash: false,
		offset: (anchor, toggle) => {
			return getTotalOffseTop();
		}
	});

	document.querySelectorAll('.js-anchor-nav').forEach(nav => {
		const links = nav.querySelectorAll('a[href*="#"]');
		const anchorData = [];
		const resizeObserver = new ResizeObserver(recalculateOffsets);

		links.forEach(link => {
			const target = document.querySelector(link.hash);

			if (target) {
				anchorData.push({
					link: link,
					target: target,
					offset: getOffset(target).top - getTotalOffseTop(),
					height: target.clientHeight
				});
			}
		});

		// sort anchor data by offsets
		anchorData.sort(function(a, b) {
			return a.offset.top - b.offset.top;
		});

		function recalculateOffsets() {
			anchorData.forEach((data,index) => {
				data.offset = getOffset(data.target).top - getTotalOffseTop();
				data.height = data.target.clientHeight;
			});
			scrollHandler();
		}

		function scrollHandler() {
			let foundFlag = false;
			const containerHeight = getBodyHeight();
			const viewPortHeight = getWindowHeight();
			const scrollTop = getWinScrollTop();

			// default active class handler
			anchorData.forEach((d,index) => {
				let reverseIndex = anchorData.length - index - 1,
					data = anchorData[reverseIndex],
					anchorElement = data.link;

				if (scrollTop >= containerHeight - viewPortHeight) {
					// handle last section
					if (reverseIndex === anchorData.length - 1) {
						toggleActiveClass(anchorElement, data.target, true);
					} else {
						toggleActiveClass(anchorElement, data.target, false);
					}
				} else {
					// handle other sections
					if (!foundFlag && (scrollTop >= data.offset - 3 || reverseIndex === 0)) {
						foundFlag = true;
						toggleActiveClass(anchorElement, data.target, true);
					} else {
						toggleActiveClass(anchorElement, data.target, false);
					}
				}
			});
		}

		recalculateOffsets();

		resizeObserver.observe(document.body);
		window.addEventListener('scroll', scrollHandler);
	});

	function getTotalOffseTop() {
		let offsetTop = 0;

		fixedBlocks.forEach((block) => {
			offsetTop += block.clientHeight;
		});

		return offsetTop;
	}

	function getWinScrollTop() {
		return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
	}

	function getBodyHeight() {
		const body = document.body;
		const html = document.documentElement;
		const height = Math.max(
		  body.offsetHeight,
		  body.scrollHeight,
		  html.clientHeight,
		  html.offsetHeight,
		  html.scrollHeight
		);

		return height;
	}

	function getWindowHeight() {
        return window.innerHeight || document.documentElement.clientHeight;
    }

	function toggleActiveClass(anchor, block, state, activeClass = 'active') {
		anchor.classList.toggle(activeClass, state);
	}

	function getOffset(el) {
		const box = el.getBoundingClientRect();

		return {
			top: box.top + window.pageYOffset - document.documentElement.clientTop,
			left: box.left + window.pageXOffset - document.documentElement.clientLeft
		};
	}
}

export default initSmoothScroll;
