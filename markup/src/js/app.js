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
	initShowHidePassword();
	initiValidateInput();
	initCloseCardNav();
});