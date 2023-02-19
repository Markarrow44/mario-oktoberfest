import Lottie from 'lottie-web';

function initLottie() {
	Lottie.loadAnimation({
		container: document.getElementById('svgContainer'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'inc/data.json',
	});
}

export default initLottie;
