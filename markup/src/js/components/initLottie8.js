import Lottie from 'lottie-web';

function initLottie() {
	Lottie.loadAnimation({
		container: document.getElementById('svgContainer8'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'inc/email1.json',
	});
}

export default initLottie;
