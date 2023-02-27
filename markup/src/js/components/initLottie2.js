import Lottie from 'lottie-web';

function initLottie() {
	Lottie.loadAnimation({
		container: document.getElementById('svgContainer2'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'inc/mayor.json',
	});
}

export default initLottie;
