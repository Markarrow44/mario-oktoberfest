import Lottie from 'lottie-web';

function initLottie() {
	Lottie.loadAnimation({
		container: document.getElementById('svgContainer7'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'inc/items.json',
	});
}

export default initLottie;
