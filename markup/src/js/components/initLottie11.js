import Lottie from 'lottie-web';

function initLottie() {
	Lottie.loadAnimation({
		container: document.getElementById('svgContainer11'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'inc/email4.json',
	});
}

export default initLottie;
