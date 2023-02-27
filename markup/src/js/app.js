import 'bootstrap';
import ready, { HTML } from './utils';
import swiperInit from './components/initSwiper';
import initFilterForm from './components/initFilterForm';
import initLocationBooking from './components/initLocationBooking';
import initReadMore from './components/initReadMore';
import initStickyBlock from './components/initStickyBlock';
import initSmoothScroll from "./components/initSmoothScroll";
import initCustomSelect from './components/initCustomSelect';
import initModal from './components/initModal';
import initCheckedCardService from './components/initCheckedCardService';
import initLottie from './components/initLottie';
import initLottie2 from './components/initLottie2';
import initLottie3 from './components/initLottie3';
import initLottie4 from './components/initLottie4';
import initLottie5 from './components/initLottie5';
import initLottie6 from './components/initLottie6';
import initLottie7 from './components/initLottie7';
import initLottie8 from './components/initLottie8';
import initLottie9 from './components/initLottie9';
import initLottie10 from './components/initLottie10';
import initLottie11 from './components/initLottie11';
import initShowHidePassword from './components/initShowHidePassord';
import initiValidateInput from './components/initiValidateInput';
import initCloseCardNav from './components/initCloseCardNav';


ready(() => {
	HTML.classList.add('is-loaded');

	swiperInit();
	initFilterForm();
	initLocationBooking();
	initReadMore();
	initStickyBlock();
	initSmoothScroll();
	initCustomSelect();
	initModal();
	initCheckedCardService();
	initLottie();
	initLottie2();
	initLottie3();
	initLottie4();
	initLottie5();
	initLottie6();
	initLottie7();
	initLottie8();
	initLottie9();
	initLottie10();
	initLottie11();
	initShowHidePassword();
	initiValidateInput();
	initCloseCardNav();
});