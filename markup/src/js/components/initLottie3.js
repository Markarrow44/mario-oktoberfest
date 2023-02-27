import Lottie from 'lottie-web';

function initLottie() {
	Lottie.loadAnimation({
		container: document.getElementById('svgContainer3'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'inc/reserved.json',
	});
}

export default initLottie;
