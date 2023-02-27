import Lottie from 'lottie-web';

function initLottie() {
	Lottie.loadAnimation({
		container: document.getElementById('svgContainer9'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'inc/email2.json',
	});
}

export default initLottie;
