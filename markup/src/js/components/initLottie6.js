import Lottie from 'lottie-web';

function initLottie() {
	Lottie.loadAnimation({
		container: document.getElementById('svgContainer6'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'inc/clock_success.json',
	});
}

export default initLottie;
