import Lottie from 'lottie-web';

function initLottie() {
	Lottie.loadAnimation({
		container: document.getElementById('svgContainer5'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'inc/inbox.json',
	});
}

export default initLottie;
