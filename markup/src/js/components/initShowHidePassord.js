import ShowHidePassword from "../plugins/showHidePassword";

function initShowHidePassword() {
	const inputHolder = document.querySelectorAll(".input-password");

	inputHolder.forEach((inputHolder)=> {
		new ShowHidePassword(inputHolder);
	})

}

export default initShowHidePassword;