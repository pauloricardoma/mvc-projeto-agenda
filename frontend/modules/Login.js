import validator from 'validator';

const menssagensFlash = document.querySelector('.menssagens-flash-login');

export default class Login {
	constructor(formClass) {
		this.form = document.querySelector(formClass);
	}

	init() {
		this.events();
	}

	events() {
		if (!this.form) return;
		this.form.addEventListener('submit', e => {
			e.preventDefault();
			this.validate(e);
		});
	}

	validate(e) {
		const el = e.target;
		const emailInput = el.querySelector('input[name="email"]');
		const passwordInput = el.querySelector('input[name="password"]');
		let error = false;
		let errors = [];

		if (!validator.isEmail(emailInput.value)) {
			errors.push('Email inválido. <br>');
			error = true;
		}

		if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
			errors.push('Senha precisa ter entre 3 e 50 caracteres.');
			error = true;
		}

		menssagensFlash.innerHTML = '';
		if (error) {
			for (let erro of errors) {
				menssagensFlash.innerHTML += erro;
			}
		}

		if (!error) el.submit();
	}
}
