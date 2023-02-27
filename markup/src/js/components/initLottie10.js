import Lottie from 'lottie-web';

function initLottie() {
	Lottie.loadAnimation({
		container: document.getElementById('svgContainer10'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'inc/email3.json',
	});
}

export default initLottie;
