import { Validator } from './Validator.js';

function formValidation() {
	const forms = document.querySelectorAll('form.form');

	for (let form of forms) {
		const validatables = form.querySelectorAll('[data-validation');
		const submit = form.querySelector('button[type="submit"]');
		
		submit.addEventListener('click', event => {
			event.preventDefault();
			const validationResult = [];
			let validCount = 0;

			for (let input of validatables) {
				const rule = input.dataset.validation;
				const text = input.value;
				let result = null;
				if (rule === 'name') {
					result = Validator.isValidName(text);
				}
				if (rule === 'email') {
					result = Validator.isValidEmail(text);
				}
				if (rule === 'message') {
					result = Validator.isValidMessage(text);
				}
				validationResult.push(result);
				if (result === true) {
					validCount++;
				}
			}

			if (validCount === validatables.length) {
				console.log('visi TRUE, siunciam info i serveri');
			} else {
				console.log('rastos klaidos');
				console.log(validationResult);
			}

		})
	}
}

export { formValidation }