import Lottie from 'lottie-web';

function initLottie() {
	Lottie.loadAnimation({
		container: document.getElementById('svgContainer4'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'inc/clock.json',
	});
}

export default initLottie;
